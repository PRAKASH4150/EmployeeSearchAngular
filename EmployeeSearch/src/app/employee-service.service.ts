import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  private baseUrl="http://localhost:9090";

  constructor(private http:HttpClient) 
  { 
    
  }

  findByEmployeeId(empId:Number):Observable<any>
  {
    return this.http.get(this.baseUrl+"/findbyid/"+empId);
  }
}
