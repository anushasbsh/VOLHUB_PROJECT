package com.volhub.version1.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.volhub.version1.Model.Profile;
import com.volhub.version1.Services.ProfileService;
import org.springframework.web.bind.annotation.PutMapping;

@RestController
@RequestMapping("/profile")
public class ProfileController {

    @Autowired
    private ProfileService profileservice;

    @GetMapping("/get")
    public List<Profile> getAllProfiles() {
        return profileservice.getProfileDetails();
    }

    @GetMapping("/get/{id}")
    public Profile getProfileById(@PathVariable Long id) {
        return profileservice.getProfileDetailsById(id);
    }

    @PostMapping("/post")
    public String createNewProfile(@RequestBody Profile profile) {
        profileservice.createProfile(profile);
        return "Profile Created Successfully!";
    }

    @PutMapping("/update/{id}")
    public String updateProfile(@PathVariable Long id, @RequestBody Profile profile) {
        profileservice.updateProfileDetails(id, profile);
        return "Profile Updated Successfully!";
    }
}
