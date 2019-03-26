package com.dalykai.repository;

import com.dalykai.model.User;
import com.dalykai.model.User_role_groups;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface User_role_groupRepository extends JpaRepository<User_role_groups, Long> {
    List<User_role_groups> findAll();

}
