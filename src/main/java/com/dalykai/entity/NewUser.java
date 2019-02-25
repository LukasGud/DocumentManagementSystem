package com.dalykai.entity;


import javax.persistence.*;

@Entity
@Table(name = "users")
public class NewUser {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;
    @Column(name = "username")
    private String username;
    @Column(name = "authority")
    private String authority;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
   @Column(name = "email")
    private String email;
   @Column(name = "PASSWORD")
    private String password;
   @Column(name = "enabled")
    private int enabled;

   public NewUser() {
   }

    public NewUser(String username, String authority, String firstName, String lastName, String email, String password, int enabled) {
        this.username = username;
        this.authority = authority;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.enabled = enabled;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getAuthority() {
        return authority;
    }

    public void setAuthority(String authority) {
        this.authority = authority;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public int getEnabled() {
        return enabled;
    }

    public void setEnabled(int enabled) {
        this.enabled = enabled;
    }

    @Override
    public String toString() {
        return "NewUser{" + "id=" + id + ", username='" + username + '\'' + ", authority='" + authority + '\'' + ", firstName='" + firstName + '\'' + ", lastName='" + lastName + '\'' + ", email='" + email + '\'' + ", password='" + password + '\'' + ", enabled=" + enabled + '}';
    }
}
