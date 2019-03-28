package com.docuservice.persistance.repository;

import com.docuservice.persistance.domain.UserGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface GroupRepository extends JpaRepository<UserGroup, Long> {
        Optional<UserGroup> findByGroupName(String UserGroupName);

}
