package com.volhub.version1.Repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.volhub.version1.Model.User;

public interface UserRepo extends JpaRepository<User,Long>{

}
