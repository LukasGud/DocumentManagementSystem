package com.docuservice.persistance.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@Table(name = "document_status")
public class DocumentStatus implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_status_id")
    private Long id;
    @Column(name = "posted")
    private int posted;
    @Column(name = "approved")
    private int approved;
    @Column(name = "rejected")
    private int rejected;

    @OneToMany(mappedBy = "status", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<Document> newDocument;

    public DocumentStatus() {
    }

    public DocumentStatus(int posted, int approved, int rejected) {
        this.posted = posted;
        this.approved = approved;
        this.rejected = rejected;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getPosted() {
        return posted;
    }

    public void setPosted(int posted) {
        this.posted = posted;
    }

    public int getApproved() {
        return approved;
    }

    public void setApproved(int approved) {
        this.approved = approved;
    }

    public int getRejected() {
        return rejected;
    }

    public void setRejected(int rejected) {
        this.rejected = rejected;
    }

    public List<Document> getNewDocument() {
        return newDocument;
    }

    public void setNewDocument(List<Document> newDocument) {
        this.newDocument = newDocument;
    }


}
