import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import {SpeakerAvalabilityService} from '../../services/speaker-avalability.service'

@Component({
  selector: 'app-intervenant-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intervenant-detail.component.html',
  styleUrls: ['./intervenant-detail.component.scss']
})
export class IntervenantDetailComponent implements OnInit {
  intervenant: any;
  disponibilities:any;
  idintervenant:number=0;
  

  constructor(private route: ActivatedRoute, private userService: UserService, private speakerAvalabilityService: SpeakerAvalabilityService) { }

  ngOnInit(): void {
    const intervenantId = this.route.snapshot.paramMap.get('id');
   
    if (intervenantId) {
      this.userService.getIntervenantById(intervenantId).subscribe(
        (data) => {
          this.intervenant = data;
          console.log('Intervenant:', this.intervenant);
        },
        (error) => {
          console.error('Error fetching intervenant details', error);
        }
      );

      this.speakerAvalabilityService.getSpeakerAvailabilityWithDetails(parseInt(intervenantId)).subscribe((response)=>{
        this.disponibilities=response;
        console.log('Disponibilité:', this.disponibilities);
      },
      (error) => {
        console.error('Error fetching disponibility details', error);
      
      })
    }
  }
}
