package com.example.TaskManager.controller;

import com.example.TaskManager.dto.TaskDto;
import com.example.TaskManager.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/tasks")
public class TaskController {


    private TaskService taskService;
    // Build Add Task REST API
    @PostMapping
    public ResponseEntity<TaskDto> createTask(@RequestBody TaskDto taskDto){
        TaskDto savedTask= taskService.createTask(taskDto);
        return new ResponseEntity<>(savedTask, HttpStatus.CREATED);
    }


    // Build get Task REST API
    @GetMapping("{id}")
    public ResponseEntity<TaskDto> getTaskById(@PathVariable("id") Long taskId){
      TaskDto taskDto=  taskService.getTaskById(taskId);
      return  ResponseEntity.ok(taskDto);
    }

    // Build Get All Tasks REST API
    @GetMapping
    public ResponseEntity<List<TaskDto>> getAllTasks(){
        List<TaskDto> tasks =taskService.getAllTasks();
        return ResponseEntity.ok(tasks);
    }

    // Build Update Task REST API
    @PutMapping("{id}")
    public ResponseEntity<TaskDto> updateTask(@PathVariable("id") Long taskId, @RequestBody  TaskDto updatedTask){
       TaskDto taskDto= taskService.updateTask(taskId, updatedTask);
       return ResponseEntity.ok(taskDto);
    }

    // Build Delete Employee REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTask(@PathVariable("id") Long taskId){
        taskService.deleteTask((taskId));
        return ResponseEntity.ok("task deleted sucessfully !");
    }
}
