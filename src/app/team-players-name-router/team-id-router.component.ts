import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { PlayerService } from '../player.service';

@Component({
    selector: 'app-team-id-router',
    templateUrl: './team-id-router.component.html',
    styleUrls: [ './team-id-router.component.scss' ]
})
export class TeamIdRouterComponent implements OnInit, OnDestroy {
    private unSubscribe$ = new Subject<void>();

    constructor(private route: ActivatedRoute,
                private playerService: PlayerService) {
    }

    ngOnInit(): void {
        this.route.params
          .pipe(takeUntil(this.unSubscribe$))
          .subscribe((params: Params) => {
              this.playerService.setTeamId(+params.teamId);
          });
    }

    ngOnDestroy(): void {
        this.unSubscribe$.next();
        this.unSubscribe$.complete();
    }

}
