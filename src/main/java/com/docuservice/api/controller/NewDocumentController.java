package com.docuservice.api.controller;


import com.docuservice.api.controller.request.PostNewDocumentRequest;
import com.docuservice.persistance.domain.Document;
import com.docuservice.persistance.repository.DocumentRepository;
import com.docuservice.persistance.repository.DocumentStatusRepository;
import com.docuservice.persistance.repository.UserRepository;
import com.docuservice.security.UserPrincipal;
import com.docuservice.security.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;

@RestController
@RequestMapping("/api/documents")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class NewDocumentController {

    @Autowired
    DocumentRepository documentRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    DocumentStatusRepository documentStatusRepository;

    @GetMapping("/all")
    public Page<Document> getDocuments(Pageable pageable) {
        return this.documentRepository.findAll(pageable);
    }

    @GetMapping("/{documentNumber}")
    public Document getDocuments(@PathParam("{documentNumber}") String documentNumber) {


        return this.documentRepository.getDocumentByDocumentNumber(documentNumber);
    }

    @PostMapping("/newDocument")
    public Document addNewDocument(@RequestBody PostNewDocumentRequest newDocumentRequest,
                                   @AuthenticationPrincipal UserPrincipal user) {

        User currentUser = userRepository.getOne(user.getId());

        Document postedDocument = new Document();
        postedDocument.setTitle(newDocumentRequest.title);

        currentUser.addUploadedDocument(postedDocument);
        userRepository.save(currentUser);

        return postedDocument;

   }
}
