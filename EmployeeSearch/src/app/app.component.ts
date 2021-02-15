import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { EmployeeServiceService } from './employee-service.service';
import { EmployeeDetails } from './EmployeeDetails';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EmployeeSearch';
  employeeId:Number;
  employeeDetails:EmployeeDetails;
  submitted:Boolean=false;
  errorOccurred:Boolean=false;
  errorMessage:String;

  constructor(private employeeService:EmployeeServiceService)
  {

  }
  onSubmit()
  {
    this.employeeService.findByEmployeeId(this.employeeId).subscribe(
      data =>
      {
        this.employeeDetails=data;
        this.submitted=true;
        this.errorOccurred=false;
      },
      error =>
      {
        this.errorMessage=error.error;
        this.errorOccurred=true;
        this.submitted=false;
      }
    )
  }
}
