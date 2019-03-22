package com.dalykai.model;


import org.hibernate.annotations.NaturalId;

import javax.persistence.*;

@Entity
@Table(name = "role_group")
public class Role_group {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    @NaturalId
    @Column(length = 60)
    private Role_groupName name;

    public Role_group() {

    }

    public Role_group(Role_groupName name) {
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Role_groupName getName() {
        return name;
    }

    public void setName(Role_groupName name) {
        this.name = name;
    }
}

