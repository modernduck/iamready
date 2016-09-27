import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable, AngularFireAuth } from 'angularfire2';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'app works!';
  test;
  private max:number;
  private ready:number;


  constructor(private af: AngularFire) {
    this.af.auth.subscribe(user=>{
      this.test = user;
    })
    this.af.database.object('').subscribe(data =>{
      
      this.max = data.max;
      this.ready = data.ready
    })
  }

  meReady(){
    this.af.database.object('ready').set(this.ready + 1)
  }

}

  
