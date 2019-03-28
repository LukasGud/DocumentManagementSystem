package com.docuservice.persistance.repository;

import com.docuservice.persistance.domain.UserGroupMerged;
import org.hibernate.Session;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserGroupMergedRepository extends JpaRepository<UserGroupMerged, Long> {
    List<UserGroupMerged> findAll();



}
