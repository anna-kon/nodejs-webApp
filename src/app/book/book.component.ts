import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from "../model/book.model";
import { BookRepository } from "../model/book.repository";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  private category: string=null;
  tagId: string=null;


  constructor(private repository: BookRepository,private route: ActivatedRoute) { 
   
  }

 get books(): Book[]{

      return this.repository.getBooks(this.category);

  } 

  /* getBooksByTag(){
    if(this.tagId==null){
      this.books = this.repository.getBooks(this.category);
    } else {
      this.repository.getTag(this.tagId).subscribe(res=>{
      console.log("tag:"+ res.name);
      for(let bookId of res.books){
        console.log("book:"+ bookId);
        this.repository.getBook(bookId).subscribe(res=>{
          this.books.push(res);
        });
      }
    });
  }
    
  } */

  get categories():string[]{
    return this.repository.getCategories();
  }

  changeCategory(category){
    this.category=category;
  }

  ngOnInit() {
    this.tagId=this.route.snapshot.params['tagId'];
    //this.getBooksByTag();
  }

}
