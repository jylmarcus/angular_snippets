import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CrudService } from 'src/app/crud.service';

@Component({
  selector: 'app-item-display',
  templateUrl: './item-display.component.html',
  styleUrls: ['./item-display.component.css']
})
export class ItemDisplayComponent implements OnInit{

  item!: string;

  constructor(private route:ActivatedRoute, private crudSvc: CrudService, private location: Location) {}

  ngOnInit(): void {
    const id = String(this.route.snapshot.paramMap.get('id'));
    this.crudSvc.getDataById(id)
      .subscribe(data => this.item = data)
  }

  //go back to previous page
  goBack() {
    this.location.back();
  }
}
