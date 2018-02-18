import { Component } from '@angular/core'

@Component({
    selector: "my-employee",
    //template: `<button class='colorClass' [class]='classesToApply'>My Button</button>
    //            <br /><br />
    //            <button [class.boldClass]='applyBoldClass'>My Button</button>
    //            <br /><br />
    //            <button class='colorClass' [ngClass]='applyClass()'>My Button</button>

    //            `
    templateUrl:"app/employee/employee.component.html",
})
export class EmployeeComponent {
    columnSpan: number = 2;
    firstName: string = "Himanshu";
    lastName: string = "Chetal";
    gender: string = "Male";
    age: string = "37";
    classesToApply = "colorClass italicClass";
    applyBoldClass: boolean = true;
    applyItalicClass: boolean = false;
    showDetails: boolean = true;

    applyClass() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicClass : this.applyItalicClass
        }; 

        return classes;
    }

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }

}