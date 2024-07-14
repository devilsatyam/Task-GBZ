package com.satyamtask.hello;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DataController {

    @Autowired
    private DataService dataService;

    @GetMapping("/api/data")
    public List<Data> getData() {
        return dataService.getAllData();
    }
}

