import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponents implements OnInit {
  title="CURD FULL STACK"
  employee:Employee=new Employee();
  

  constructor(private employeeService:EmployeeService,private router:Router){}
  
  ngOnInit(): void {

  }


  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
      console.log(data);
      this.goToEmployeeList();
    },
    error=>console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }

  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

}
