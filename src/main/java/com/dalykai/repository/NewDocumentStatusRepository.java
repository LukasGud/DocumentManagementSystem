package com.dalykai.repository;

import com.dalykai.entity.NewDocumentStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewDocumentStatusRepository extends JpaRepository<NewDocumentStatus, Long> {
}
