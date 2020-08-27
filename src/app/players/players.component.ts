import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Player, PlayerService } from '../player.service';

@Component({
    selector: 'app-players',
    templateUrl: './players.component.html',
    styleUrls: [ './players.component.scss' ]
})
export class PlayersComponent implements OnInit, OnDestroy {
    private unSubscribe$ = new Subject<void>();
    players$ = new Observable<Player[]>();

    constructor(private playerService: PlayerService) {
    }

    ngOnInit(): void {
        this.playerService.getTeamIdChange()
          .pipe(takeUntil(this.unSubscribe$))
          .subscribe((teamId) => {
              this.players$ = this.playerService.getPlayers(teamId);
          });
    }

    ngOnDestroy(): void {
        this.unSubscribe$.next();
        this.unSubscribe$.complete();
    }
}
