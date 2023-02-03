import { Component, OnInit } from '@angular/core';
import {DateService} from "../shared/date.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Task, TasksService} from "../shared/tasks.service";
import {switchMap} from "rxjs/operators";
import validate = WebAssembly.validate;

@Component({
  selector: 'app-organizer',
  templateUrl: "./organizer.component.html",
  styleUrls: ["./organizer.component.scss" ]
})
export class OrganizerComponent implements OnInit {

  form: FormGroup;
  tasks: Task[] = [];

  constructor(
      public dateService: DateService,
      private taskServise: TasksService
  ) { }

  ngOnInit(): void {
    this.dateService.date.pipe(
        switchMap(value => this.taskServise.load(value))
    ).subscribe(tasks => {
      this.tasks = tasks
    });
    this.form = new FormGroup({
      title: new FormControl('', Validators.required)
    });
  }

  submit() {
    const {title} = this.form.value

    const task: Task = {
      title,
      date: this.dateService.date.value.format("DD-MM-YYYY")
    };

    this.taskServise.createTask(task)
        .subscribe(
            task => {
              this.tasks.push(task);
              console.log("New Task: ", task);

              this.form.reset();
            },
            err => console.error(err)
        );
    console.log(title);
  }

  removeTask(task: Task) {
    this.taskServise.remove(task)
        .subscribe(
            () => {
              this.tasks = this.tasks.filter(t => t.id !== task.id)
            },
            err => console.error(err)
        )
  }
}
