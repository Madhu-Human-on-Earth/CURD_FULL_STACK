import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './BASICS/CURD/employee-list/employee-list.component';
import { CreateEmployeeComponents } from './BASICS/CURD/create-employee/create-employee.component';
import { UpdateEmployeeComponent } from './BASICS/CURD/update-employee/update-employee.component';
import { ViewEmpComponent } from './BASICS/CURD/view-emp/view-emp.component';


const routes: Routes = [
   {path:'employees',component:EmployeeListComponent},
   {path:'create-employee',component:CreateEmployeeComponents},
   {path:'update-employee/:id',component:UpdateEmployeeComponent},
   {path:'view-emp/:id',component:ViewEmpComponent},
   {path:'',redirectTo:'employees',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
