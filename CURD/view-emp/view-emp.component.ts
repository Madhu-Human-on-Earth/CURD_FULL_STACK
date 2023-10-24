import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css']
})
export class ViewEmpComponent implements OnInit {
id!:number;
employee!:Employee;

  constructor(private route:ActivatedRoute,private empser:EmployeeService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];

    this.empser.getEmployeeById(this.id).subscribe(
      data=>{
        this.employee=data;
      },
      error=>console.log(error)
    );
    // this.employee=new Employee();
    // this.employee.id=this.id;
    // this.employee.firstName=this.route.snapshot.params['firstName'];
    // this.employee.lastName=this.route.snapshot.params['lastName'];
    // this.employee.emailId=this.route.snapshot.params['emailId'];
  }
}
