import { TestBed, ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should append value to display', () => {
    component.append('123');
    component.append('4');
    expect(component.display).toBe('1234');
  });

  it('should delete last caracter from display', () => {
    component.append('1234');
    component.delete();
    expect(component.display).toBe('123');
  });

  it('should reset display', () => {
    component.append('1234');
    component.reset();
    expect(component.display).toBe('');
  });

  it('should calculate valid expression', () => {
    component.display = '2+2';
    component.calculate();
    expect(component.display).toBe('4');
  });

  it('should handle multiplication using x', () => {
    component.display = '2x2';
    component.calculate();
    expect(component.display).toBe('4');
  });

  it('should handle division using /', () => {
    component.display = '2/2';
    component.calculate();
    expect(component.display).toBe('1');
  });

  it('should display error message for invalid expression', () => {
    component.display = '2+';
    component.calculate();
    expect(component.display).toBe('Error');
  });

  it('should switch theme from 1 to 2, 3, the back to 1', () => {
    component.switchTheme();
    expect(component.theme).toBe(2);
    component.switchTheme();
    expect(component.theme).toBe(3);
    component.switchTheme();
    expect(component.theme).toBe(1);
  });
});
