import {Component, OnInit} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import {LessonService} from "../shared/lesson.service";
import {Lesson} from "../shared/lesson.model";

@Component({
  selector: "app-lesson-editor",
  templateUrl: "./lesson-editor.component.html",
  styleUrls: ["./lesson-editor.component.scss"]
})
export class LessonEditorComponent implements OnInit {
  lesson: Lesson;

  constructor(private currentRoute: ActivatedRoute, private service: LessonService) {
  }

  ngOnInit(): void {
    const id: number = +this.currentRoute.snapshot.paramMap.get("id");
    this.lesson = this.service.getById(id);
  }

  applyChanges() {
    return this.service.update(this.lesson).subscribe(PUTresponse => {
      console.log("Success!");
      console.log(PUTresponse);
    });
  }

}
