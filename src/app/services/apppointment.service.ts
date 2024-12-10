import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

@Injectable({
  providedIn: 'root'
})
export class ApppointmentService {

  private apiUrl = 'https://mass.otif-africa-space.com/api/public/api.php'; // URL de l'API; // URL de votre fichier PHP
 // private apiUrl = 'https://mass.ci/api/public/api.php'; // URL de l'API; // URL de votre fichier PHP
  //private apiUrl = 'http://localhost:8000/api.php'; // URL de l'API; // URL de votre fichier PHP

  constructor(private http: HttpClient) { }

  register(userData: any): Observable<any> {
    const url = `${this.apiUrl}?action=appointment`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(url, userData, { headers });
  }

  getAppointmentsByUser(userId: string): Observable<any[]> {
    const url = `${this.apiUrl}?action=getParticipantAppointments&participant_id=${userId}`;
    return this.http.get<any[]>(url);
  }
  getBySpeaker(userId: string): Observable<any[]> {
    const url = `${this.apiUrl}?action=appointments&speaker_id=${userId}`;
    return this.http.get<any[]>(url);
  }

  updateAppointmentStatus(id: number, status: string): Observable<any> {
    const url = `${this.apiUrl}?action=updateAppointmentStatus`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { id, status };

    return this.http.post<any>(url, body, { headers });
  }

  // getCalandar(userId: string): Observable<any[]> {
  //   const url = `${this.apiUrl}?action=generatePdfCalendar&speaker_id=${userId}`;
  //   return this.http.get<any[]>(url);
  // }

  // Méthode pour télécharger le calendrier au format PDF
  getCalendar(userId: string): Observable<any> {
    const url = `${this.apiUrl}?action=generatePdfCalendar&speaker_id=${userId}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    // const headers = new HttpHeaders({
    //   'Accept': 'application/pdf', // Assure que l'API renvoie un PDF
    // });

    return this.http.get(url, { headers, responseType: 'json' });
  }

  // Méthode pour déclencher le téléchargement
  downloadCalendar(userId: string) {
    this.getCalendar(userId).subscribe((data) => {
      // Utilise FileSaver pour déclencher le téléchargement
      this.generatePDF(data)
      // const fileName = `calendar_${userId}.pdf`;
      // saveAs(blob, fileName);
    }, error => {
      console.error('Error downloading the PDF:', error);
    });
  }

  generatePDF(appointmentsData: any) {
    const doc = new jsPDF();
    
    // Title (Center and Bold)
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    const pageWidth = doc.internal.pageSize.getWidth();
    const titleText = 'Calendrier des Rendez-vous';
    const titleWidth = doc.getTextWidth(titleText);
    doc.text(titleText, (pageWidth - titleWidth) / 2, 15);  // Centering the title
  
    // Participant's Appointments Table
    if (appointmentsData.appointments_participant && appointmentsData.appointments_participant.length > 0) {
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Rendez-vous pris :', 10, 30);
    
        const participantData = appointmentsData.appointments_participant.map((appointment: any) => [
            appointment.appointment_date,
            `${appointment.start_time} - ${appointment.end_time}`,
            appointment.theme,
            `${appointment.speaker_first_name} ${appointment.speaker_last_name}`
        ]);
    
        doc.autoTable({
            head: [['Date', 'Heure', 'Thème', 'Participant']],
            body: participantData,
            startY: 35,
            theme: 'striped',  // Improves table appearance
            styles: { fontSize: 12, cellPadding: 3 },
            headStyles: { fillColor: [41, 128, 185], textColor: [255, 255, 255] }  // Styling the header
        });
    }

    // Speaker's Appointments Table
    if (appointmentsData.appointments_speaker && appointmentsData.appointments_speaker.length > 0) {
        const lastTableY = (doc as any).lastAutoTable.finalY + 10 || 45;
        doc.setFontSize(14);
        doc.setFont('helvetica', 'bold');
        doc.text('Rendez-vous acceptés en tant que speaker :', 10, lastTableY);
    
        const speakerData = appointmentsData.appointments_speaker.map((appointment: any) => [
            appointment.appointment_date,
            `${appointment.start_time} - ${appointment.end_time}`,
            appointment.theme,
            `${appointment.participant_first_name} ${appointment.participant_last_name}`
        ]);
    
        doc.autoTable({
            head: [['Date', 'Heure', 'Thème', 'Participant']],
            body: speakerData,
            startY: lastTableY + 5,
            theme: 'striped',
            styles: { fontSize: 12, cellPadding: 3 },
            headStyles: { fillColor: [41, 128, 185], textColor: [255, 255, 255] }
        });
    }
  
    // Save the generated PDF
    doc.save('calendrier_rendez_vous.pdf');
}

  
}
