package com.limbio.limbiokitchenpro.service;

import com.limbio.limbiokitchenpro.entity.User;
import com.limbio.limbiokitchenpro.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User register(String email, String password, String firstname, String lastname) {
        if (userRepository.findByEmail(email).isPresent()) {
            throw new RuntimeException("User with this email already exists");
        }

        User user = new User();
        user.setEmail(email);
        user.setPasswordHash(passwordEncoder.encode(password));
        user.setFirstname(firstname);
        user.setLastname(lastname);

        return userRepository.save(user);
    }

    public User login(String email, String password) {
        User user = userRepository.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(password, user.getPasswordHash())) {
            throw new RuntimeException("Invalid password");
        }

        return user;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }
}