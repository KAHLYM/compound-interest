import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

// Project Components
import { InputComponent } from './component/input/input.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

// Project Services
import { CalculatorService } from './service/calculator.service';
import { TableComponent } from './component/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    InputComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [
    CalculatorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
