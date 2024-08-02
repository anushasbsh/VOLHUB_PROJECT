package com.volhub.version1.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.volhub.version1.Model.User;
import com.volhub.version1.Services.UserService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/volhub")
public class UserController {

    @Autowired
    private UserService userservice;

    @GetMapping("/get")
    public List<User> getAllUsers() {
        return userservice.getUserDetails();
    }

    @GetMapping("/get/{id}")
    public User getUserById(@PathVariable Long id) {
        return userservice.getUserDetailsById(id);
    }

    @PostMapping("/post")
    public String createNewUser(@RequestBody User user) {
        userservice.createUser(user);
        return "User Created Successfully !";
    }

}
