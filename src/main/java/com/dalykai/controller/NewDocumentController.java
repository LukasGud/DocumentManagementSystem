package com.dalykai.controller;


import com.dalykai.entity.NewDocument;
import com.dalykai.repository.NewDocumentDetailsRepository;
import com.dalykai.repository.NewDocumentRepository;
import com.dalykai.repository.NewDocumentStatusRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class NewDocumentController extends NewDocument {

    @Autowired
    NewDocumentRepository newDocumentRepository;
    @Autowired
    NewDocumentDetailsRepository newDocumentDetailsRepository;
    @Autowired
    NewDocumentStatusRepository newDocumentStatusRepository;


    @GetMapping("/documents")
    public Page<NewDocument> getDocuments(Pageable pageable) {
        return this.newDocumentRepository.findAll(pageable);
    }

    @PostMapping("/documents")
    public NewDocument saveDocuments (@Valid @RequestBody NewDocument newDocument){
        return this.newDocumentRepository.save(newDocument);
    }



}