import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlayersComponent } from './players/players.component';
import { TeamIdRouterComponent } from './team-players-name-router/team-id-router.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    {
        path: 'teams', component: TeamsComponent,
        children: [
            {
                path: ':teamId',
                component: TeamIdRouterComponent,
                children: [
                    { path: 'players', component: PlayersComponent }
                ]
            }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
}
