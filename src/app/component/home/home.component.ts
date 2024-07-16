import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RepositoryService } from '../../services/repository.service';
import { MaterialModule } from '../../_module/material/material.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, MaterialModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private repo: RepositoryService) {}

  posts: any[] = [];

  ngOnInit(): void {
    // this.loadInitialData();
    // throw new Error('Method not implemented.');
  }

  loadInitialData() {
    this.repo.getAllpost().subscribe(
      (res) => {
        // console.log(res);
        this.posts = res as any;
      },
      (err) => {
        if (typeof window !== 'undefined') {
          window.alert('There is an error while getting post data');
        }
      }
    );
  }
}
