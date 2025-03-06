import { Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "./task.model";

@Injectable({
    providedIn: "root" //makes so that the service can be injected anywhere in the application
})
export class TasksService {
    private tasks = signal<Task[]>([]);

    allTasks = this.tasks.asReadonly()
    addTask(taskData: { title: string, description: string }) {
        const newTask: Task = {
            ...taskData,
            status: "OPEN",
            id: Math.random().toString()
        }
        this.tasks.update((oldTasks) => {
            return [...oldTasks, newTask]
        })
    }


    updateTaskStatus(taskId: string, newStatus: TaskStatus) {
        this.tasks.update((oldTasks) => oldTasks.map((task) => task.id === taskId ? { ...task, status: newStatus } : task))
    }



}