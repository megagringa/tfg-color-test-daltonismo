package com.tfg.tfgbackend.service;

import com.tfg.tfgbackend.model.TestResult;
import com.tfg.tfgbackend.repository.TestResultRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TestResultService {

    private final TestResultRepository repo;

    public TestResultService(TestResultRepository repo) {
        this.repo = repo;
    }

    public TestResult save(TestResult result) {
        return repo.save(result);
    }

    public List<TestResult> getAll() {
        return repo.findAll();
    }
}