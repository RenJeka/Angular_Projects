import { Component, OnInit } from '@angular/core';
import { GetserviceService } from 'src/app/shared/getservice.service';
import { Authors } from 'src/app/shared/authors';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  authorsList: Authors[]=[];
  
  addAuthorForm: FormGroup;

  constructor(  private getservice: GetserviceService,
                private router: Router,
                private route: ActivatedRoute) { }

               
  ngOnInit() {
    this.getservice.getAuthors().subscribe(data=>this.authorsList=data);
    this.createForm();
  }

 
  createForm(){
    this.addAuthorForm = new FormGroup({
      surname: new FormControl("", Validators.required),
      name: new FormControl( "", Validators.required),
      secondname: new FormControl(""),
      birthdate: new FormControl("", Validators.required)  
    });
  }


  createAuthor(surname: string, name: string, secondname: string, birthdate: Date){

    this.getservice.addAuthor({ id: this.authorsList[this.authorsList.length-1].id+1, 
                                surname: surname,
                                name: name,
                                secondname: secondname,
                                birthdate: birthdate }).subscribe(data=>this.authorsList.push(data));
    this.goBack();
  }

  goBack(){
    this.router.navigate(['lib']);
  }
}
