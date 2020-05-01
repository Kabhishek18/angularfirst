import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  gallery:any;
	
  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.gallery = this.getData();
  }

  getData(){
  	return this.config.getConfig().gallery;
  }

}
