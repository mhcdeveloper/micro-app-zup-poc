import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiZupperModule } from '@zup-academy/ui-zupper';

import { CursosComponent } from './cursos.component';

describe('CursosComponent', () => {
  let component: CursosComponent;
  let fixture: ComponentFixture<CursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UiZupperModule],
      declarations: [ CursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
