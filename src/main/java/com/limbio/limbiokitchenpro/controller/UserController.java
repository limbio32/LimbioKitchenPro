package com.limbio.limbiokitchenpro.controller;

import com.limbio.limbiokitchenpro.dto.RegisterRequest;
import com.limbio.limbiokitchenpro.dto.LoginRequest;
import com.limbio.limbiokitchenpro.entity.User;
import com.limbio.limbiokitchenpro.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody RegisterRequest request) {
        userService.register(
                request.getEmail(),
                request.getPassword(),
                request.getFirstname(),
                request.getLastname()
        );
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest request) {
        User user = userService.login(request.getEmail(), request.getPassword());
        return ResponseEntity.ok("Logged in as: " + user.getEmail());
    }

    @GetMapping
    public ResponseEntity<List<User>> getAllUsers() {
        return ResponseEntity.ok(userService.getAllUsers());
    }
}