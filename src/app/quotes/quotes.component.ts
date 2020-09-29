import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})

export class QuotesComponent implements OnInit {
  quotes:Quote[] = [
    new Quote (1,'Charles','Human spirit','A room without books is like a body without a soul.','Marcus Tullius Cicero', new Date(2019,7,12),0,0),
    new Quote (2,'John','Be Yourself','Be yourself; everyone else is already taken.','Oscar Wilde',new Date(2020,7,14),0,0),
    new Quote (3,'Mary','Change','Be the change that you wish to see in the world.','Mahatma Gandhi',new Date(2020,5,14),0,0),
    new Quote (4,'Fred','Do It','The Way To Get Started Is To Quit Talking And Begin Doing.','Walt Disney',new Date(2020,3,21),0,0),
  ];
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}
