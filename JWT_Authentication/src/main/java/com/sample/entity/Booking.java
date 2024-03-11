package com.sample.entity;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Booking")
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="email", nullable = false)
    private String email;

    @Column(name="boattype", nullable = false)
    private String boattype;

    @Column(name="boatId", nullable = false)
    private Long boatId;

    @Column(name="date", nullable = false)
    private String date;

    @Column(name="price", nullable = false)
    private int price;

    @Column(name="tickets", nullable = false)
    private int tickets;

    @Column(name="tprice", nullable = false)
    private int tprice;

    @Column(name="incharge", nullable = false)
    private String incharge;

}
