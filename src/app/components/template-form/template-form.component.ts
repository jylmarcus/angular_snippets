import { CrudService } from './../../crud.service';
import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  //import FormsModule in app-module

  //variable for options, radio buttons, checkboxes etc
  arrayVariable = [`Option 1`, `Option 2`, `Option 3`];

  //data properties for ngModel directives
  name!: string;
  email!: string;
  chosenOption!: string;

  //inject service
  constructor(private crudSvc: CrudService) {}

  //function to process form on submission
  onSubmit() {
    this.crudSvc.postData([this.name, this.email, this.chosenOption]).subscribe(
      {
        //for example, postData function returns observable of record id from backend
        next(id) {console.log(id); },
        /* route to other component after submitting form
        next(data) => {
          this.router.navigate(["/otherComponent"])
        }
        */
        error(err) {console.log(err); }
      }
    )
  //if routed back to this component, include a get function here to retrieve the required data else
  //include a get function in the onInit of the component that is routed to
  //eg this.crudSvc.getData().subscribe((data => {this.dataVariable = data}))
  }
}
