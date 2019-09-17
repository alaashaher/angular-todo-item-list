import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutofocusModule } from 'angular-autofocus-fix';
import { TodoListComponent } from './components/todo-list/todo-list.component';

import { RegisterComponent } from './components/register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutofocusModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
