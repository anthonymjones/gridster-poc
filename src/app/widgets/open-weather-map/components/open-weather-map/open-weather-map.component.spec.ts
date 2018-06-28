import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenWeatherMapComponent } from './open-weather-map.component';
import { MaterialModule } from '../../../../material.module';
import { HttpClientModule } from '@angular/common/http';

describe('OpenWeatherMapComponent', () => {
  let component: OpenWeatherMapComponent;
  let fixture: ComponentFixture<OpenWeatherMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule, HttpClientModule],
      declarations: [OpenWeatherMapComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenWeatherMapComponent);
    component = fixture.componentInstance;
    component.ngOnInit = jest.fn;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
