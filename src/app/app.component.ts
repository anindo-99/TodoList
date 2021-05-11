import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  name = "Anindo Mazumdar"
  dogCount = 1
  addDog() {
    this.dogCount += 1

  }
  i = 0
  tasks = ["Workout", "Attend Trainig", "Make Music"]

  task = this.tasks[this.i]

  showTasks() {
    this.i += 1
  }
}
