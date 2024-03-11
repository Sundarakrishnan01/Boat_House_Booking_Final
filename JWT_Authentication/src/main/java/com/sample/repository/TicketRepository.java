package com.sample.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sample.dto.BoatTicketDTO;
import com.sample.entity.Ticket;



public interface TicketRepository extends JpaRepository<Ticket, Long>{
    // @Query("SELECT new com.boathouse.gokul.dto.TicketDTO(t.id, t.boatId, t.type, t.date, t.avail) FROM Ticket t WHERE t.type = :type AND t.date = :date")
    // List<TicketDTO> findByTypeAndDate(@Param("type") String type, @Param("date") String date);

    @Query("SELECT new com.sample.dto.BoatTicketDTO(t.id, t.boatId, t.type, t.date, t.avail, b.boattype, b.capacity, b.incharge, b.price) FROM Ticket t JOIN Boat b ON t.boatId = b.id WHERE t.type = :type AND t.date = :date")
    List<BoatTicketDTO> findTicketAndBoatByTypeAndDate(@Param("type") String type, @Param("date") String date);
}
