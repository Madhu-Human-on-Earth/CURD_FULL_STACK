import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  title="ANGULAR 16 CURD OPERATIONS"

employees!:Employee[];

  constructor(private employeeService:EmployeeService,private router:Router){
    
  }

  ngOnInit(): void {
    this.getEmployees();
}

private getEmployees(){
  this.employeeService.getEmployeeList().subscribe(data=>{
    this.employees=data;
  })
}

updateEmployee(id:number){
  this.router.navigate(['update-employee',id]);
}

deleteEmployee(id:number){
  this.employeeService.deleteEmployee(id).subscribe(data=>{
    console.log(data);
    this.getEmployees();
  })
}
employeeDetails(id:number){
  this.router.navigate(['view-emp',id]);
}
}
