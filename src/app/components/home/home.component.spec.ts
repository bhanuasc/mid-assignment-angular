import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { FooterComponent } from '../footer/footer.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the "Welcome to MovieShow" heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const headingElement = compiled.querySelector('.intro h2');
    expect(headingElement?.textContent).toContain('Welcome to MovieShow');
  });

  it('should render the "About Us" section heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const aboutUsElement = compiled.querySelector('.about h3');
    expect(aboutUsElement?.textContent).toContain('About Us');
  });
  

  it('should render the "Our Approach" section heading', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const sectionHeadingElement = compiled.querySelector('.images h3');
    expect(sectionHeadingElement?.textContent).toContain('Our Approach');
  });
  
  


  it('should render the contact info in the FooterComponent', () => {
    const footerElement = fixture.nativeElement.querySelector('app-footer');
    expect(footerElement?.textContent).toContain('contact@movieshow.com');
  });
  
  it('should include the FooterComponent', () => {
    const footerElement = fixture.debugElement.query(By.directive(FooterComponent));
    expect(footerElement).not.toBeNull();
  });


});
