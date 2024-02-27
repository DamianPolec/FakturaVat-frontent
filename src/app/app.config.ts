import { ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';
import localePl from '@angular/common/locales/pl';

registerLocaleData(localePl);

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideHttpClient(withJsonpSupport()), 
    { provide: LOCALE_ID, useValue: 'pl' }
  ]
};
