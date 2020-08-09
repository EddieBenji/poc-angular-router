import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamIdRouterComponent } from './team-id-router.component';

describe('TeamPlayersNameRouterComponent', () => {
  let component: TeamIdRouterComponent;
  let fixture: ComponentFixture<TeamIdRouterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamIdRouterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamIdRouterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
