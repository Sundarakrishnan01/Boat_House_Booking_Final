package com.sample.service;


import java.util.List;

import com.sample.dto.UserDTO;


public interface UserService {
    UserDTO createUser(UserDTO userDTO);

    UserDTO getUserById(String email);

    List<UserDTO> getAllUser();

}