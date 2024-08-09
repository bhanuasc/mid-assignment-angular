import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcesComponent } from './resources.component';

describe('ResourcesComponent', () => {
  let component: ResourcesComponent;
  let fixture: ComponentFixture<ResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the title "Resources"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const title = compiled.querySelector('h2');
    expect(title?.textContent).toBe('Resources');
  });

  it('should render resource cards', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.resource-card');
    expect(cards.length).toBe(component.resources.length);
  });

  it('should display correct Title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const resourceCards = compiled.querySelectorAll('.resource-card');
    resourceCards.forEach((card, index) => {
      const titleElement = card.querySelector('h3');
      const title = titleElement?.textContent?.trim();
      console.log('Card Title:', title);
      console.log('Expected Title:', component.resources[index].title);
      expect(title).toBe(component.resources[index].title);
    });
  });

  it('should display correct Image URL', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const resourceCards = compiled.querySelectorAll('.resource-card');
    
    resourceCards.forEach((card, index) => {
      const imgElement = card.querySelector('img') as HTMLImageElement;
      const imgUrl = imgElement?.src;
      const expectedImgUrl = component.resources[index].imageUrl;
  
      console.log('Card Image URL:', imgUrl);
      console.log('Expected Image URL:', expectedImgUrl);
  
      expect(imgUrl).toBe(expectedImgUrl);
    });
  });

  it('should display correct Description', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const resourceCards = compiled.querySelectorAll('.resource-card');
  
    resourceCards.forEach((card, index) => {
      const descriptionElement = card.querySelector('p');
      const description = descriptionElement?.textContent?.trim();
      const expectedDescription = component.resources[index].description;
  
      console.log('Card Description:', description);
      console.log('Expected Description:', expectedDescription);
  
      expect(description).toBe(expectedDescription);
    });
  });
  
  

    it('should render the footer component', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      const footer = compiled.querySelector('app-footer');
      expect(footer).toBeTruthy();
    });
  });

