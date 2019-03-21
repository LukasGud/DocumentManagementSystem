package com.dalykai.entity;

import com.dalykai.model.User;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.io.Serializable;
import java.util.List;


@Entity
@Table(name = "document_details")
public class NewDocumentDetails implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "document_details_id")
    private int id;

    @GeneratedValue(strategy = GenerationType.AUTO)
    @NotBlank
    @Column(name = "document_number")
    private String documentNumber;

    @NotBlank
    @Column(name = "document_receiver")
    private String documentReceiver;

    @Column(name = "document_approved_by_user")
    private String documentApprovedByUser;

    @OneToMany(mappedBy = "newDocumentDetails", cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    private List<NewDocument> newDocumentList;
    @ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH}, targetEntity = User.class)
    @JoinColumn(name = "document_user_id")
    private List<User> newUsers;

    public NewDocumentDetails() {
    }

    public NewDocumentDetails(@NotBlank String documentReceiver, String documentAprovedByUser) {
        this.documentReceiver = documentReceiver;
        this.documentApprovedByUser = documentAprovedByUser;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDocumentNumber() {
        return documentNumber;
    }

    public void setDocumentNumber(String documentNumber) {
        this.documentNumber = documentNumber;
    }

    public String getDocumentReceiver() {
        return documentReceiver;
    }

    public void setDocumentReceiver(String documentReceiver) {
        this.documentReceiver = documentReceiver;
    }

    public String getDocumentAprovedByUser() {
        return documentApprovedByUser;
    }

    public void setDocumentAprovedByUser(String documentAprovedByUser) {
        this.documentApprovedByUser = documentAprovedByUser;
    }

    public List<NewDocument> getNewDocumentList() {
        return newDocumentList;
    }

    public void setNewDocumentList(List<NewDocument> newDocumentList) {
        this.newDocumentList = newDocumentList;
    }

    public List<User> getNewUsers() {
        return newUsers;
    }

    public void setNewUsers(List<User> newUsers) {
        this.newUsers = newUsers;
    }

    @Override
    public String toString() {
        return "NewDocumentDetails{" +
                "id=" + id +
                ", documentNumber='" + documentNumber + '\'' +
                ", documentReceiver='" + documentReceiver + '\'' +
                ", documentAprovedByUser='" + documentApprovedByUser + '\'' +
                '}';
    }
}
