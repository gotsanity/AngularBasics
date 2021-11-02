import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { MainComponent } from './main/main.component';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"; // router imported from angular

// our list of routes
const routes: Routes = [
    { path: 'home', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'profile/:id', component: ProfileComponent },
    { path: '', component: MainComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }