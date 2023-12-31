import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  

private baseUrl="http://localhost:8766/api/v1/employees";
  constructor(private httpClient:HttpClient) { }

  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(`${this.baseUrl}`);
  }

  createEmployee(employee:Employee):Observable<Object>{
    return this.httpClient.post(`${this.baseUrl}`,employee);
  }

  getEmployeeById(id:number):Observable<Employee>{
    return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`);
  }
  updateEmployee(employee:Employee, id: number): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/${id}`, employee);
  }

  deleteEmployee(id:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseUrl}/${id}`);
  }
  
  getEmployeesList(id:number): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}`);
  }



}
