package com.sample.service;



import java.util.List;

import com.sample.dto.BoatTicketDTO;
import com.sample.dto.TicketDTO;


public interface TicketService {
    TicketDTO createTicket(TicketDTO ticketDTO);

    List<TicketDTO> getAllTicket();

    TicketDTO getTicketById(Long id);

    List<BoatTicketDTO> getTicketData(String type, String date);
}
