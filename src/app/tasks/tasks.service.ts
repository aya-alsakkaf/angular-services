import { Injectable, signal } from "@angular/core";
import { Task } from "./task.model";

@Injectable({
    providedIn: "root" //makes so that the service can be injected anywhere in the application
})
export class TasksService {
    tasks = signal<Task[]>([]);

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




}