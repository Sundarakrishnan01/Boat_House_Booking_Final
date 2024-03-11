package com.sample.Mapper;

import com.sample.dto.TicketDTO;
import com.sample.entity.Ticket;

public class TicketMapper {
    public static TicketDTO mapToTicketDTO(Ticket ticket){
        return new TicketDTO(
            ticket.getId(),
            ticket.getBoatId(),
            ticket.getType(),
            ticket.getDate(),
            ticket.getAvail()
        );
    }

    public static Ticket mapToTicket(TicketDTO ticketDTO){
        return new Ticket(
            ticketDTO.getId(),
            ticketDTO.getBoatId(),
            ticketDTO.getType(),
            ticketDTO.getDate(),
            ticketDTO.getAvail()
        );
    }
}
