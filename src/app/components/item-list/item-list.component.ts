import { Component, OnInit } from '@angular/core';
import { ItemListProvider } from './item-list.provider';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent implements OnInit {

  constructor(
    private itemListProvider: ItemListProvider,
    // private modalService: NgbModal
    ) { }

  ngOnInit() {
    this.itemListProvider.ItemListFunction();
  }

  OpenMoble(content, name, photo, specialist) {
    // this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'});
  }
}
