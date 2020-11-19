import { Component, OnInit } from '@angular/core';
import { About, Configuration } from 'src/app/shared/models';
import { ConfigurationService, SlideservicesService } from 'src/app/shared/services/api';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.scss']
})
export class AboutusComponent implements OnInit {

  about: About[] = [];
   content: string;
   image: string;
   language: string;
   configuration: Configuration;
   myStyles={};
   ar: boolean;
  constructor( private aboutServices: SlideservicesService) { }

  ngOnInit() {
    alert('hi')

    this.aboutServices.getAll().subscribe(res => {
      console.log(res)

      this.about = res;
    })
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
  

}
