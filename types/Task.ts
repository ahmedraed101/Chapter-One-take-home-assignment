// Core task data structure with timestamps for creation and completion
export interface Task {
  readonly id: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date; // Set when task is marked as complete
}