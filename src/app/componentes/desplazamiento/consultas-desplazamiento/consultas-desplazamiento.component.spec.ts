import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultasDesplazamientoComponent } from './consultas-desplazamiento.component';

describe('ConsultasDesplazamientoComponent', () => {
  let component: ConsultasDesplazamientoComponent;
  let fixture: ComponentFixture<ConsultasDesplazamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultasDesplazamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultasDesplazamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
