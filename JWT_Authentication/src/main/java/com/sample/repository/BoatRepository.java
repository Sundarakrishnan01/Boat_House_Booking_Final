package com.sample.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import com.sample.entity.Boat;


public interface BoatRepository extends JpaRepository<Boat, Long>{
    
}
