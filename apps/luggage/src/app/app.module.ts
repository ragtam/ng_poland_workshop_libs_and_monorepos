import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LuggageFeatureCheckinModule } from '@flight-workspace/luggage/feature-checkin';
import { HttpClientModule } from '@angular/common/http';
import { LuggageFeatureReportLossModule } from '@flight-workspace/luggage/feature-report-loss';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    LuggageFeatureCheckinModule,
    HttpClientModule,
    LuggageFeatureReportLossModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
