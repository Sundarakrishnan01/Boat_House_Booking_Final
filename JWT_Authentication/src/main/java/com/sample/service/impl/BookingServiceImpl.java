package com.sample.service.impl;


import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.sample.Exception.ResourceNotFoundException;
import com.sample.Mapper.BookingMapper;
import com.sample.dto.BookingDTO;
import com.sample.entity.Booking;
import com.sample.repository.BookingRepository;
import com.sample.service.BookingService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class BookingServiceImpl implements BookingService {
    private BookingRepository bookingRepository;

    @Override
    public BookingDTO createBooking(BookingDTO bookingDTO){
        Booking booking = BookingMapper.mapToBooking(bookingDTO);
        Booking savedBooking = bookingRepository.save(booking);
        return BookingMapper.mapToBookingDTO(savedBooking);
    }

    @Override
    public BookingDTO getBookingById(Long id) {
        Booking booking = bookingRepository.findById(id)
                    .orElseThrow(
                        () -> new ResourceNotFoundException("user is not exist with given email : " +  id));
        return BookingMapper.mapToBookingDTO(booking);       
    }

    @Override
    public List<BookingDTO> getAllBookings() {
       List<Booking> bookings = bookingRepository.findAll();
       List<BookingDTO> bookingDTOs = new ArrayList<>();
       for(Booking booking : bookings){
            bookingDTOs.add(BookingMapper.mapToBookingDTO(booking));
       }
       return bookingDTOs;
    }
}
