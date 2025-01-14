import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonagemComponent } from './personagem.component';

describe('PersonagemComponent', () => {
  let component: PersonagemComponent;
  let fixture: ComponentFixture<PersonagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonagemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
