import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactusComponent } from './contactus.component';
import { ContactService } from '../../contact.service';
import { of,throwError } from 'rxjs';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;
  let contactServiceSpy: jasmine.SpyObj<ContactService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('ContactService', ['sendContactEmail']);
    await TestBed.configureTestingModule({
      imports: [ContactusComponent],
      providers: [
        { provide: ContactService, useValue: spy }
      ]
    })
    .compileComponents();

    contactServiceSpy = TestBed.inject(ContactService) as jasmine.SpyObj<ContactService>;

    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the contact form', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const formElement = compiled.querySelector('form');
    expect(formElement).toBeTruthy();
  });

  it('should have initial formData values as empty strings', () => {
    expect(component.formData).toEqual({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  });
 
  it('should call sendEmail method when form is submitted', () => {
    spyOn(component, 'sendEmail');
    const button = fixture.debugElement.nativeElement.querySelector('button');
    button.click();
    expect(component.sendEmail).toHaveBeenCalled();
  });
 
  xit('should reset formData and set success message on successful email send', async () => {
    const responseMock = { success: true, message: 'Email sent successfully!' };
    contactServiceSpy.sendContactEmail.and.returnValue(Promise.resolve(responseMock));

    component.sendEmail();
    fixture.detectChanges(); // Ensure the DOM updates

    expect(contactServiceSpy.sendContactEmail).toHaveBeenCalledWith(component.formData);
    expect(component.formData).toEqual({ name: '', email: '', subject: '', message: '' });
    expect(component.message).toBe(responseMock.message);
  });

  xit('should set error message on failed email send', async () => {
    contactServiceSpy.sendContactEmail.and.returnValue(Promise.reject('Error sending email'));
    await component.sendEmail();
    fixture.detectChanges(); 
    expect(component.message).toBe('There was an error sending your message. Please try again.');
  });

  xit('should reset formData and set success message on successful email send', async () => {
    const responseMock = { success: true, message: 'Email sent successfully!' };
    contactServiceSpy.sendContactEmail.and.returnValue(Promise.resolve(responseMock));
    await component.sendEmail();
    fixture.detectChanges(); 
    expect(contactServiceSpy.sendContactEmail).toHaveBeenCalledWith(component.formData);
    expect(component.formData).toEqual({ name: '', email: '', subject: '', message: '' });
    expect(component.message).toBe(responseMock.message);
  });
  
  


  it('should display the message when message property is set', () => {
    component.message = 'Test message';
    fixture.detectChanges();
    const messageElement = fixture.debugElement.nativeElement.querySelector('p');
    expect(messageElement.textContent).toContain('Test message');
  });
});

 


    

