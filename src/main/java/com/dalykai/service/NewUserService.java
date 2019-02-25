package com.dalykai.service;

import com.dalykai.entity.NewUser;

import java.util.List;

public interface NewUserService {

    List<NewUser> findAll();

    NewUser findById(int theId);

    void save(NewUser theNewUser);

    void deleteById(int theId);
}
