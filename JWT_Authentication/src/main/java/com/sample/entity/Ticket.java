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
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="Ticket")
public class Ticket {
    @Id    
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(name="boatId", nullable = false)
    private Long boatId;

    @Column(name="type", nullable = false)
    private String type;

    @Column(name="date", nullable = false)
    private String date;

    @Column(name="avail", nullable = false)
    private int avail;
    
}
