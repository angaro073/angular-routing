import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a user_id property', () => {
    expect(fixture.componentInstance.user_id).toBeDefined();
  });

  it('user_id property should have the correctly value ', () => {
    expect(fixture.componentInstance.user_id).toEqual(1);
  });
});
