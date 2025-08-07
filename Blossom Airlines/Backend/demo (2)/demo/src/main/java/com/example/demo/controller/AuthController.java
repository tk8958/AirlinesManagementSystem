
package com.example.demo.controller;

import com.example.demo.dto.LoginRequest;
import com.example.demo.dto.RegisterRequest;
import com.example.demo.model.BookingDetails;
import com.example.demo.repository.BookingRepository;
import com.example.demo.service.EmailService;
import com.example.demo.service.UserService;

import java.time.LocalDate;
import java.time.YearMonth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/api/auth")  // API Base URL
public class AuthController {

    @Autowired
    private UserService userService;

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
private EmailService emailService;

    @PostMapping(value = "/save", consumes = "multipart/form-data")
public ResponseEntity<String> saveBookingDetails(
        @RequestParam String passengerName,
        @RequestParam String passengerEmail,
        @RequestParam String phone,
        @RequestParam String gender,
        @RequestParam String dob,
        @RequestParam MultipartFile aadhaar,
        @RequestParam String cardName,
        @RequestParam String cardNumber,
        @RequestParam String expiry
         
) {
    BookingDetails booking = new BookingDetails();
    booking.setPassengerName(passengerName);
    booking.setPassengerEmail(passengerEmail);
    booking.setPhone(phone);
    booking.setGender(gender);
    booking.setDob(LocalDate.parse(dob));
    booking.setAadhaar(aadhaar.getOriginalFilename()); // सिर्फ नाम save कर रहे हैं
    booking.setCardName(cardName);
    booking.setCardNumber(cardNumber);
    booking.setExpiry(YearMonth.parse(expiry)); // expiry format YYYY-MM

    bookingRepository.save(booking);

    
    emailService.sendBookingConfirmation(passengerEmail, passengerName);

    return ResponseEntity.ok("Booking details saved successfully and email sent!");
}

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        return userService.registerUser(request);
    }

    @PostMapping("/login")
    public String login(@RequestBody LoginRequest request) {
        return userService.loginUser(request);
    }
}
