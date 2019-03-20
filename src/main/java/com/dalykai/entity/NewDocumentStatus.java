package com.dalykai.entity;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Entity
@Table(name = "document_status")
public class NewDocumentStatus implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_status_id")
    private int id;
    @Column(name = "posted")
    private int posted;
    @Column(name = "approved")
    private int approved;
    @Column(name = "rejected")
    private int rejected;

    @OneToMany(mappedBy = "newDocumentStatus", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<NewDocument> newDocument;

    public NewDocumentStatus() {
    }

    public NewDocumentStatus(int posted, int approved, int rejected) {
        this.posted = posted;
        this.approved = approved;
        this.rejected = rejected;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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

    public List<NewDocument> getNewDocument() {
        return newDocument;
    }

    public void setNewDocument(List<NewDocument> newDocument) {
        this.newDocument = newDocument;
    }

    @Override
    public String toString() {
        return "NewDocumentStatus{" +
                "id=" + id +
                ", posted=" + posted +
                ", approved=" + approved +
                ", rejected=" + rejected +
                ", newDocument=" + newDocument +
                '}';
    }
}
