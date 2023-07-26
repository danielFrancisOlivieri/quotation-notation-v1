import { RouterModule, Routes } from '@angular/router';

import { AuthorGridComponent } from './phrases/author-grid/author-grid.component';
import { BolanoSeeingComponent } from './phrases/bolano-seeing/bolano-seeing.component';
import { ExperimentsComponent } from './phrases/experiments/experiments.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { PeaceComponent } from './phrases/peace/peace.component';
import { PhilosophyDeathComponent } from './phrases/philosophy-death/philosophy-death.component';
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
  {path: 'bolano', component: BolanoSeeingComponent, data: {
    title: 'People See What They Want to See'
  }},
  {path: 'death-philosophy', component: PhilosophyDeathComponent, data: {
    title: 'To Study Philosophy is to Learn to Die'
  }},
  {path: 'authors', component: AuthorGridComponent, data: {
    title: ' Authors'
  }}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
