package com.sample.service;


import java.util.List;

import com.sample.dto.BookingDTO;


public interface BookingService {
    BookingDTO createBooking(BookingDTO bookingDTO);

    BookingDTO getBookingById(Long id);

    List<BookingDTO> getAllBookings();
}
