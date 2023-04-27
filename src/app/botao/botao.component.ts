import { Component, Output, EventEmitter, Input } from "@angular/core";
import { eventNames } from "process";
let i=0;
let total;
let valor;

@Component({
    selector:'app-botao',
    templateUrl: "./botao.component.html"
    
}) 
export class BotaoComponent{
    @Input()
    digitou:string;
    @Output()

    clickBotao= new EventEmitter()
    @Output()
    digitar=new EventEmitter<string>()

    
    botaoClick(num:string):void {
        i++;
        
        if(i==1){
            this.digitou=num;
        }
        else {
          this.digitou += num.toString();
      
         if(num==='='){
          const ignora = /^(\d+[\+\-\*\/]?)*\d+$/;
          let expressao = this.digitou.slice(0, -1); 
          if (!ignora.test(expressao)) {
            console.error('Expressão inválida');
            return;
          }
      
          
          const resultado = eval(expressao);
          console.log(resultado);
          this.digitou=resultado;
         
          
        }else if(num==='C'){
          this.digitou='';

        }
        else if(num==='CE'){
          
          let expressao = this.digitou.slice(0, -3); 
          console.log(expressao)
          this.digitou=expressao
        }
        
      }
      }
        
            }
           
           
        
      

    
        

        

