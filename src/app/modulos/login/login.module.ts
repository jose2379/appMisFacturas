import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        HttpModule,
        ReactiveFormsModule
    ],
    declarations: [LoginComponent],
})
export class LoginModule { }
