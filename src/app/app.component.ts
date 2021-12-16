import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';
  data = '12+345';
  getvalue(Val:String){
    console.warn(Val)
  }

  getname(name:any,num:number){
    alert(name+ num);
  }
  
}
