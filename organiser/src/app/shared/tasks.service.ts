import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

export interface Task {
    id?: string
    title: string
    date?: string
}

interface CreateResponse {
    name: string
}

@Injectable({providedIn: "root"})
export class TasksService {
    static url = "https://angular-practice-calenda-870ce.firebaseio.com/"
    constructor(private http: HttpClient) { }

    load(date: moment.Moment):Observable<Task[]> {
        return this.http
            .get<Task[]>(`${TasksService.url}/${date.format("DD-MM-YYYY")}.json`)
            .pipe(map(tasks => {
                if (!tasks) {
                    return []
                }
                return Object.keys(tasks).map(key => {
                    return {...tasks[key], id: key}
                })

            }))
    }

    create(task: Task): Observable<Task> {
        return this.http
            .post<CreateResponse>(`${TasksService.url}/${task.date}.json`, task)
            .pipe(map(res => {
                console.log("response: ", res);

                return {...task, id: res.name}
            }))
    }

    remove(task: Task) {
        return this.http
            .delete<void>(`${TasksService.url}/${task.date}/${task.id}.json`)
    }
}