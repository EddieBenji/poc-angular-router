import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FootballApiInterceptor } from './interceptor/football-api-interceptor';
import { PlayersComponent } from './players/players.component';
import { TeamIdRouterComponent } from './team-players-name-router/team-id-router.component';
import { TeamsComponent } from './teams/teams.component';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        TeamsComponent,
        HomeComponent,
        PlayersComponent,
        TeamIdRouterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: FootballApiInterceptor, multi: true },
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
