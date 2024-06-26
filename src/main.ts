import { enableProdMode } from '@angular/core';
import { tick } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}



platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
