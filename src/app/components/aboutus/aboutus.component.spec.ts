import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutusComponent } from './aboutus.component';
import { FooterComponent } from '../footer/footer.component';
import { By } from '@angular/platform-browser';
 
describe('AboutusComponent', () => {
  let component: AboutusComponent;
  let fixture: ComponentFixture<AboutusComponent>;
 
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutusComponent]
    }).compileComponents();
 
    fixture = TestBed.createComponent(AboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create the AboutusComponent', () => {
    expect(component).toBeTruthy();
  });
 
  it('should render the mission statement', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const missionElement = compiled.querySelector('.mission-statement h3');
    expect(missionElement?.textContent).toContain('Our Mission');
  });
 
  it('should display team member names', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const teamMembers = compiled.querySelectorAll('.team-member h4');
    const expectedNames = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Lee'];
 
    teamMembers.forEach((teamMember, index) => {
      expect(teamMember.textContent).toContain(expectedNames[index]);
    });
  });
 



  
  it('should include the FooterComponent', () => {
    const footerElement = fixture.debugElement.query(By.directive(FooterComponent));
    expect(footerElement).not.toBeNull();
  });
});
 