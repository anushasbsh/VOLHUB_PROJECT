package com.volhub.version1.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Table;

@Entity
@Table(name = "profile")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;

    private String dateOfBirth;

    private String websiteURL;

    private String street;

    private String city;

    private String state;

    private String zipCode;

    private String skills;

    private String experience;

    private String areaOfInterest;

    private String linkedInURL;

    private String medicalCertificate;

    private String resume;

    private String image;

    private String noOfEventsAttended;
    private String timeSpent;
    private String rewardsEarned;
    private String donationCollected;

    private String eventsOrganized;
    private String volunteersTurnOut;
    private String sessionsConducted;
    private String fundRaised;

    // Constructors
    public Profile() {
    }

    public Profile(Long id, User user, String dateOfBirth, String websiteURL, String street, String city, String state,
            String zipCode, String skills, String experience, String areaOfInterest, String linkedInURL,
            String medicalCertificate, String resume, String image, String noOfEventsAttended, String timeSpent,
            String rewardsEarned, String donationCollected, String eventsOrganized, String volunteersTurnOut,
            String sessionsConducted, String fundRaised) {
        this.id = id;
        this.user = user;
        this.dateOfBirth = dateOfBirth;
        this.websiteURL = websiteURL;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.skills = skills;
        this.experience = experience;
        this.areaOfInterest = areaOfInterest;
        this.linkedInURL = linkedInURL;
        this.medicalCertificate = medicalCertificate;
        this.resume = resume;
        this.image = image;
        this.noOfEventsAttended = noOfEventsAttended;
        this.timeSpent = timeSpent;
        this.rewardsEarned = rewardsEarned;
        this.donationCollected = donationCollected;
        this.eventsOrganized = eventsOrganized;
        this.volunteersTurnOut = volunteersTurnOut;
        this.sessionsConducted = sessionsConducted;
        this.fundRaised = fundRaised;
    }

    // Getters and setters
    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Profile [id=" + id + ", user=" + user + ", dateOfBirth=" + dateOfBirth + ", websiteURL=" + websiteURL
                + ", street=" + street + ", city=" + city + ", state=" + state + ", zipCode=" + zipCode + ", skills="
                + skills + ", experience=" + experience + ", areaOfInterest=" + areaOfInterest + ", linkedInURL="
                + linkedInURL + ", medicalCertificate=" + medicalCertificate + ", resume=" + resume + ", image=" + image
                + ", noOfEventsAttended=" + noOfEventsAttended + ", timeSpent=" + timeSpent + ", rewardsEarned="
                + rewardsEarned + ", donationCollected=" + donationCollected + ", eventsOrganized=" + eventsOrganized
                + ", volunteersTurnOut=" + volunteersTurnOut + ", sessionsConducted=" + sessionsConducted
                + ", fundRaised=" + fundRaised + "]";
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

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getWebsiteURL() {
        return websiteURL;
    }

    public void setWebsiteURL(String websiteURL) {
        this.websiteURL = websiteURL;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getNoOfEventsAttended() {
        return noOfEventsAttended;
    }

    public void setNoOfEventsAttended(String noOfEventsAttended) {
        this.noOfEventsAttended = noOfEventsAttended;
    }

    public String getTimeSpent() {
        return timeSpent;
    }

    public void setTimeSpent(String timeSpent) {
        this.timeSpent = timeSpent;
    }

    public String getRewardsEarned() {
        return rewardsEarned;
    }

    public void setRewardsEarned(String rewardsEarned) {
        this.rewardsEarned = rewardsEarned;
    }

    public String getDonationCollected() {
        return donationCollected;
    }

    public void setDonationCollected(String donationCollected) {
        this.donationCollected = donationCollected;
    }

    public String getEventsOrganized() {
        return eventsOrganized;
    }

    public void setEventsOrganized(String eventsOrganized) {
        this.eventsOrganized = eventsOrganized;
    }

    public String getVolunteersTurnOut() {
        return volunteersTurnOut;
    }

    public void setVolunteersTurnOut(String volunteersTurnOut) {
        this.volunteersTurnOut = volunteersTurnOut;
    }

    public String getSessionsConducted() {
        return sessionsConducted;
    }

    public void setSessionsConducted(String sessionsConducted) {
        this.sessionsConducted = sessionsConducted;
    }

    public String getFundRaised() {
        return fundRaised;
    }

    public void setFundRaised(String fundRaised) {
        this.fundRaised = fundRaised;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
    }

    public String getAreaOfInterest() {
        return areaOfInterest;
    }

    public void setAreaOfInterest(String areaOfInterest) {
        this.areaOfInterest = areaOfInterest;
    }

    public String getLinkedInURL() {
        return linkedInURL;
    }

    public void setLinkedInURL(String linkedInURL) {
        this.linkedInURL = linkedInURL;
    }

    public String getMedicalCertificate() {
        return medicalCertificate;
    }

    public void setMedicalCertificate(String medicalCertificate) {
        this.medicalCertificate = medicalCertificate;
    }

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
