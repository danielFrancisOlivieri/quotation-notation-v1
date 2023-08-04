import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { FormComponent } from './pages/form/form.component';
import { GridComponent } from './components/grid/grid.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { HomeComponent } from './pages/home/home.component';
import { LogServiceComponent } from './services/log-service/log-service.component';
import { LotteryComponent } from './phrases/lottery/lottery.component';
import { NgModule } from '@angular/core';
import { PeaceComponent } from './phrases/peace/peace.component';
import { PhilosophyDeathComponent } from './phrases/philosophy-death/philosophy-death.component';
import { TokenInterceptor } from './token.interceptor';
import { UnderlineDirective } from './directives/underline/underline.directive';
import { WholeEncyclopediaComponent } from './phrases/whole-encyclopedia/whole-encyclopedia.component';
import { TransformDirective } from './directives/transform/transform.directive';
import { UnfoldComponent } from './components/unfold/unfold.component';

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
    FormComponent,
    LogServiceComponent,
    TransformDirective,
    UnfoldComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
