import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');

  /**
   * This approach has a problem, we are creating an instance of the service and if we wanted to use it 
   * somewehre else, we'd have to create a seperate instance and therefore we would not be sharing the data. 
   *        private tasksService: TasksService;
            constructor() {
               this.tasksService = new TasksService()
            }
      * Which is why we result to Angular's depedency injection mechansim
   */

  // First Correct Apporach
  // private tasksService: TasksService;
  // constructor(tService: TasksService) {
  //   this.tasksService = tService;
  // }

  //or
  constructor(private tasksService: TasksService) { }
  onAddTask(title: string, description: string) {
    this.tasksService.addTask({ title, description })
    this.formEl()?.nativeElement.reset();
  }
}
