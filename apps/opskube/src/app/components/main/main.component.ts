import { Component, OnInit } from '@angular/core';
import { ApisService } from '../../services/apis.service';
import { book } from '../../models/book'
import { user } from '../../models/user';
import { order } from '../../models/order';
import {  Router } from '@angular/router';
@Component({
  selector: 'opskube-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private service:ApisService,private router:Router) { }

  SearchString=''
  allbooks : book[] =[];
  copybooks : book[] =[];
  
  ngOnInit(): void {
    this._getData();
  }

  private _getData(): void {
    this.service.getBook().subscribe(data=>{
      this.allbooks=data;
      this.copybooks=data;
    })
  }
  
  order(id:string){
    const userId = localStorage.getItem('userName');
    console.log(id,userId);
    
    if(!userId){
      this.router.navigate(['/User']);
    }else{
      const data : order ={
        User:userId,
        books:id
      } 
      this.service.newOrder(data).subscribe(res=>{
        console.log(res);
        if(res.success){
          alert('Order Has been placed successfully');
        }else{
          alert(res.msg);
        }
      })
    }
    
  }

  search(){
    const dummydata = [];
    for(let i =0;i<this.copybooks.length;i++){
      if(this.copybooks[i].Name?.toLowerCase().includes(this.SearchString.toLowerCase())){
        dummydata.push(this.copybooks[i]);
      }
    }
    this.allbooks = dummydata;
  }
}
