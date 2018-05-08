import { Component, ViewChild } from "@angular/core";

@Component({
  selector: 'custom',
//   template: `
//         <p>This is custom component</p>
//         <app-header></app-header> in custom
//     `,
    templateUrl: './custom.html',
    styles: ['.myclass{color: red}']
})
export class Custom{

    componentName: string = 'Custom Component';
    imgsrc = 'https://openclipart.org/download/216413/coniglio_rabbit_small.svg';
    color = 'red';
    @ViewChild('mypara') para;

    printComponentName(){

        this.imgsrc = "https://yt3.ggpht.com/a-/AJLlDp007Yy2uwsZkrLg4eDCXZpd4R4v2CJ3kwJcEQ=s900-mo-c-c0xffffffff-rj-k-no"
        console.log('function called')
    }

    print(event){
        console.log(this.para);
    }
}