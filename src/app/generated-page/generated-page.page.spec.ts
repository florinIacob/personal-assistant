import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedPagePage } from './generated-page.page';

describe('GeneratedPagePage', () => {
  let component: GeneratedPagePage;
  let fixture: ComponentFixture<GeneratedPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
