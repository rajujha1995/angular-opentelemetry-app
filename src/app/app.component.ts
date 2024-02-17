// src/app/app.component.ts

import { Component } from '@angular/core';
import { TracingService } from './tracing.service';
import { Tracer } from '@opentelemetry/tracing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private tracer: Tracer;

  constructor(private tracingService: TracingService) {
    this.tracer = this.tracingService.getTracer('app-component');
  }

  ngOnInit() {
    // Start a span
    const span = this.tracer.startSpan('AppComponentInitialization');
    
    // Your component initialization code here
    
    // End the span
    span.end();
  }
}
