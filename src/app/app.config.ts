import { ApplicationConfig } from '@angular/core';
import {
  TitleStrategy,
  provideRouter,
  withComponentInputBinding,
} from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { TemplatePageTitleStrategy } from './services/webpage-title.service';
import { ProductService } from './services/product.service';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { tokenInterceptor } from './services/token.interceptor';
import { provideStore, StoreModule } from '@ngrx/store';
import { counterReducer } from './app.counter.reducer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { tableFilterReducer } from './models/page-states/table.filter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),
    provideClientHydration(),
    provideHttpClient(withInterceptors([tokenInterceptor]), withFetch()),
    { provide: TitleStrategy, useClass: TemplatePageTitleStrategy },
    ProductService,
    provideStore({ counts: counterReducer, filters: tableFilterReducer }),
    provideAnimationsAsync(),
  ],
};
