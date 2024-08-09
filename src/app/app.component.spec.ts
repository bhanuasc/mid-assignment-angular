import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from './app.routes';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('AppComponent', () => {

  let componentApp: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let router: Router;
  let location: Location;
  let debugElement : DebugElement


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();

    
    fixture = TestBed.createComponent(AppComponent);
    componentApp = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);


    router.initialNavigation();
    fixture.detectChanges();
    debugElement = fixture.debugElement


  
  });

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have the 'routeangular' title`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('routeangular');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, routeangular');
  // });

  // fit('checking for default path', async () => {
  //   await fixture.whenStable();
  //   expect(location.path()).toBe('/');
  // });

  fit('checking for About Us Route', async () => {
    let links = debugElement.queryAll(By.css('.aboutclass'))
    links[0].nativeElement.click()
    await fixture.whenStable().then(() => {
      expect(location.path()).toBe('/aboutus');

    });
  });

  fit('checking for carres route',async()=>{
    let links = debugElement.queryAll(By.css('.carrers'))
    links[0].nativeElement.click()
    await fixture.whenStable().then(() => {
      expect(location.path()).toBe('/careers')
    })
  });

  fit('checking for login route',async()=>{
    let links = debugElement.queryAll(By.css('.login'))
    links[0].nativeElement.click()
    await fixture.whenStable().then(() => {
      expect(location.path()).toBe('/login')
    })
  });





});
