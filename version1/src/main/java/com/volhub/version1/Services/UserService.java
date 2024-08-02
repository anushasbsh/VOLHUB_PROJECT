package com.volhub.version1.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.volhub.version1.Model.User;
import com.volhub.version1.Repositories.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userrepo;

    public List<User> getUserDetails() {
        return userrepo.findAll();
    }

    public User getUserDetailsById(Long id) {
        return userrepo.findById(id).get();
    }

    public void createUser(User user) {
        userrepo.save(user);
    }
}
