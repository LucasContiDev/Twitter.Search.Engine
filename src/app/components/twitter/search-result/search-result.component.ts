import { Component, ElementRef, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { TwitterMessageEntity } from 'src/app/entities/twitter-message-entity/twitter-message-entity';

@Component({
  selector: "app-search-result",
  templateUrl: "./search-result.component.html",
  styleUrls: ["./search-result.component.css"],
})
export class SearchResultComponent implements OnInit {
  twitterMessages : any;

  pageIndex: number = 0;
  pageSize: number = 3;
  lowValue: number = 0;
  highValue: number = 3;
  response: any;

  constructor(private route : ActivatedRoute,
    private router: Router,
    public twitterMessage: TwitterMessageEntity) {
    }

  async ngOnInit() {
    if (this.twitterMessage.statuses) {
      console.log(this.twitterMessage)
      await this.twitterMessage.statuses.then((res: any) =>
      {
        this.response = res
      });
    }
    else {
      this.router.navigate(['twitter/search'])
    }
  }

  getPaginatorData(event) {
    console.log(event);
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize;
      this.highValue = this.highValue + this.pageSize;
    } else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize;
      this.highValue = this.highValue - this.pageSize;
    }
    this.pageIndex = event.pageIndex;
  }

  seeAtTweeter(twitterMessageItem) {
    var twitterUrl = "https://twitter.com/i/web/status/" + twitterMessageItem.id_str;
    window.open(twitterUrl,'_blank');
  }
}
