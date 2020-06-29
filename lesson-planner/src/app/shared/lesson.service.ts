import {Injectable} from "@angular/core";
import {Lesson} from "./lesson.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {IResponse} from "./iresponse";

@Injectable()
export class LessonService {

  constructor(private http: HttpClient) {

  }

  data: Lesson[];

  getAll(): Observable<Lesson[]> {
    return this.http.get<IResponse[]>(environment.apiDomain + environment.apiUrl.GETLessons)
      .pipe(
        map(response => {
          const lessons: Lesson[] = [];
          console.log(response);

          response.forEach(backendLesson => {
            const frontendLesson: Lesson = new Lesson();
            frontendLesson.id = backendLesson.Id;
            frontendLesson.name = backendLesson.Name;
            frontendLesson.completed = backendLesson.IsCompleted;
            lessons.push(frontendLesson);
          });

          this.data = lessons;
          return lessons;
        })
      );

  }

  getById(id: number): Lesson {
    if (this.data) {
      return this.data.find(x => x.id === id);
    } else {
      console.error("data not found yet");
    }
  }

  update(lesson: Lesson) {
    console.log("service Update");
    const lessonForBackend: IResponse = {
      Id: lesson.id,
      Name: lesson.name,
      IsCompleted: lesson.completed
    };
    return this.http.put(environment.apiDomain + environment.apiUrl.PUTLesson + `${lesson.id}`, lessonForBackend);
    // const toUpdate = this.getById(lesson.id);
    // Object.assign(toUpdate, lesson);
  }


  delete(lesson: Lesson) {
    // Удаление на FrontEnd
    this.data.splice(this.data.indexOf(lesson), 1);
    // Удаление на BackEnd
    return this.http.delete(environment.apiDomain + environment.apiUrl.DELETELesson + `${lesson.id}`);
  }

  create(lesson: Lesson) {
    console.log("lesson Created!");
    // this.data.push(lesson);
  }

  // delete(lesson: Lesson) {
  // 	let toDelete = this.getById(lesson.id);
  // 	this.data.splice(this.data.indexOf(toDelete), 1)
  // }
}
