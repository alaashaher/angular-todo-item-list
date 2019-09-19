import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AutofocusModule } from 'angular-autofocus-fix';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { RegisterComponent } from './components/register/register.component';
import { ItemListComponent } from './components/item-list/item-list.component';

import { TodoListProvider } from './components/todo-list/todo-list.provider';
import { ItemListProvider } from './components/item-list/item-list.provider';
import { HttpModule } from '@angular/http';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DialogModule} from 'primeng/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    RegisterComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutofocusModule,
    HttpModule,
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule,
    // NgbModule
  ],
  providers: [TodoListProvider, ItemListProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
