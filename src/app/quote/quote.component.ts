import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Quote } from "../quote.interface";
import { QuoteService } from "../quote.service";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  @Input() quote: Quote;

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
  }

}
