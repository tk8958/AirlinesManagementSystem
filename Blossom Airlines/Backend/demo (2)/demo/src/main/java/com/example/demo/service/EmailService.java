package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender mailSender;

    public void sendBookingConfirmation(String toEmail, String passengerName ) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setTo(toEmail);
        message.setSubject("Flight Booking Confirmation");
        message.setText("Dear " + passengerName + ", \n\nYour flight has been successfully booked \n If you want to cancel the flight then please visit our cancel section within 24 hours\n\nThank you! \n\nWith Regards,\nBlossom Airlines");

        mailSender.send(message);
    }
}
