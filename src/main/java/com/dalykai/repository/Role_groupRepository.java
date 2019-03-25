package com.dalykai.repository;

import com.dalykai.model.Role;
import com.dalykai.model.RoleName;
import com.dalykai.model.Role_group;
//import com.dalykai.model.Role_groupName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface Role_groupRepository extends JpaRepository<Role_group, Long> {
    Optional<Role_group> findByName(String role_groupName);
   


}
