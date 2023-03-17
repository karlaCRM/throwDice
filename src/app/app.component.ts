import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
 diceLeft: string = "../assets/img/dice1.png";
 diceRight: string = "../assets/img/dice4.png";
  numberOne: number = 1;
  numberTwo: number = 2;


  throwDices(): void{
    this.numberOne = Math.round(Math.random()*5) + 1;
    this.numberTwo = Math.round(Math.random()*5) + 1;
    
    this.diceLeft = `../assets/img/dice${this.numberOne}.png`;
    this.diceRight = `../assets/img/dice${this.numberTwo}.png`;
    if(this.diceLeft === this.diceRight){
      Swal.fire(
        `${this.numberOne} =  ${this.numberTwo} `,
        'You Win',
      )
    }

  }

}
