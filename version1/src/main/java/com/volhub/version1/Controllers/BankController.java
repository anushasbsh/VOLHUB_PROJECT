package com.volhub.version1.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.volhub.version1.Model.Bank;
import com.volhub.version1.Services.BankService;

@RestController
@RequestMapping("/bank")
public class BankController {

    @Autowired 
    BankService bankservice;

     @GetMapping("/get")
    public List<Bank> getAllBanks() {
        return bankservice.getBankDetails();
    }

    @GetMapping("/get/{id}")
    public Bank getBankById(@PathVariable Long id) {
        return bankservice.getBankDetailsById(id);
    }

    @PostMapping("/post")
    public String createNewBank(@RequestBody Bank bank) {
        bankservice.createBank(bank);
        return "Bank Details Created Successfully!";
    }

    @PutMapping("/update/{id}")
    public String updateBank(@PathVariable Long id, @RequestBody Bank bank) {
        bankservice.updateBankDetails(id, bank);
        return "Bank Details Updated Successfully!";
    }
}
