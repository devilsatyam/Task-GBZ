package com.satyamtask.hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class DataService {

    @Autowired
    private DataRepository dataRepository;

    public List<Data> getAllData() {
        return dataRepository.findAll();
    }
}

