package com.dalykai.repository;

import com.dalykai.entity.NewDocument;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NewDocumentRepository extends JpaRepository<NewDocument, Long> {

}
