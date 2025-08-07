package com.example.demo.model;

import java.time.LocalDate;
import java.time.YearMonth;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class BookingDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

      
    private String passengerName;
    private String passengerEmail;
    private String phone;
    private String gender;
    private LocalDate dob;
    private String aadhaar;  
    private String cardName;
    private String cardNumber;
    private YearMonth expiry;

    
}
