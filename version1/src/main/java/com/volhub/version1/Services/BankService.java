package com.volhub.version1.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.volhub.version1.Model.Bank;
import com.volhub.version1.Repositories.BankRepo;

@Service
public class BankService {

    @Autowired
    BankRepo bankrepo;

    public List<Bank> getBankDetails() {
        return bankrepo.findAll();
    }

    public Bank getBankDetailsById(Long id) {
        return bankrepo.findById(id).get();
    }

    public void createBank(Bank bank) {
        bankrepo.save(bank);
    }

    public void updateBankDetails(Long id, Bank bank) {
        Bank exist = bankrepo.findById(id).get();
        if (exist != null) {
            exist.setId(bank.getId());
            exist.setUser(bank.getUser());
            exist.setBankName(bank.getBankName());
            exist.setAccHolderName(bank.getAccHolderName());
            exist.setAccNo(bank.getAccNo());
            exist.setIfscCode(bank.getIfscCode());
            exist.setBranchName(bank.getBranchName());

            bankrepo.save(exist);
        }
    }
}
