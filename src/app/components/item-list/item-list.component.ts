import { Component, OnInit } from '@angular/core';
import { ItemListProvider } from './item-list.provider';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {
  display: boolean = false;
  name: any;
  specialist: any;
  photo: any;
  constructor(
    private itemListProvider: ItemListProvider,
    // private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.itemListProvider.ItemListFunction();
  }

  showDialog(name, photo, specialist) {
    this.display = true;
    this.name = name;
    this.photo = photo;
    this.specialist = specialist;
  }

  send() {
    this.display = false;
  }
}
