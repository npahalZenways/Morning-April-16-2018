import { NgModule } from "@angular/core";
import { MyFirstService } from "./service/myfirst.service";

@NgModule({
    imports: [],
    declarations: [],
    providers: [
        MyFirstService
    ],
    exports: [
        // MyFirstService
    ]
})
export class SharedModule{}