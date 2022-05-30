import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  todoArray: any = [];
  index:number = 0;
  todoForm:any  =  FormGroup;
  completedtask: boolean = false;
  constructor(private formBuilder: FormBuilder) {

    this.todoForm = this.formBuilder.group({
        taskName: ['']
    })
  }
  ngOnInit(): void {
  }

  get taskName() {
    return this.todoForm.get('taskName');
  }
  addArray(): void{
      this.todoArray[this.index] = this.todoForm.value;
      console.log(this.todoArray)
      this.todoForm.reset();
      this.index = this.index + 1;
  }
  edit(item: any , i: number) :void {
    this.index = i;
    this.todoForm.setValue({
      taskName: item.taskName
    })
  }

  completed(): void {
    this.completedtask = true;
  }
  delete(index: any):void {
    this.todoArray.splice(index,1);
  }
}
