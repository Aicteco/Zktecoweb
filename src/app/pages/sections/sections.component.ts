import { Component, OnInit } from '@angular/core';
import { Configuration, Message, Services, Whyezi } from 'src/app/shared/models';
import { SwalService } from 'src/app/shared/services';
import { ConfigurationService, MessageService, SlideservicesService, WhyService } from 'src/app/shared/services/api';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html', 
  styleUrls: ['./sections.component.css']
})
export class SectionsComponent implements OnInit {
  focus;
  focus1;


  Address: string;
  Facebook: string;
  Logo: string;
  Email: string;
  Telephone: string;
  Fax: string;
  LinkedIn: string;
  configuration: Configuration;
  content: string;
  image: string;
  close:boolean  = true;

  whyItem: Whyezi[]=[];

  images : string
  titels : string
  intro : string
  servicesItem : Services[] =[];
  message: Message = new Message();
  isBusy: boolean = false

  busySaving: boolean = false;
  formSubmitted: boolean = false;
  language: string;
  myStyles={};
  ar:boolean;

  constructor( private sliderService : SlideservicesService ,
    private messageServices: MessageService,
    private swalService: SwalService,
    private configurationServices: ConfigurationService ,
    private whyServices: WhyService

    ) { }

  ngOnInit() {
    this.message = new Message()
    // this.getSliderServices();

    this.language = localStorage.getItem('lang')
    if (this.language === 'ar') {
      this.ar = true;

      this.myStyles = {
        'font-family': 'Arabic',
      }

    } else {
      this.ar = false;

      this.myStyles = {
        'font-family': 'NoirStd',
      }

    }

    this.configurationServices.getAllConfigurationByLang(this.language).subscribe(res => {
      this.configuration = res;
      this.Address = this.configuration.data[0].value;
      this.Email = this.configuration.data[3].value;;
      this.Telephone = this.configuration.data[4].value;
      this.Facebook = this.configuration.data[1].value;
      this.LinkedIn = this.configuration.data[6].value;
      this.Fax = this.configuration.data[5].value;
      console.log(this.Fax = this.configuration.data[5].value)
    }
    )
  }


  save( ) {
    this.messageServices.create(this.message).subscribe(
      res => {
        this.swalService.Notifier('Done ');
        //  this.reset();
      },
      err => {
        const errorMessage = ' Saving Erroe   ';
        this.swalService.NotifierError(errorMessage)

      }
    )
  }





}
