// service/UserServiceImpl.java
package com.example.demo.service;

import com.example.demo.dto.RegisterRequest;
import com.example.demo.dto.LoginRequest;
import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository repo;

    @Autowired
    private BCryptPasswordEncoder encoder;

    @Override
    public String registerUser(RegisterRequest request) {
        if (repo.findByEmail(request.getEmail()).isPresent()) {
            return "Email already registered";
        }
        User user = new User();
        user.setUsername(request.getUsername());
        user.setEmail(request.getEmail());
        user.setPassword(encoder.encode(request.getPassword()));
        repo.save(user);
        return "User registered successfully";
    }

    @Override
    public String loginUser(LoginRequest request) {
        User user = repo.findByEmail(request.getEmail())
                .orElse(null);
        if (user == null) {
            return "Invalid email";
        }
        if (!encoder.matches(request.getPassword(), user.getPassword())) {
            return "Invalid password";
        }
        return "Login successful";
    }
}
