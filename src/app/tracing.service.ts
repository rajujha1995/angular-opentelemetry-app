// src/app/tracing.service.ts

import { Injectable } from '@angular/core';
import { BasicTracerProvider, ConsoleSpanExporter, SimpleSpanProcessor, Tracer } from '@opentelemetry/tracing';

@Injectable({
  providedIn: 'root'
})
export class TracingService {
  private tracerProvider: BasicTracerProvider;

  constructor() {
    // Create and configure the TracerProvider
    this.tracerProvider = new BasicTracerProvider();
    this.tracerProvider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));
    this.tracerProvider.register();
  }

  getTracer(name: string): Tracer {
    return this.tracerProvider.getTracer(name);
  }
}
