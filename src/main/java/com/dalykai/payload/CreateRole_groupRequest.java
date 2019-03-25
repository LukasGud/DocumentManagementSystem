package com.dalykai.payload;

//import com.dalykai.model.Role_groupName;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

public class CreateRole_groupRequest {

    @NotBlank
    @Size(min = 4, max = 40)
    public String Role_groupName;

    public String getRole_groupName() {
        return Role_groupName;
    }

    public void setRole_groupName(String role_groupName) {
        Role_groupName = role_groupName;
    }
}
