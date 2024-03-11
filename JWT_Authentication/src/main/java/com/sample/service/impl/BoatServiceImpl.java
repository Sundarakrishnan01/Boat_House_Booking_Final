package com.sample.service.impl;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sample.Exception.ResourceNotFoundException;
import com.sample.Mapper.BoatMapper;
import com.sample.dto.BoatDTO;
import com.sample.entity.Boat;
import com.sample.repository.BoatRepository;
import com.sample.service.BoatService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BoatServiceImpl implements BoatService {

    private BoatRepository boatrepo;

    @Override
    public BoatDTO createBoat(BoatDTO boatDTO){
        Boat boat = BoatMapper.mapToBoat(boatDTO);
        Boat savedBoat = boatrepo.save(boat);
        return BoatMapper.mapToBoatDTO(savedBoat);
    }

    @Override
    public BoatDTO updateBoat(BoatDTO boatDTO){
        Boat boat = BoatMapper.mapToBoat(boatDTO);
        Boat savedBoat = boatrepo.saveAndFlush(boat);
        return BoatMapper.mapToBoatDTO(savedBoat);
    }

    @Override
    public String deleteBoatById(Long id){
        boatrepo.deleteById(id);
        return "Deleted";
    }

    @Override
    public BoatDTO getBoatById(Long id) {
        Boat boat = boatrepo.findById(id)
                    .orElseThrow(
                        () -> new ResourceNotFoundException("user is not exist with given email : " +  id));
        return BoatMapper.mapToBoatDTO(boat);       
    }

    @Override
    public List<BoatDTO> getAllBoats() {
       List<Boat> boats = boatrepo.findAll();
       List<BoatDTO> boatDTOs = new ArrayList<>();
       for(Boat boat : boats){
            boatDTOs.add(BoatMapper.mapToBoatDTO(boat));
       }
       return boatDTOs;
    }


}

