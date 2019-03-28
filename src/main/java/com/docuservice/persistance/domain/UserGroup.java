package com.docuservice.persistance.domain;

import com.docuservice.security.model.User;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import java.util.List;

@Entity
@Table(name = "user_groups")
@EntityListeners(AuditingEntityListener.class)
public class UserGroup {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "group_id")
    private Long id;

    @Column(name = "group_name",nullable = false, unique = true)
    private String groupName;

    @Column(name = "group_description")
    private String groupDescription;


//    @ManyToMany
//    @JoinTable(
//            name = "group_users",
//            joinColumns = { @JoinColumn(name = "group_id") },
//            inverseJoinColumns = { @JoinColumn(name = "user_id") }
//    )
//    private List<User> userList;

//    public UserGroup() {
//    }
//
//    public UserGroup(String groupName, List<User> userList) {
//        this.groupName = groupName;
//        this.userList = userList;
//    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getGroupName() {
        return groupName;
    }

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public String getGroupDescription() {
        return groupDescription;
    }

    public void setGroupDescription(String groupDescription) {
        this.groupDescription = groupDescription;
    }

    //    public List<User> getUserList() {
//        return userList;
//    }
//
//    public void setUserList(List<User> userList) {
//        this.userList = userList;
//    }
}
