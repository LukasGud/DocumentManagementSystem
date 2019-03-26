package com.docuservice.persistance.repository;

import com.docuservice.persistance.domain.DocumentStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DocumentStatusRepository extends JpaRepository<DocumentStatus, Long> {
}
