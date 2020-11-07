import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

// Project Components
import { InputComponent } from './component/input/input.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';

// Project Services
import { CalculatorService } from './service/calculator.service';
import { TableComponent } from './component/table/table.component';
import { TableVariableComponent } from './component/table-variable/table-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    InputComponent,
    TableComponent,
    TableVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
  ],
  providers: [
    CalculatorService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
