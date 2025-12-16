package com.tfg.tfgbackend.controller;

import com.tfg.tfgbackend.model.TestResult;
import com.tfg.tfgbackend.service.TestResultService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/results")
@CrossOrigin(origins = "*")
public class TestResultController {

    private final TestResultService service;

    public TestResultController(TestResultService service) {
        this.service = service;
    }

    @PostMapping
    public TestResult save(@RequestBody TestResult result) {
        return service.save(result);
    }

    @GetMapping
    public List<TestResult> getAll() {
        return service.getAll();
    }
}