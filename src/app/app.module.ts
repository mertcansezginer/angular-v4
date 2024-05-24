import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { FormControlErrorMessagePipe } from './pipes/form-control-error-message.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { AppButtonDirective } from './directives/app-button.directive';
import { AppNoCharacterInputDirective } from './directives/app-no-character-input.directive';
import { AppMultipleDirective } from './directives/app-multiple.directive';
import { AppWelcomeDirective } from './directives/app-welcome.directive';
import { HomeComponent } from './pages/home/home.component';

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    FormControlErrorMessagePipe,
    TranslatePipe,
    AppButtonDirective,
    AppNoCharacterInputDirective,
    AppMultipleDirective,
    AppWelcomeDirective,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule, // Bu satırı ekleyin
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
