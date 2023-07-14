import { RouterModule, Routes } from '@angular/router';

import { BolanoSeeingComponent } from './phrases/bolano-seeing/bolano-seeing.component';
import { ExperimentsComponent } from './phrases/experiments/experiments.component';
import { HomeComponent } from './pages/home/home.component';
import { LotteryComponent } from './phrases/lottery/lottery.component';
import { NgModule } from '@angular/core';
import { PeaceComponent } from './phrases/peace/peace.component';
import { WholeEncyclopediaComponent } from './phrases/whole-encyclopedia/whole-encyclopedia.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {
    title: 'Home'
  }},
  {path: 'emerson', component: WholeEncyclopediaComponent, data: {
    title: 'Emerson'
  }},
  {path: 'peace', component: PeaceComponent, data: {
    title: 'Peace'
  }},
  {path: 'experiments', component: ExperimentsComponent, data: {
    title: 'Experiments'
  }},
  {path: 'lottery', component: LotteryComponent, data: {
    title: 'Lottery'
  }},
  {path: 'bolano', component: BolanoSeeingComponent, data: {
    title: 'People See What They Want to See'
  }}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
