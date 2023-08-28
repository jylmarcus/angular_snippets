import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit{

  //declare elementreference to obtain data of uploaded file
  @ViewChild('fileUpload')
  fileUpload!: ElementRef

  form!: FormGroup

  constructor(private fb: FormBuilder, private crudSvc: CrudService) {}

  ngOnInit() {
    this.form = this.fb.group({
      description: this.fb.control<string>('')
    })
  }

  postData() {
    const value = this.form.value
    this.crudSvc.uploadFile(value['description'], this.fileUpload)
      .then(resp => {
        console.info('>>>> resp: ', resp)
      })
      .catch(error => {
        console.error('error: ', error)
      })
  }
}
