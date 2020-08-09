import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Team {
    team_id: number;
    name: string;
    logo: string;
}

@Injectable({
    providedIn: 'root'
})
export class TeamService {

    constructor(private http: HttpClient) {
    }

    getTeams(): Observable<Team[]> {
        // league_id: 524 - premier league
        return this.http.get<{ api: { teams: Team[] } }>('https://api-football-v1.p.rapidapi.com/v2/teams/league/524')
          .pipe(map((response) => response.api.teams));
    }

    // getTeams(): Observable<Team[]> {
    //     return of([
    //         {
    //             team_id: 40,
    //             name: 'Liverpool',
    //             logo: 'https://media.api-sports.io/football/teams/40.png',
    //         },
    //         {
    //             team_id: 71,
    //             name: 'Norwich',
    //             logo: 'https://media.api-sports.io/football/teams/71.png',
    //         },
    //     ]);
    // }
}
