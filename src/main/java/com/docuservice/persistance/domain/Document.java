package com.docuservice.persistance.domain;

import com.docuservice.security.model.User;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

import static javax.persistence.EnumType.*;

@Entity
@Table(name = "documents")
@EntityListeners(AuditingEntityListener.class)
@JsonIgnoreProperties(value = {"createdAt", "updatedAt"}, allowGetters = true)
public class Document implements Serializable {

    public enum DOCUMENT_STATUS {
        POSTED,
        APPROVED,
        REJECTED,
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_id")
    private Long id;

    @GeneratedValue(strategy = GenerationType.AUTO)
//    @NotBlank
    @Column(name = "document_number", unique = true, nullable = true, updatable = false)
    private String documentNumber;

    @ManyToOne
    @JoinColumn(name = "uploaded_by_user_id", nullable = false)
    private User uploadedBy;

    @ManyToOne
    @JoinColumn(name = "approved_by_user_id")
    private User approvedBy;

    @ManyToMany
    @JoinTable(
            name = "document_receivers",
            joinColumns = { @JoinColumn(name = "document_id") },
            inverseJoinColumns = { @JoinColumn(name = "document_user_id") }
    )
    private List<User> documentReceivers;

    @ManyToMany
    @JoinTable(
            name = "document_receivers",
            joinColumns = { @JoinColumn(name = "document_id") },
            inverseJoinColumns = { @JoinColumn(name = "access_group_id") }
    )
    private List<UserGroup> accessedByGroup;

    @Column(name = "document_title")
    private String title;

    @Column(name = "document_text",columnDefinition = "TEXT")
    private String text;

    @Column(nullable = false, updatable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @CreatedDate
    private Date documentCreated;

    @Column(nullable = false)
    @Temporal(TemporalType.TIMESTAMP)
    @LastModifiedDate
    private Date documentUpdated;

    @Enumerated(value = STRING)
    @Column(name = "document_status")
    private DOCUMENT_STATUS status = DOCUMENT_STATUS.POSTED;

    public Document() {
    }

    public Document(User uploadedBy, User approvedBy, List<User> documentReceivers,
                    List<UserGroup> accessedByGroup, String title, String text) {
        this.uploadedBy = uploadedBy;
        this.approvedBy = approvedBy;
        this.documentReceivers = documentReceivers;
        this.accessedByGroup = accessedByGroup;
        this.title = title;
        this.text = text;
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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDocumentNumber() {
        return documentNumber;
    }

    public void setDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
    }

    public User getUploadedBy() {
        return uploadedBy;
    }

    public void setUploadedBy(User uploadedBy) {
        this.uploadedBy = uploadedBy;
    }

    public User getApprovedBy() {
        return approvedBy;
    }

    public void setApprovedBy(User approvedBy) {
        this.approvedBy = approvedBy;
    }

    public List<User> getDocumentReceivers() {
        return documentReceivers;
    }

    public void setDocumentReceivers(List<User> documentReceivers) {
        this.documentReceivers = documentReceivers;
    }

    public List<UserGroup> getAccessedByGroup() {
        return accessedByGroup;
    }

    public void setAccessedByGroup(List<UserGroup> accessedByGroup) {
        this.accessedByGroup = accessedByGroup;
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

    public DOCUMENT_STATUS getStatus() {
        return status;
    }

    public void setStatus(DOCUMENT_STATUS status) {
        this.status = status;
    }
}
