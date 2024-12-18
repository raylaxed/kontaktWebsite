import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebisiteManagementComponent } from './webisite-management.component';

describe('WebisiteManagementComponent', () => {
  let component: WebisiteManagementComponent;
  let fixture: ComponentFixture<WebisiteManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WebisiteManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebisiteManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
