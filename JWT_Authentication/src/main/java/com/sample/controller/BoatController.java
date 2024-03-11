package com.sample.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RestController;

import com.sample.dto.BoatDTO;
import com.sample.service.BoatService;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;




@AllArgsConstructor
@RestController
@CrossOrigin(origins = "http://localhost:5173")
@RequestMapping("/boats")
public class BoatController {
    private BoatService boatService;

    @PostMapping("/add")
    public ResponseEntity<BoatDTO> addBoat(@RequestBody BoatDTO boatDTO) {
        BoatDTO savedBoat = boatService.createBoat(boatDTO);
        return new ResponseEntity<>(savedBoat, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<BoatDTO> updateBoat(@RequestBody BoatDTO boatDTO) {
        BoatDTO savedBoat = boatService.updateBoat(boatDTO);
        return new ResponseEntity<>(savedBoat, HttpStatus.CREATED);
    }
    
    @DeleteMapping("/delete/{id}")
    public String deleteBoat(@PathVariable("id") Long id){
        String deleted = boatService.deleteBoatById(id);
        return deleted;
    }
    @GetMapping("{id}")
    public ResponseEntity<BoatDTO> getBoat(@PathVariable("id") Long id) {
        BoatDTO boatDTO = boatService.getBoatById(id);
        return ResponseEntity.ok(boatDTO);
    }

    @GetMapping("/get")
    public ResponseEntity<List<BoatDTO>> getAllBoats() {
        List<BoatDTO> boats = boatService.getAllBoats();
        return ResponseEntity.ok(boats);
    }
    
    
}
