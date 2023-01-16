import { Component, Input, SimpleChange, } from '@angular/core';

@Component({
  selector: 'app-password-strength',
  templateUrl: './password-strength.component.html',
  styleUrls: ['./password-strength.component.css']
})
export class PasswordStrengthComponent {
@Input() public passwordToCheck: string;


  bar0: string;
  bar1: string;
  bar2: string;
  
  msgColor: string;
  msg = '';

private colors = ['darkred','yellow', 'yellowgreen' ];
    
checkStrength(p) {
  let force = 0;
  const regex = /[$-/:-?{-~!"^_@`\[\]]/g;
  
  const Letters = /[a-z]+/.test(p);
  const numbers = /[0-9]+/.test(p);
  const symbols = regex.test(p);

const flags = [Letters, numbers, symbols];

let passedMatches = 0;
  for(const flag of flags) {
    passedMatches += flag === true ? 1 : 0;
  };

force += 2 * p.length + ((p.length >= 10)? 1 : 0);
force += passedMatches * 10;

force = (p.length <= 8) ? Math.min(force, 10) : force;              //minimum input length password

force = (passedMatches === 1) ? Math.min(force, 10) : force;
force = (passedMatches === 2) ? Math.min(force, 20) : force;
force = (passedMatches === 3) ? Math.min(force, 30) : force;
return force
  };

ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    const password = changes.passwordToCheck.currentValue;
    this.setBarColors(3, '#DDD');
    (password < 1 ) ? this.setBarColors(3, '#DDD') : this.setBarColors(3, 'red') ;
    if (password) {
    const c = this.getColor(this.checkStrength(password));
    this.setBarColors(c.index, c.color);
    switch (c.index){
        case 1:
          this.msg = 'Simple password';
          break;
        case 2:
          this.msg = 'Medium password';
          break;
        case 3:
          this.msg = 'Strong password';
          break;
      }
    }else{
      this.msg = '';
    }
  };

  private getColor(s ) {
    let index = 0;
    if(s === 10){
      index = 0;
    }else if(s === 20){
      index = 1;
    }else if(s === 30){
      index = 2;
    }else{
      index = 4;
    }
    return{
      index: index + 1,
      color: this.colors[index]
    };
}

private setBarColors(count , col){
  for(let n = 0; n < count; n++) {
    this['bar' + n] = col;
  }
}






};



