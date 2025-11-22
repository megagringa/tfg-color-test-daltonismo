package com.tfg.tfgbackend.repository;

import com.tfg.tfgbackend.model.TestResult;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TestResultRepository extends JpaRepository<TestResult, Long> {
}