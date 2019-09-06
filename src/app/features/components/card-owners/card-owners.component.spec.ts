import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOwnersComponent } from './card-owners.component';

describe('CardOwnersComponent', () => {
  let component: CardOwnersComponent;
  let fixture: ComponentFixture<CardOwnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOwnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOwnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
