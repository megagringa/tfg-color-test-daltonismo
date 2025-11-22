package com.tfg.tfgbackend.model;

import jakarta.persistence.*;

@Entity
@Table(name = "test_results")
public class TestResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String date;
    private int correct;
    private int total;
    private int percentage;
    private String diagnosis;

    public TestResult() {
    }

    public TestResult(String date, int correct, int total, int percentage, String diagnosis) {
        this.date = date;
        this.correct = correct;
        this.total = total;
        this.percentage = percentage;
        this.diagnosis = diagnosis;
    }

    // GETTERS y SETTERS

    public Long getId() { return id; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public int getCorrect() { return correct; }
    public void setCorrect(int correct) { this.correct = correct; }

    public int getTotal() { return total; }
    public void setTotal(int total) { this.total = total; }

    public int getPercentage() { return percentage; }
    public void setPercentage(int percentage) { this.percentage = percentage; }

    public String getDiagnosis() { return diagnosis; }
    public void setDiagnosis(String diagnosis) { this.diagnosis = diagnosis; }
}