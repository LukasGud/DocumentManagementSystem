package com.dalykai.controller;

import com.dalykai.exception.ResourceNotFoundException;
import com.dalykai.model.Role_group;
import com.dalykai.model.User_role_groups;
import com.dalykai.repository.Role_groupRepository;
import com.dalykai.repository.User_role_groupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api")
public class Role_groupController {

    @Autowired
    Role_groupRepository role_groupRepository;

    @Autowired
    User_role_groupRepository user_role_groupRepository;

    @CrossOrigin(origins = "http://localhost:3000")

    @GetMapping("/Role_groups")
    public List<Role_group> getAllRole_groups() {
        return role_groupRepository.findAll();
    }
    @GetMapping("/Role_groups/{id}")
    public Role_group getRole_groupById(@PathVariable(value = "id") Long role_groupId) {
        return role_groupRepository.findById(role_groupId)
                .orElseThrow(() -> new ResourceNotFoundException("Role_group", "id", role_groupId));
    }

    @GetMapping("/userRole_groups")
    public List<User_role_groups> getAllUserRole_groups (){
        return user_role_groupRepository.findAll();
    }

    @GetMapping("/userRole_groups/{user_id}")
    public User_role_groups getAllUserRole_groupsById(@PathVariable (value = "user_id") Long userId ){
        return user_role_groupRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("user_group_id", "user_id", userId));
    }

    @PostMapping("/Role_groups")
    public Role_group createRole_group(@Valid @RequestBody Role_group role_group) {
        return role_groupRepository.save(role_group);
    }

    @PutMapping("userRole_groups/{user_id}")
    public User_role_groups updateUserRole_group(@PathVariable(value = "user_id")Long user_role_groupId,
                                                           @Valid @RequestBody User_role_groups role_groupStuff){
        User_role_groups user_role_groups = user_role_groupRepository.findById(user_role_groupId)
                .orElseThrow(() -> new ResourceNotFoundException("Role_group", "user_id", user_role_groupId));


        user_role_groups.setRole_group_id(role_groupStuff.getRole_group_id());

        User_role_groups updatedUserRole_group = user_role_groupRepository.save(user_role_groups);
        return updatedUserRole_group;
    }

    @PostMapping("/userRole_groups")
    public User_role_groups insertUserAndGroup(@Valid @RequestBody User_role_groups user_role_groups){
//        user_role_groups.setUser_id(user_role_groups.getUser_id());
//        user_role_groups.setRole_group_id(user_role_groups.getRole_group_id());
        return user_role_groupRepository.save(user_role_groups);

    }

}

