import { Component } from '@angular/core';
import { EmailService } from '../../services/emailService/email.service';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, HttpClientModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  constructor(private emailService: EmailService) { console.log('EmailService injected:', !!emailService); }

    name: string = '';
  email: string = '';
  message: string = '';
  onSubmit(contactForm: any) {
    const emailData = {
      name: contactForm.value.name,
      email: contactForm.value.email,
      message: contactForm.value.message
    };
    this.emailService.sendEmail(emailData).subscribe(response => {
      console.log('Email sent successfully', response);
      //alert('Message sent successfully!');
      contactForm.reset();
    }, error => {
      console.error('Error sending email', error);
      alert('Failed to send the message.');
    });
  }
}
