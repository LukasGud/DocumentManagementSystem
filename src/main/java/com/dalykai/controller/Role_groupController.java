package com.dalykai.controller;

import com.dalykai.exception.ResourceNotFoundException;
import com.dalykai.model.Role;
import com.dalykai.model.Role_group;
import com.dalykai.model.User;
import com.dalykai.payload.*;
import com.dalykai.repository.Role_groupRepository;
import com.dalykai.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api")
public class Role_groupController {

    @Autowired
    Role_groupRepository role_groupRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/Role_groups")
    public List<Role_group> getAllRole_groups() {
        return role_groupRepository.findAll();
    }
    @PostMapping("/Role_groups")
    public Role_group createRole_group(@Valid @RequestBody Role_group role_group,  BindingResult bindingResult) {
        return role_groupRepository.save(role_group);

    }
}

