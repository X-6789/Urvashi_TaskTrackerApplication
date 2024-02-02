package com.example.TaskManager.service;

import com.example.TaskManager.dto.TaskDto;

import java.util.List;

public interface TaskService {
    TaskDto createTask(TaskDto taskDto);
    TaskDto getTaskById(Long taskId);
    List<TaskDto> getAllTasks();

    TaskDto updateTask(Long taskId, TaskDto updatedTask);
   void deleteTask(Long taskId);
}
