package com.sample.service;

import java.util.List;

import com.sample.dto.BoatDTO;


public interface BoatService {
    BoatDTO createBoat(BoatDTO boatDTO);

    BoatDTO updateBoat(BoatDTO boatDTO);

    String deleteBoatById(Long id);

    BoatDTO getBoatById(Long id);

    List<BoatDTO> getAllBoats();
} 
