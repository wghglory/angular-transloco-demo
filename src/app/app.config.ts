import { HttpClient, provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, APP_INITIALIZER, importProvidersFrom, inject, Injectable, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import {
  Translation,
  TranslocoLoader,
  translocoConfig,
  provideTransloco,
  TranslocoService,
  getBrowserCultureLang,
} from '@ngneat/transloco';

import { routes } from './app.routes';

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
  private http = inject(HttpClient);

  getTranslation() {
    const lang = getBrowserCultureLang();
    return this.http.get<Translation>(`./assets/i18n/${lang}.json`);
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),

    provideTransloco({
      config: translocoConfig({
        availableLangs: ['en', 'fr', 'de', 'es', 'it', 'pt', 'zh', 'ja', 'ko'],
        fallbackLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        // reRenderOnLangChange: true,
        prodMode: !isDevMode(),
        // flatten: {
        //   aot: !isDevMode(),
        // },
      }),
      loader: TranslocoHttpLoader,
    }),
  ],
};
