import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface Notification {
  name: string;
  message: string;
  creationDate: Date;
  status: string;
}
@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.scss'
})
export class NotificationComponent {
 

  notifications: Notification[] = [
    { name: 'Mr OUATTARA', message: 'Pape souhaiterait s\'entretenir avec vous ', creationDate: new Date('2024-08-16'), status: 'Lu' },
    { name: 'Mr OUATTARA', message: 'Bintou souhaiterait s\'entretenir avec vous', creationDate: new Date('2024-08-25'), status: 'Non Lu' },
    { name: 'Mr OUATTARA', message: 'Amina souhaiterait s\'entretenir avec vous', creationDate: new Date('2024-09-01'), status: 'Non Lu' },

  ];

  itemsPerPage = 5;
  currentPage = 1;
  totalItems = this.notifications.length;

  constructor(private router: Router) {}

  ngOnInit(): void { }

  onItemsPerPageChange(event: any): void {
    this.currentPage = 1;
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage -= this.itemsPerPage;
    }
  }

  nextPage(): void {
    if (this.currentPage + this.itemsPerPage - 1 < this.totalItems) {
      this.currentPage += this.itemsPerPage;
    }
  }
  logout() {
    // Vider le token du localStorage
    localStorage.removeItem('userToken');
    
    // Rediriger vers la page de login
    this.router.navigate(['/login']);
  }

  selectedNotification: any = null;

  openPopup(notification: any) {
    this.selectedNotification = notification;
  }

  closePopup() {
    this.selectedNotification = null;
  }

  markAsRead() {
    if (this.selectedNotification) {
      this.selectedNotification.status = 'Lu';
      this.closePopup();
    }
  }

  deleteNotification(notification: Notification) {
    const index = this.notifications.indexOf(notification);
    if (index !== -1) {
      this.notifications.splice(index, 1);
      this.totalItems = this.notifications.length;
    }
  }
}

