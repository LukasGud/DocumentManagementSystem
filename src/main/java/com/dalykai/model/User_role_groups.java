package com.dalykai.model;

import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
@Table(name = "user_role_groups")
public class User_role_groups {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long entryId;


    @Column(name = "user_id")
    private Long user_id;


    @Column(name = "role_group_id")
    private int role_group_id;

    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public int getRole_group_id() {
        return role_group_id;
    }

    public void setRole_group_id(int role_group_id) {
        this.role_group_id = role_group_id;
    }

//    public Long getEntryId() {
//        return entryId;
//    }
//
//    public void setEntryId(Long entryId) {
//        this.entryId = entryId;
//    }
}
