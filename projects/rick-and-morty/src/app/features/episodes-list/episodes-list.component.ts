import { Component, OnInit } from '@angular/core';
import { Episode } from '../../core/model/model';
import { StateService } from '../../core/services/state.service';
import { EpisodeCardComponent } from '../episode-card/episode-card.component';

@Component({
  selector: 'jessie-episodes-list',
  standalone: true,
  imports: [EpisodeCardComponent],
  template: ` <ul class="episode-list">
    @for (episode of episodesList; track $index) {
    <jessie-episode-card [episodeInfo]="episode" />
    }
  </ul>`,
  styleUrl: './episodes-list.component.css',
})
export class EpisodesListComponent implements OnInit {
  episodesList!: Episode[];
  constructor(private stateSrv: StateService) {}

  ngOnInit(): void {
    this.stateSrv.episode.subscribe((episodesList) => {
      this.episodesList = episodesList;
    });
  }
}