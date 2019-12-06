import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LobbyJoinGameComponent } from './lobby-join-game.component';

describe('LobbyJoinGameComponent', () => {
  let component: LobbyJoinGameComponent;
  let fixture: ComponentFixture<LobbyJoinGameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LobbyJoinGameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LobbyJoinGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
