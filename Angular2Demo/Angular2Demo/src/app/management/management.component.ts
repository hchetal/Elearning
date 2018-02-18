import { Component } from '@angular/core'

@Component({
    selector: "my-mgmt",
    template: `
                <button style='color: red' [style.font-weight] = "isBold ? 'bold' : 'normal'">My Management</button>
                <br /><br />
                <button style='color: red' [style.font-size.px] = "fontSize">My Management</button>
                <br /><br />
                <button style='color: red' [ngStyle] = "applyStyle()">My Management</button>
                `


})

export class ManagementComponent{

    isBold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;

    applyStyle() {
        let style = {
            "font-size.px": this.fontSize,
            "font-weight": this.isBold ? "bold" : "normal",
            "font-style": this.isItalic ? "italic" : "normal",
        };

        return style;
    }
}


