import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';
import { TwitterSearchClientService } from 'src/app/services/twitter-search-client.service'
import { Router, ActivatedRoute } from '@angular/router'
import { TwitterMessageEntity } from 'src/app/entities/twitter-message-entity/twitter-message-entity';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  animations: [
    trigger('fade' , [
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ])
  ]
})

export class SearchComponent implements OnInit {
  hashtag: string;
  responseObserve : any;
  response: any;
  responseError: any;

  constructor(public twitterSearchService : TwitterSearchClientService,
    private route: ActivatedRoute,
    private router: Router,
    public twitterMessage: TwitterMessageEntity) { 
  }

  ngOnInit() {
  }

  searchForTweets() {
    var formData = new FormData();
    formData.append("hashtag", this.hashtag)
    this.response = this.twitterSearchService.requestTwitterMessagesFromApi(formData);
    this.twitterMessage.statuses = this.response
    this.hashtag = null;
    this.router.navigate(['twitter/search/result'])
  }
}
