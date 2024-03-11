package com.sample.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BookingDTO {
    private Long id;
    private String email;
    private String boattype;
    private Long boatId;
    private String date;
    private int price;
    private int tickets;
    private int tprice;
    private String incharge;
}
