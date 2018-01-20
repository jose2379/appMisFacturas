import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './modulos/nucleo/home/home.component';
import { LoginComponent } from './modulos/login/login.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent, pathMatch: 'full'}
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
