import { Component, OnInit } from '@angular/core';
import { ImagesService } from '../images.service';
@Component({
  selector: 'app-imagelisting',
  templateUrl: './imagelisting.component.html',
  styleUrls: ['./imagelisting.component.css']
})
export class ImagelistingComponent implements OnInit {
  photos=[];
  constructor(private myservice: ImagesService) { }

  ngOnInit() {
    this.myservice.sendGetRequestPhoto().subscribe((data: any[])=>{

      //console.log(data);
      for(var i=0;i<data.length;i++)
      {
        this.photos[i] = data[i];
      }
      

  });
  }

}
