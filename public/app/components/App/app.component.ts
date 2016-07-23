import { Component } from '@angular/core';
@Component({
    selector: 'my-app',
    templateUrl: "app/components/App/app.component.html"
})
export class AppComponent {
   name:string;
    inputs:string[];
    constructor(){
        this.name="Hello";
   }
    clickMe():string{
         this.name="barev";
        return this.name;

    }


}
