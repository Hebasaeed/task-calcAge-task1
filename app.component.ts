import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog2';
  isHomePage:boolean=false
  pageTitle(){
    return this.isHomePage?'home page':'about page';
  }
  defaultEmail:string='heba@gmail.com';
  isHeader:boolean=true
  styleClass=this.isHeader?' bold italic Header':'bold italic subHeader'
  headerClass(){
    return {Header:this.isHeader,
      bold:this.isHeader,
      italic:!this.isHeader};
    }
    proStyle(){
     return  {color : this.isHeader? 'red':'green',
      fontWeight : this.isHeader? 'bold':'2rem'
  }
  }
  toggelHeaderState(){
    return this.isHeader=!this.isHeader;
  }
  //////////////////////////////////////////////
  yearNow:number=0; 
  yearOfBirth:number=0;
  result:number=0;
  
    
  calcAge(){
    
 this.result=this.yearNow -this.yearOfBirth;}
  

}


