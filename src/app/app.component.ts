import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  
  public employees: Employee[] = [];
  public selectedEmployee?: Employee;

  constructor(private employeeService: EmployeeService){}

  ngOnInit(): void {
    this.getEmployees();
  }

  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
      this.employees = response;
      console.log(this.employees);
      }
    );
  }

  public onAddEmployee(addForm: NgForm): void{
    document.getElementById("add-employee-form")?.click();
    
    this.employeeService.addEmployee(addForm.value).subscribe(
      (response: Employee) => {
        addForm.reset();
        console.log(response);
        this.getEmployees();
      }
    );
  }

  public onEditEmployee(employee: Employee):void {
    this.employeeService.updateEmployee(employee).subscribe(
      (response: Employee) => {
        console.log(response);
        this.getEmployees();
      }
    );
  }

  public onDeleteEmployee(employeeId: number | undefined):void {
    if(typeof(employeeId) == "number"){
      this.employeeService.deleteEmployee(employeeId).subscribe(
        (response: void) => {
          console.log(response);
          this.getEmployees();
        }
      );
    }
  }

  public searchEmployees(key: string): void{
    const result: Employee[] = [];
    for(const employee of this.employees){
      if(employee.name.toLowerCase().indexOf(key.toLowerCase()) != -1
        || employee.email.toLowerCase().indexOf(key.toLowerCase()) != -1
        || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) != -1
        || employee.phone.toLowerCase().indexOf(key.toLowerCase()) != -1){
          result.push(employee);
      }
    }
    this.employees = result;
    if(result.length === 0 || !key){
      this.getEmployees();
    }
  }

  // the bootstrap modal functionality was built with buttons in mind
  // thats why we create a button in the function
  public onOpenModal(employee: any, mode: string): void{
    const container = document.getElementById('main-container')
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if(mode === 'add'){
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if(mode === 'edit'){
      button.setAttribute('data-target', '#updateEmployeeModal');
      this.selectedEmployee = employee;
    }
    if(mode === 'delete'){
      button.setAttribute('data-target', '#deleteEmployeeModal');
      this.selectedEmployee = employee;
    }
    // the button needs to be in the DOM for .click() to work
    // thats why we add it to the container first
    container?.appendChild(button);
    button.click();
  }

  
}


