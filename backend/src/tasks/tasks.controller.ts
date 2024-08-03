import { Controller, Delete } from '@nestjs/common';
import { TaskService } from './tasks.service';

@Controller('/tasks')
export class TasksController {
  constructor(public readonly taskService: TaskService) {}

  @Delete()
  deleteTask(): string {
    return this.taskService.deleteTask();
  }
}
