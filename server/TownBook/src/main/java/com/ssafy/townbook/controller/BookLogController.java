package com.ssafy.townbook.controller;

import com.ssafy.townbook.model.service.BookLogService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/bookLog")
@RequiredArgsConstructor
public class BookLogController {
    
    private BookLogService bookLogService;
    
    @Autowired
    public BookLogController(BookLogService bookLogService) {
        this.bookLogService = bookLogService;
    }
    
    /**
     * 전체 북로그 조회
     *
     * @return List
     */
    @GetMapping("")
    public ResponseEntity<?> bookLogs()   {
        return new ResponseEntity<>(bookLogService.findAll(), HttpStatus.OK);
    }
    
    /**
     * 단일 북로그 조회
     *
     * @param bookLogNo
     * @return BookLogDto
     */
    @GetMapping("/{bookLogNo}")
    public ResponseEntity<?> findBookLogByBookLog(@PathVariable Long bookLogNo) {
        return new ResponseEntity<>(bookLogService.findBookLogByBookLogNo(bookLogNo), HttpStatus.OK);
    }
    
    /**
     * 단일 보관함에 보관중인 도서 전부 조회
     *
     * @param lockerNo
     * @return List
     */
    @GetMapping("/locker/{lockerNo}")
    public ResponseEntity<?> findBookByLockerNo(@PathVariable Long lockerNo) {
        return new ResponseEntity<>(bookLogService.findBookByLockerNo(lockerNo), HttpStatus.OK);
    }
}
