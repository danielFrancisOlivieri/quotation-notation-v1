import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthorGridComponent } from './phrases/author-grid/author-grid.component';
import { BolanoSeeingComponent } from './phrases/bolano-seeing/bolano-seeing.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from './components/card/card.component';
import { CitationComponent } from './components/citation/citation/citation.component';
import { ExperimentsComponent } from './phrases/experiments/experiments.component';
import { GridComponent } from './components/grid/grid.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HomeComponent } from './pages/home/home.component';
import { LotteryComponent } from './phrases/lottery/lottery.component';
import { NgModule } from '@angular/core';
import { PeaceComponent } from './phrases/peace/peace.component';
import { PhilosophyDeathComponent } from './phrases/philosophy-death/philosophy-death.component';
import { TokenInterceptor } from './token.interceptor';
import { UnderlineDirective } from './directives/underline/underline.directive';
import { WholeEncyclopediaComponent } from './phrases/whole-encyclopedia/whole-encyclopedia.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnderlineDirective,
    CitationComponent,
    PeaceComponent,
    WholeEncyclopediaComponent,
    ExperimentsComponent,
    HomeComponent,
    LotteryComponent,
    BolanoSeeingComponent,
    PhilosophyDeathComponent,
    CardComponent,
    GridComponent,
    AuthorGridComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
