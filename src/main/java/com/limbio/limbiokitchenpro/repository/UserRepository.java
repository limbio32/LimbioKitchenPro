package com.limbio.limbiokitchenpro.repository;

import com.limbio.limbiokitchenpro.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}