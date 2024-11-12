package com.fsd.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.fsd.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);
}