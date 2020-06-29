import {Component, OnInit} from "@angular/core";
import {LessonService} from "../shared/lesson.service";
import {Lesson} from "../shared/lesson.model";
import {Router} from "@angular/router";

@Component({
  selector: "app-lesson-list",
  templateUrl: "./lesson-list.component.html",
  styleUrls: ["./lesson-list.component.scss"]
})
export class LessonListComponent implements OnInit {
  lessons: Lesson[];

  constructor(private service: LessonService, private router: Router) {
  }

  ngOnInit(): void {
    this.service.getAll()
      .subscribe(
        lessonArray => {
          console.log(lessonArray);

          return this.lessons = lessonArray;
        },
        (error) => console.error(error));
  }

  onCreate() {
    console.log("create");
  }

  onEdit(lesson: Lesson) {
    this.router.navigate(["lessons", "edit", lesson.id]);
    console.log(`Editing lesson '${lesson.name}'`);
  }

  onDelete(lesson: Lesson) {
    return this.service.delete(lesson).subscribe(response => {
      console.log(response);

    });
  }
}
