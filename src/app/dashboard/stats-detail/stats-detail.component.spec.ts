import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatsDetailComponent } from './stats-detail.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('StatsDetailComponent', () => {
  let component: StatsDetailComponent;
  let fixture: ComponentFixture<StatsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientModule],
      declarations: [ StatsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
