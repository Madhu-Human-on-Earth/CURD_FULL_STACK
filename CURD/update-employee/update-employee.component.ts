import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { OnInitEffects } from '@ngrx/effects';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit{
  
  id!:number;
  employee:Employee=new Employee();

  constructor(private employeeService:EmployeeService, private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(
      data=>{
        this.employee=data;
      },

      error=>console.log(error)
    );
  }
  
  onSubmit(){
    this.employeeService.updateEmployee(this.employee, this.id).subscribe(
      data=>{
        this.goToEmployeeList();
      },
      error=>console.log(error)
    );
  }
  goToEmployeeList() {
    this.router.navigate(['/employees']);
  }
}
