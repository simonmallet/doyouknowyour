import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedMessageComponent } from './featured-message/featured-message.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { DifficultySelectorComponent } from './difficulty-selector/difficulty-selector.component';
import { PlayAreaComponent } from './play-area/play-area.component';
import { ScoreComponent } from './score/score.component';
import {HttpClientModule} from '@angular/common/http';
import { StatsComponent } from './stats/stats.component';

@NgModule({
  declarations: [
    AppComponent,
    FeaturedMessageComponent,
    LanguageSelectorComponent,
    DifficultySelectorComponent,
    PlayAreaComponent,
    ScoreComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
