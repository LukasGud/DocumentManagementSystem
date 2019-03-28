package com.docuservice.api.controller;


import com.docuservice.api.controller.request.PostNewTemplateRequest;
import com.docuservice.persistance.domain.Template;
import com.docuservice.persistance.repository.TemplateRepository;
import com.docuservice.persistance.repository.UserRepository;
import com.docuservice.security.UserPrincipal;
import com.docuservice.security.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/templates")
@CrossOrigin(origins = "http://localhost:3000", allowedHeaders = "*")
public class NewTemplateController {

    @Autowired
    TemplateRepository templateRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/all")
    public List<Template> getTemplates( ) {
        return this.templateRepository.findAll();
    }

    @PostMapping("/newtemplate")
    public Template addNewTemplate(@RequestBody PostNewTemplateRequest newTemplateRequest,
                                   @AuthenticationPrincipal UserPrincipal user) {

        User currentUser = userRepository.getOne(user.getId());

        Template postedTemplate = new Template();
        postedTemplate.setTitle(newTemplateRequest.title);
        postedTemplate.setText(newTemplateRequest.text);
        userRepository.save(currentUser);
        templateRepository.save(postedTemplate);

        return postedTemplate;
    }
}
