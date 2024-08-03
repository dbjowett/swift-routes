import { Injectable } from '@nestjs/common';

@Injectable()
export class TaskService {
  deleteTask(): string {
    return 'Attempting to delete';
  }
}
