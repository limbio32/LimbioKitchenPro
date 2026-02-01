package com.limbio.limbiokitchenpro.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable())          // отключаем CSRF
                .authorizeHttpRequests(auth -> auth    // разрешаем все запросы
                        .anyRequest().permitAll()
                )
                .httpBasic(Customizer.withDefaults())  // убираем базовую авторизацию
                .formLogin(Customizer.withDefaults()); // убираем форму логина

        return http.build();
    }
}
