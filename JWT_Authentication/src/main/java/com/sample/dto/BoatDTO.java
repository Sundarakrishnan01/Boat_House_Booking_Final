package com.sample.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BoatDTO {
    private Long id;
    private String boattype;
    private int capacity;
    private String incharge;
    private int price; 
}
