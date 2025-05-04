import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategryDetailsComponent } from './categry-details.component';

describe('CategryDetailsComponent', () => {
  let component: CategryDetailsComponent;
  let fixture: ComponentFixture<CategryDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategryDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategryDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
