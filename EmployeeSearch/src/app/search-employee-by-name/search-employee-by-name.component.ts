import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeServiceService } from '../employee-service.service';
import { EmployeeDetails } from '../EmployeeDetails';

@Component({
  selector: 'app-search-employee-by-name',
  templateUrl: './search-employee-by-name.component.html',
  styleUrls: ['./search-employee-by-name.component.css']
})
export class SearchEmployeeByNameComponent implements OnInit {

  employeeName:String;
  employeeList:Observable<EmployeeDetails[]>;
  submitted:Boolean=false;
  errorOccurred:Boolean=false;
  errorMessage:String;

  constructor(private employeeService:EmployeeServiceService) { }

  ngOnInit() {
  }

  onSubmit()
  {
    console.log(this.employeeName);
    this.employeeService.findByEmployeeName(this.employeeName).subscribe(

      data =>
      {
        this.employeeList=data;
        this.submitted=true;
        this.errorOccurred=false;
      },
      error =>
      {
        this.errorOccurred=true;
        this.errorMessage=error.error;
        this.submitted=false;
      }
    )
  }
}
