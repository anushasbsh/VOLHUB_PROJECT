package com.volhub.version1.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "bank")
public class Bank {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id") // Foreign key reference to User entity
    private User user;

    private String bankName;
    private String accHolderName;
    private String accNo;
    private String ifscCode;
    private String branchName;

    @Override
    public String toString() {
        return "Bank [id=" + id + ", user=" + user + ", bankName=" + bankName + ", accHolderName=" + accHolderName
                + ", accNo=" + accNo + ", ifscCode=" + ifscCode + ", branchName=" + branchName + "]";
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getBankName() {
        return bankName;
    }

    public void setBankName(String bankName) {
        this.bankName = bankName;
    }

    public String getAccHolderName() {
        return accHolderName;
    }

    public void setAccHolderName(String accHolderName) {
        this.accHolderName = accHolderName;
    }

    public String getAccNo() {
        return accNo;
    }

    public void setAccNo(String accNo) {
        this.accNo = accNo;
    }

    public String getIfscCode() {
        return ifscCode;
    }

    public void setIfscCode(String ifscCode) {
        this.ifscCode = ifscCode;
    }

    public String getBranchName() {
        return branchName;
    }

    public void setBranchName(String branchName) {
        this.branchName = branchName;
    }

    public Bank(Long id, User user, String bankName, String accHolderName, String accNo, String ifscCode,
            String branchName) {
        this.id = id;
        this.user = user;
        this.bankName = bankName;
        this.accHolderName = accHolderName;
        this.accNo = accNo;
        this.ifscCode = ifscCode;
        this.branchName = branchName;
    }

    public Bank() {
    }
}
