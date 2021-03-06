import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {DictionaryComponent} from './old-dictionary/dictionary.component';
import {DictionaryService} from './services/dictionary.service';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginBuilderComponent} from './login-builder/login-builder.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    LoginBuilderComponent
  ],
    imports: [
        BrowserModule,
        NgbModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  exports: [],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
