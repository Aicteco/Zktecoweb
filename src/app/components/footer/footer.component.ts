import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Configuration } from 'src/app/shared/models';
import { ConfigurationService } from 'src/app/shared/services/api';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
    test : Date = new Date();


 Address: string;
 Facebook: string;
 Email: string;
 Telephone: string;
 Fax: string;
 LinkedIn: string;
 image: string;
 language: string;
 content: string;
 configuration: Configuration;
 myStyles={};
 ar:boolean;

    constructor(private router: Router ,
      private configurationServices: ConfigurationService ) {}

    ngOnInit() {
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
    getPath(){
      return this.router.url;
    }
}
