package com.dalykai.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "documents")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, allowGetters = true)
public class NewDocument implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_id")
    private int id;
    @Column(name = "document_title")
    private String title;
    @Column(name = "document_text")
    private String text;
    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date documentCreated;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date documentUpdated;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH}, targetEntity = NewDocumentDetails.class)
    @JoinColumn(name = "document_details_id")
    private List<NewDocumentDetails> newDocumentDetails;

    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH}, targetEntity = NewDocumentStatus.class)
    @JoinColumn(name = "document_status_id")
    private List<NewDocumentStatus> newDocumentStatus;

    public NewDocument() {
    }

    public NewDocument(String title, String text, Date documentCreated, Date documentUpdated, List<NewDocumentDetails> newDocumentDetails, List<NewDocumentStatus> newDocumentStatus) {
        this.title = title;
        this.text = text;
        this.documentCreated = documentCreated;
        this.documentUpdated = documentUpdated;
        this.newDocumentDetails = newDocumentDetails;
        this.newDocumentStatus = newDocumentStatus;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getText() {
        return text;
    }

    public void setText(String text) {
        this.text = text;
    }

    public Date getDocumentCreated() {
        return documentCreated;
    }

    public void setDocumentCreated(Date documentCreated) {
        this.documentCreated = documentCreated;
    }

    public Date getDocumentUpdated() {
        return documentUpdated;
    }

    public void setDocumentUpdated(Date documentUpdated) {
        this.documentUpdated = documentUpdated;
    }

    public List<NewDocumentDetails> getNewDocumentDetails() {
        return newDocumentDetails;
    }

    public void setNewDocumentDetails(List<NewDocumentDetails> newDocumentDetails) {
        this.newDocumentDetails = newDocumentDetails;
    }

    public List<NewDocumentStatus> getNewDocumentStatuses() {
        return newDocumentStatus;
    }

    public void setNewDocumentStatuses(List<NewDocumentStatus> newDocumentStatuses) {
        this.newDocumentStatus = newDocumentStatuses;
    }

    @Override
    public String toString() {
        return "NewDocument{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", text='" + text + '\'' +
                ", documentCreated=" + documentCreated +
                ", documentUpdated=" + documentUpdated +
                ", newDocumentDetails=" + newDocumentDetails +
                ", newDocumentStatuses=" + newDocumentStatus +
                '}';
    }
}
