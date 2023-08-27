import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/crud.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  //import FormBuilder, FormGroup, Validators, OnInit
  //import FormsModule, ReactiveFormsModule in app module
  form!: FormGroup;
  dataVariable!: string[];
  radioVariable = [`Option 1`, `Option 2`, `Option 3`];

  constructor(private fb: FormBuilder, private crudSvc: CrudService, private router: Router) {}

  ngOnInit(): void {
    //create form and form controls
      this.form = this.fb.group(
        {
          name: this.fb.control<string>('', [Validators.required, Validators.minLength(5)]),
          email: this.fb.control<string>('', [Validators.required, Validators.email]),
          options: this.fb.control<string>(`Option 1`)
        }
      )
    //if required to populate certain data in the form, include a get call from service here
  }

  onSubmit() {
    //create a DTO for the form
    //const formDTO = this.form.value as FormDTO
    this.crudSvc.postData(this.form.value).subscribe({
      next(data) {
        //do something with backend response
        //this.router.navigate(["otherComponent"])
      },
      error(err) {
        console.log(err);
      }
    })
  }
}
