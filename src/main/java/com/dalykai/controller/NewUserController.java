package com.dalykai.controller;


import com.dalykai.entity.NewUser;
import com.dalykai.service.NewUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/api")
public class NewUserController {

    private NewUserService newUserService;

    @Autowired
    public NewUserController(NewUserService theNewUserService) {
        newUserService = theNewUserService;
    }

    @GetMapping("/users")
    public List<NewUser> findAll() {
        return newUserService.findAll();
    }

    @GetMapping("/users/{userId}")
    public NewUser getNewUser(@PathVariable int userId) {
        NewUser theNewUser = newUserService.findById((userId));

        if (theNewUser == null) {
            throw new RuntimeException("user id not found - " + userId);
        }
        return theNewUser;
    }

    @PostMapping("/users")
    public NewUser addNewUser(@RequestBody NewUser theNewUser) {
        theNewUser.setId(0);
        newUserService.save(theNewUser);
        return theNewUser;
    }
    @PutMapping("/users")
    public NewUser updateNewUser(@RequestBody NewUser theNewUser) {
        newUserService.save(theNewUser);
        return theNewUser;
    }
    @DeleteMapping("/users/{userId}")
    public String deleteNewUser(@PathVariable int userId) {
        NewUser theNewUser = newUserService.findById(userId);
        if (theNewUser == null) {
            throw  new RuntimeException("user id not found - " + userId);
        }
        newUserService.deleteById(userId);

        return "Deleted user id - " + userId;
    }
}
