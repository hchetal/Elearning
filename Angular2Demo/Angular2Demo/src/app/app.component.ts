import { Component } from "@angular/core"


@Component({
    selector: 'my-app',
    template: `<input [(ngModel)]='name'  />
                <br />
                You entered {{name}}
             `
})
export class AppComponent {
    myPageHeader: string = '';
    firstName: string = "Tom";
    lastName: string = "Hopkins";
    name: string = "Tom";
    getFullName(): string {
        return this.firstName + ' ' + this.lastName;
    }
}
