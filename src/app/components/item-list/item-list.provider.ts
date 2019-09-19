import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ItemListProvider {
    ItemListData: any;
    GroupOptions: any;
    ItemListEditData = {
        image: '',
        name: '',
    };
    constructor(
        private http: HttpClient
    ) {
    }

    ItemListFunction() {
        this.http.get('https://jsonplaceholder.typicode.com/photos')
            .subscribe(value => {
                this.ItemListData = value;
                this.GroupOptions = [];
                for (let i = 0; i < 200; i++) {
                    this.GroupOptions.push({});
                    this.GroupOptions[i].name = this.ItemListData[i].title.slice(0, 10);
                    this.GroupOptions[i].id = this.ItemListData[i].id;
                    this.GroupOptions[i].photo = this.ItemListData[i].url;
                    this.GroupOptions[i].location = 'https://maps.app.goo.gl/7q81i6uP2SdQdDCZ7';
                    this.GroupOptions[i].specialist = 'eye specialist';
                    this.GroupOptions[i].rate = Math.floor(Math.random() * (10.00 - 1.00 + 1.00)) + 1.00;
                }
                // console.log(this.GroupOptions);
            });
    }


}
