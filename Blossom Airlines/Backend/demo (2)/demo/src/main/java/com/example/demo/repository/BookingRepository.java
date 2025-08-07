package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.BookingDetails;

public interface BookingRepository extends JpaRepository<BookingDetails, Long> {
}
