import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';

import { QuoteComponent } from './quote/quote.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';
import { routing } from "./app.routing"; 
import { QuoteService } from "./quote.service";


/*const routes: Routes = [
    { path: '', component: QuoteComponent, pathMatch: 'full' },
    { path: 'new-quote', component: NewQuoteComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];*/

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
