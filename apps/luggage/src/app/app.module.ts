import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{ 
      path: '', 
      pathMatch: 'full', 
      redirectTo: 'check-in'
  },
  { 
      path: 'check-in', 
      loadChildren: () => import('@flight-workspace/luggage/feature-checkin')
                             .then(m => m.LuggageFeatureCheckinModule) 
  },
  { 
      path: 'report-loss', 
      loadChildren: () => import('@flight-workspace/luggage/feature-report-loss')
                             .then(m => m.LuggageFeatureReportLossModule) 
  },]),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
