import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent] // Use imports instead of declarations
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the footer element', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const footerElement = compiled.querySelector('footer');
    expect(footerElement).toBeTruthy();
  });

  it('should display the logo section with correct text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const logoSection = compiled.querySelector('.logo-section span');
    expect(logoSection?.textContent?.trim()).toContain('MovieShow');
  });

  it('should display the popular categories section', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const popularCategories = compiled.querySelector('.popular-categories');
    expect(popularCategories).toBeDefined();
  });




  it('should display the stats section with correct numbers', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const statsSection = compiled.querySelector('.stats');
    expect(statsSection).toBeDefined();
    const totalCustomers = statsSection?.querySelector('.stat:nth-child(1) p');
    const totalDownloads = statsSection?.querySelector('.stat:nth-child(2) p');
    expect(totalCustomers?.textContent?.trim()).toBe('235380');
    expect(totalDownloads?.textContent?.trim()).toBe('311514');
  });

  it('should display the subscribe section with correct form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const subscribeSection = compiled.querySelector('.subscribe');
    expect(subscribeSection).toBeDefined();
    const form = subscribeSection?.querySelector('form');
    const emailInput = form?.querySelector('input[type="email"]');
    const subscribeButton = form?.querySelector('button[type="submit"]');
    expect(emailInput).toBeTruthy();
    expect(subscribeButton).toBeTruthy();
  });

  it('should display the footer bottom content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const footerBottom = compiled.querySelector('.footer-bottom p');
    expect(footerBottom).toBeDefined();
    if (footerBottom) {
      const footerText = footerBottom.textContent?.trim();
      const expectedText = '© 2024 MovieShow | All Rights Reserved';
      expect(footerText).toBe(expectedText);
    }
  });
});
