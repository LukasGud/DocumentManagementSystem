package com.dalykai.service;


import com.dalykai.dao.NewUserDAO;
import com.dalykai.entity.NewUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


@Service
public class NewUserServiceImpl implements NewUserService {

    private NewUserDAO newUserDAO;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;


    public NewUserServiceImpl(NewUserDAO theNewUserDAO) {newUserDAO = theNewUserDAO;}

    @Override
    @Transactional
    public List<NewUser> findAll() { return newUserDAO.findAll(); }

    @Override
    @Transactional
    public NewUser findById(int theId) {  return newUserDAO.findById(theId);
    }

    @Override
    public void save(NewUser theNewUser) {

        theNewUser.setPassword(passwordEncoder.encode(theNewUser.getPassword()));
        newUserDAO.save(theNewUser);


    }

    @Override
    public void deleteById(int theId) { newUserDAO.deleteById(theId);

    }
}
