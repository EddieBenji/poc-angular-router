import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Player {
    number: string;
    player: string;
}

@Injectable({
    providedIn: 'root'
})
export class PlayerService {

    private teamIdChange = new BehaviorSubject<number>(-1);

    constructor(private http: HttpClient) {
    }

    public getTeamIdChange() {
        return this.teamIdChange.asObservable();
    }

    public setTeamId(teamId: number) {
        this.teamIdChange.next(teamId);
    }

    public getPlayers(teamId: number): Observable<Player[]> {
        return this.http.get<{ api: { players: Player[] } }>(`https://api-football-v1.p.rapidapi.com/players/2019/${teamId}`)
          .pipe(map((response) => {
              return response.api.players;
          }));
    }
}
