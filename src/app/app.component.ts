import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormBuilder } from '@angular/forms'
import { groupBy } from 'rxjs/internal/operators/groupBy';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-form';
  testarray :any = [] ;
  isEdit:boolean =  false;
  index:number = 0;
  contactForm : FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.minLength(10)]],
      lastname: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', [Validators.required]],
      isMarried: ['', [Validators.required]]
    });
  }

  get firstname() {
    return this.contactForm.get('firstname');
  }
 
  get lastname() {
    return this.contactForm.get('lastname');
  }
 
  get email() {
    return this.contactForm.get('email');
  }
 
  get gender() {
    return this.contactForm.get('gender');
  }
 
  get isMarried() {
    return this.contactForm.get('isMarried');
  }


  onSubmit() {
    if(this.isEdit){
        this.testarray[this.index] = this.contactForm.value;
    }
    else {

    console.log(this.contactForm.value);
    this.testarray.push(this.contactForm.value);
    this.contactForm.reset();
    console.log(this.testarray);
    }
    this.isEdit = false;
    this.index = 0;
  }

  edit(item: any ,i: number){
    this.index=i;
      console.log(item , i);
      this.contactForm.setValue({
        firstname: item.firstname,
        lastname: item.lastname,
        email: item.email,
        gender: item.gender,
        isMarried: item.isMarried
      });
      this.isEdit = true;
  }

  delete(index: number){
  this.testarray.splice(index ,1);
  this.contactForm.reset();
  }
}
