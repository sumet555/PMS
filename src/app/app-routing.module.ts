import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ HomeComponent} from './home/home.component';
import{ ReservationComponent} from './reservation/reservation.component';
import{ Reservation2Component} from './reservation2/reservation2.component';
import{ IndividualComponent} from './individual/individual.component';
import{ Test1Component} from './test1/test1.component';
const routes: Routes = [
  {
    path: '',
    component:HomeComponent,
    children: [{
      path:'home',component:HomeComponent
    },{
      path:'reservation',component:ReservationComponent
    },{
      path:'reservation2',component:Reservation2Component
    },{
      path:'individual',component:IndividualComponent
    }
  ]
  }, {
    path: 'test',
    component:Test1Component,
    children: [{
      path:'test',component:Test1Component
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
