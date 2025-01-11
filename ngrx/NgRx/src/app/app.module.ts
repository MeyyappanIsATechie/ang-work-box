import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideState, provideStore, StoreModule } from '@ngrx/store';
import { reducer } from './store/counter.reducer';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({},{})
  ],
  providers: [
    provideStore(),
    provideState({name: 'counter', reducer: reducer})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
