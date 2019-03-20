package com.dalykai.repository;

import com.dalykai.entity.NewDocumentDetails;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewDocumentDetailsRepository extends JpaRepository<NewDocumentDetails, Long> {
}
