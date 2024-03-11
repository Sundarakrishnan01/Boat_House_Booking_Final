package com.sample.service.impl;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sample.Exception.ResourceNotFoundException;
import com.sample.Mapper.UserMapper;
import com.sample.dto.UserDTO;
import com.sample.entity.User;
import com.sample.repository.UserRepository;
import com.sample.service.UserService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userrepo;

    @Override
    public UserDTO createUser(UserDTO userDTO){
        User user = UserMapper.mapToUser(userDTO);
        User savedUser = userrepo.save(user);
        return UserMapper.mapToUserDTO(savedUser);
    }

    @Override
    public UserDTO getUserById(String email) {
        User user = userrepo.findById(email)
                    .orElseThrow(
                        () -> new ResourceNotFoundException("user is not exist with given email : " +  email));
        return UserMapper.mapToUserDTO(user);       
    }

    @Override
    public List<UserDTO> getAllUser() {
       List<User> users = userrepo.findAll();
       List<UserDTO> userDTOs = new ArrayList<>();
       for(User user : users){
            userDTOs.add(UserMapper.mapToUserDTO(user));
       }
       return userDTOs;
    }


}

