import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Team, TeamService } from '../team.service';

@Component({
    selector: 'app-teams',
    templateUrl: './teams.component.html',
    styleUrls: [ './teams.component.scss' ]
})
export class TeamsComponent implements OnInit {
    teams$: Observable<Team[]>;

    constructor(private teamService: TeamService) {
    }

    ngOnInit(): void {
        this.teams$ = this.teamService.getTeams();
    }
}
