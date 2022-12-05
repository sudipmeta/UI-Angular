import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppBar } from './app-bar.component';

describe('AppBar', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppBar
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppBar);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'task-managemnet'`, () => {
    const fixture = TestBed.createComponent(AppBar);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('task-managemnet');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppBar);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('task-managemnet app is running!');
  });
});
