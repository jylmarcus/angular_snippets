import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-list-display',
  templateUrl: './list-display.component.html',
  styleUrls: ['./list-display.component.css']
})
export class ListDisplayComponent implements OnInit{

  listItems = [];

  constructor(private crudSvc: CrudService) {}

  //call get list of items from svc and add to list
  ngOnInit(): void {
    this.crudSvc.getData().subscribe(data => this.listItems = data);
  }

  
}
