package com.sample.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class BoatTicketDTO {
    private Long id;
    private Long boatId;
    private String type;
    private String date;
    private int avail;
    private String boattype;
    private int capacity;
    private String incharge;
    private int price;

    // public BoatTicketDTO(Long id, Long boatId, String type, String date, int
    // avail, String boattype, int capacity, String incharge, int price) {
    // this.id = id;
    // this.boatId = boatId;
    // this.type = type;
    // this.date = date;
    // this.avail = avail;
    // this.boattype = boattype;
    // this.capacity = capacity;
    // this.incharge = incharge;
    // this.price = price;
    // }
}
