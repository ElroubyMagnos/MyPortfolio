import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MydesignsComponent } from './mydesigns.component';

describe('MydesignsComponent', () => {
  let component: MydesignsComponent;
  let fixture: ComponentFixture<MydesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MydesignsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MydesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
