package com.sample.Mapper;

import com.sample.dto.BoatDTO;
import com.sample.entity.Boat;

public class BoatMapper {
    public static BoatDTO mapToBoatDTO(Boat boat){
        return new BoatDTO(
            boat.getId(),
            boat.getBoattype(),
            boat.getCapacity(),
            boat.getIncharge(),
            boat.getPrice()
        );
    }

    public static Boat mapToBoat(BoatDTO boatDTO){
        return new Boat(
            boatDTO.getId(),
            boatDTO.getBoattype(),
            boatDTO.getCapacity(),
            boatDTO.getIncharge(),
            boatDTO.getPrice()
        );
    }
}
