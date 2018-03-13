import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.pipe';

//import { EmployeeComponent } from './employee/employee.component';
//import { ManagementComponent } from './management/management.component';

@NgModule({
    imports: [BrowserModule, FormsModule ],
    declarations: [AppComponent, EmployeeListComponent, EmployeeTitlePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
