import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './Components/Cards/card.component';
import { HeaderComponent } from './Components/Header/header.component';
import { ColumnComponent } from './Components/Column/column.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './Components/Modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    ColumnComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
