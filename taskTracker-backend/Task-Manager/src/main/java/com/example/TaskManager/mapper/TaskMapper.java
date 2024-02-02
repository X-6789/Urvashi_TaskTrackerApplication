package com.example.TaskManager.mapper;

import com.example.TaskManager.dto.TaskDto;
import com.example.TaskManager.entity.Task;

public class TaskMapper {
    public static TaskDto mapToTaskDto(Task task){
        return new TaskDto(
           task.getId(),
                task.getTitle(),
                task.getDescription()

        );

    }
    public static Task mapToTask(TaskDto taskDto){
        return new Task(
                taskDto.getId(),
                taskDto.getTitle(),
                taskDto.getDescription()
        );
    }
}
