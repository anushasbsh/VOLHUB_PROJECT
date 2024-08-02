package com.volhub.version1.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.volhub.version1.Model.Profile;
import com.volhub.version1.Repositories.ProfileRepo;

@Service
public class ProfileService {

	@Autowired
	ProfileRepo profilerepo;

	public List<Profile> getProfileDetails() {
		return profilerepo.findAll();
	}

	public Profile getProfileDetailsById(Long id) {
		return profilerepo.findById(id).get();
	}

	public void createProfile(Profile profile) {
		profilerepo.save(profile);
	}

	public void updateProfileDetails(Long id, Profile profile) {
		Profile exist = profilerepo.findById(id).get();
		if (exist != null) {
			exist.setId(profile.getId());
			exist.setUser(profile.getUser());
			exist.setDateOfBirth(profile.getDateOfBirth());
			exist.setWebsiteURL(profile.getWebsiteURL());
			exist.setStreet(profile.getStreet());
			exist.setCity(profile.getCity());
			exist.setState(profile.getState());
			exist.setZipCode(profile.getZipCode());
			exist.setSkills(profile.getSkills());
			exist.setExperience(profile.getExperience());
			exist.setAreaOfInterest(profile.getAreaOfInterest());
			exist.setLinkedInURL(profile.getLinkedInURL());
			exist.setMedicalCertificate(profile.getMedicalCertificate());
			exist.setResume(profile.getResume());
			exist.setImage(profile.getImage());
			exist.setNoOfEventsAttended(profile.getNoOfEventsAttended());
			exist.setTimeSpent(profile.getTimeSpent());
			exist.setRewardsEarned(profile.getRewardsEarned());
			exist.setDonationCollected(profile.getDonationCollected());
			exist.setEventsOrganized(profile.getEventsOrganized());
			exist.setVolunteersTurnOut(profile.getVolunteersTurnOut());
			exist.setSessionsConducted(profile.getSessionsConducted());
			exist.setFundRaised(profile.getFundRaised());

			profilerepo.save(exist);
		}
	}
}
