import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent]
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

  it('should display the About section content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const aboutSection = compiled.querySelector('.footer-section.about');
    const aboutTitle = aboutSection?.querySelector('h2')?.textContent?.trim();
    const aboutParagraph = aboutSection?.querySelector('p')?.textContent?.trim();
    
    expect(aboutTitle).toBe('About MovieShow');
    expect(aboutParagraph).toBe('MovieShow is your go-to platform for discovering and requesting movies. Whether you\'re into the latest releases or classic films, we\'ve got you covered.');
  });

  it('should display the Quick Links section with correct links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const quickLinksSection = compiled.querySelector('.footer-section.quick-links');
    const links = quickLinksSection?.querySelectorAll('ul li a');
    
    // Check if links are defined
    expect(links).toBeDefined();
    
    if (links) {
      expect(links.length).toBe(5); // Ensure there are 5 links
  
      const expectedLinks = [
        'Home',
        'Browse Movies',
        'Request a Movie',
        'About Us',
        'Contact'
      ];
      
      links.forEach((link, index) => {
        expect(link.textContent?.trim()).toBe(expectedLinks[index]);
      });
    }
  });
  

  it('should display the Contact section content with correct details', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const contactSection = compiled.querySelector('.footer-section.contact');
    const email = contactSection?.querySelector('a')?.textContent?.trim();
    const phone = contactSection?.querySelectorAll('p')[1]?.textContent?.trim();
    const address = contactSection?.querySelectorAll('p')[2]?.textContent?.trim();
    
    expect(email).toBe('contact@movieshow.com');
    expect(phone).toBe('Phone: +1 (555) 987-6543');
    expect(address).toBe('Address: 456 Cinema Street, Film City, CA 90210');
  });

  it('should display the social media links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const socialSection = compiled.querySelector('.footer-section.social');
    const socialLinks = socialSection?.querySelectorAll('a');
    expect(socialLinks).toBeDefined();
    if (socialLinks) {
      expect(socialLinks.length).toBe(3); // Ensure there are 3 social media links
      const expectedSocialLinks = [
        'Facebook',
        'Twitter',
        'Instagram'
      ];
      
      socialLinks.forEach((link, index) => {
        expect(link.textContent?.trim()).toBe(expectedSocialLinks[index]);
      });
    }
  });
  

  it('should display the footer bottom content', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const footerBottom = compiled.querySelector('.footer-bottom p');
    expect(footerBottom).toBeDefined();
    if (footerBottom) {
      const footerText = footerBottom.textContent?.trim();
      const expectedText = '© 2024 MovieShow | All Rights Reserved';
      console.log('Footer Text:', footerText);
      console.log('Expected Text:', expectedText);
      expect(footerText).toBe(expectedText);
    }
  });
  
});
