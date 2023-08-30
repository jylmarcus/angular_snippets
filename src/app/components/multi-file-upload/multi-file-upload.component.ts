import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-multi-file-upload',
  templateUrl: './multi-file-upload.component.html',
  styleUrls: ['./multi-file-upload.component.css']
})
export class MultiFileUploadComponent implements OnInit{

  //declare File array to hold inserted files (or single File to do without elementRef)
  filesToUpload!: File[]

  form!: FormGroup

  constructor(private fb: FormBuilder, private crudSvc: CrudService) {}

  ngOnInit() {
    this.form = this.fb.group({
      description: this.fb.control<string>('')
    })
  }

  //function for single file
  /* fileAddedEvent(inputEvent: any) {
    this.filesToUpload.push(inputEvent.files)
  } */

  //function for many files
  fileAddedEvent(inputEvent: any) {
    for(let i = 0; i < inputEvent.files.length; i++) {
      this.filesToUpload.push(inputEvent.files[i]);
    }
  }

  postData() {
    const value = this.form.value
    this.crudSvc.uploadFiles(this.filesToUpload)
      .then(resp => {
        console.info('>>>> resp: ', resp)
      })
      .catch(error => {
        console.error('error: ', error)
      })
  }
}
