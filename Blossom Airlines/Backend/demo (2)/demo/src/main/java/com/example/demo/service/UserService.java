package com.example.demo.service;

import com.example.demo.dto.RegisterRequest;
import com.example.demo.dto.LoginRequest;

public interface UserService {
    String registerUser(RegisterRequest request);
    String loginUser(LoginRequest request);
}