import { Routes } from '@angular/router';
import { ContactListComponent } from './contact-list/contact-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

export const routes: Routes = [
    {
        path:'', component: DashboardComponent, title: 'Home', data:{isMenu: true}
    },
    {
        path:'contact-list', component: ContactListComponent, title: 'Contact', data:{isMenu: true}
    },
    {
        path:'contact-detail/:id', component: ContactDetailComponent, title: 'Contact Detail'
    }
];
