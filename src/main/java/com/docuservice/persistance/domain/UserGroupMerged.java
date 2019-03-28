package com.docuservice.persistance.domain;

import javax.persistence.*;

@Entity
@Table(name = "group_users")
public class UserGroupMerged {

    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Long entryId;

    @Column(name = "user_id")
    private Long user_id;


    @Column(name = "group_id")
    private int group_id;


    public Long getUser_id() {
        return user_id;
    }

    public void setUser_id(Long user_id) {
        this.user_id = user_id;
    }

    public int getGroup_id() {
        return group_id;
    }

    public void setGroup_id(int group_id) {
        this.group_id = group_id;
    }
}
