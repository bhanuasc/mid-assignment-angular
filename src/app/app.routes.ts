import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ResourcesComponent } from './components/resources/resources.component';


export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'HOME' },
    { path: 'aboutus', component: AboutusComponent, title: 'ABOUT US' },
    { path: 'contactus', component: ContactusComponent, title: 'CONTACT US' },
    { path: 'resources', component: ResourcesComponent, title: 'RESOURCES' }
];
