import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlayersFormComponent } from './admin-players-form.component';

describe('AdminPlayersFormComponent', () => {
  let component: AdminPlayersFormComponent;
  let fixture: ComponentFixture<AdminPlayersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlayersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlayersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
