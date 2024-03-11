package com.sample.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
    private String email;
    private String password;
    private String username;
    private String phoneno;
    private String firstname;
    private String lastname;
    private String birthday;
    private String gender;
    private String address; 
    private String residenttype; 
    private String city; 
    private String zipcode; 
}
