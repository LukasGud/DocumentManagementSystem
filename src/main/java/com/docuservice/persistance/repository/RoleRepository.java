package com.docuservice.persistance.repository;


import com.docuservice.security.model.Role;
import com.docuservice.security.model.RoleName;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends PagingAndSortingRepository<Role, Long> {
    Optional<Role> findByName(RoleName roleName);
}
