import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/shared/models';
import { SwalService } from 'src/app/shared/services';
import { MessageService } from '../../shared/services/api';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
 
  message: Message = new Message();

  isBusy: boolean = false

  busySaving: boolean = false;
  formSubmitted: boolean = false;



   isEdit: boolean = false;
   language: string;
   myStyles={};
   ar: boolean;

   constructor(  private messageServices: MessageService,
   private swalService: SwalService,
  ) { }

  ngOnInit() {
    this.message = new Message();
    
     this.language = localStorage.getItem('lang')
     if (this.language === 'ar') {
       this.ar= true;
      this.myStyles = {
        'font-family': 'Arabic',
        }  

    } else {
      this.ar= false;

      this.myStyles = {
        'font-family': 'NoirStd',
        }    

    }

    }

    // save message 
      save( ) {
        this.messageServices.create(this.message).subscribe(
          res => {
            this.swalService.Notifier('Done ');
             this.reset();
          },
          err => {
            const errorMessage = ' Saving Erroe   ';
            this.swalService.NotifierError(errorMessage)
    
          }
        )
      }

  // reset field
  reset() {
    this.message.firstName = '';
    this.message.lastName = '';
    this.message.email = '';
    this.message.message = '';
  }
 
  }

