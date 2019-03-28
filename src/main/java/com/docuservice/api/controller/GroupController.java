package com.docuservice.api.controller;


import com.docuservice.api.controller.exception.ResourceNotFoundException;
import com.docuservice.persistance.domain.UserGroup;
import com.docuservice.persistance.domain.UserGroupMerged;
import com.docuservice.persistance.repository.GroupRepository;
import com.docuservice.persistance.repository.UserGroupMergedRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
public class GroupController {

    @Autowired
    GroupRepository groupRepository;

    @Autowired
    UserGroupMergedRepository userGroupMergedRepository;


    @CrossOrigin(origins = "http://localhost:3000")

    @GetMapping("/usergroups")
    public List<UserGroup> getAllUserGroups (){

        return groupRepository.findAll();
    }

    @GetMapping("/usergroups/{user_id}")
    public UserGroupMerged getAllUserGroupsById(@PathVariable (value = "user_id") Long userId ){
        return userGroupMergedRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("user_group_id", "user_id", userId));
    }

    @PostMapping("/groups")
    public UserGroup createGroup(@Valid @RequestBody UserGroup userGroup) {
        return groupRepository.save(userGroup);
    }

    @PostMapping("/usergroups")
    public UserGroupMerged insertUserAndGroup(@Valid @RequestBody UserGroupMerged userGroupMerged){
        return userGroupMergedRepository.save(userGroupMerged);
    }
}
