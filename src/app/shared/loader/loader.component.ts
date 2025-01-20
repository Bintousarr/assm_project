import { ChangeDetectorRef, Component } from '@angular/core';
import { LoaderService } from '../../services/loader.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
 

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  isLoading$!: Observable<boolean>; // Déclaration sans initialisation immédiate

  constructor(private loaderService: LoaderService, private cdr: ChangeDetectorRef) {}
  loading$ = this.loaderService.loading$;
  loading = false;
  ngOnInit(): void {
    // Initialisation après que le service soit disponible
   
    //console.log(this.loading$)
    this.loaderService.loading$.subscribe((isLoading) => {
      this.loading = isLoading;
      // Force la détection des changements
      this.cdr.detectChanges();
    });
  }

}
