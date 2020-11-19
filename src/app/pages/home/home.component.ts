import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/shared/services';
import { MessageService, SlideservicesService } from 'src/app/shared/services/api';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
 
    myStyles={}

    // message: Message = new Message();


   
   
   
   
    isBusy: boolean = false
   dir: string;
   font: string;
    busySaving: boolean = false;
    formSubmitted: boolean = false;
    close: boolean = true;
    direction: string

    language: string;
    constructor( private sliderService : SlideservicesService  ,
        private messageServices: MessageService,
        private swalService: SwalService,
        private router: Router ,
    
        private renderer2: Renderer2,

        
        ) { 
        }
    ngOnInit() {
        // this.message = new Message()

        this.getDirective();
        
        this.language = localStorage.getItem('lang')
        if (this.language === 'ar') {
          this.myStyles = {
            'font-family': 'Arabic',
            }  

        } else {
          this.myStyles = {
            'font-family': 'NoirStd',
            }    
  
        }
      

    }

    
getDirective(){
  this.direction= localStorage.getItem('dir');
  this.router.navigate(['home']);
}




  reset() {
// this.message.firstName = null;
// this.message.lastName =null;
// this.message.email =null;
// this.message.description =null;

  }


  
  // save(...args: boolean[]) {
  //   this.formSubmitted = true;
  //     this.isBusy = true
  //     this.messageServices.create().subscribe(res => {
  //       this.isBusy = false
  //       this.swalService.Notifier('Message Send success   ');

  //       this.formSubmitted = false;
  //       this.reset();
       
  //     }, err => {
  //       this.isBusy = false
  //       let errorMessage = err.data || ' Error Sending Message  ';
  //       this.swalService.NotifierError(errorMessage)

      

  //     })
  //   } 
}
