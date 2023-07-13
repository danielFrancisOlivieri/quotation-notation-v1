import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CitationComponent } from './components/citation/citation/citation.component';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { NgModule } from '@angular/core';
import { PeaceComponent } from  './phrases/peace/peace.component';
import { UnderlineDirective } from './directives/underline/underline.directive';
import { WholeEncyclopediaComponent } from './phrases/whole-encyclopedia/whole-encyclopedia.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    UnderlineDirective,
    CitationComponent,
    PeaceComponent,
    WholeEncyclopediaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
