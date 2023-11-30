import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoModel } from 'src/app/models/video.model';

let apiLoaded = false;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  videos: VideoModel[] = [
    {
      id: 1,
      nombre: 'Video 1',
      descripcion: 'Descripción video 1',
      url_video:
        'https://www.youtube.com/watch?v=gAJY80FSFzM&pp=ygUFb3BldGg%3D',
      cant_likes: 0,
      cant_dislikes: 0,
      created_at: '',
      comentarios: [],
    },
    {
      id: 2,
      nombre: 'Video 2',
      descripcion: 'Descripción video 2',
      url_video:
        'https://www.youtube.com/watch?v=gAJY80FSFzM&pp=ygUFb3BldGg%3D',
      cant_likes: 0,
      cant_dislikes: 0,
      created_at: '',
      comentarios: [],
    },
    {
      id: 3,
      nombre: 'Video 3',
      descripcion: 'Descripción video 3',
      url_video:
        'https://www.youtube.com/watch?v=gAJY80FSFzM&pp=ygUFb3BldGg%3D',
      cant_likes: 0,
      cant_dislikes: 0,
      created_at: '',
      comentarios: [],
    },
    {
      id: 4,
      nombre: 'Video 4',
      descripcion: 'Descripción video 4',
      url_video:
        'https://www.youtube.com/watch?v=gAJY80FSFzM&pp=ygUFb3BldGg%3D',
      cant_likes: 0,
      cant_dislikes: 0,
      created_at: '',
      comentarios: [],
    },
    {
      id: 5,
      nombre: 'Video 5',
      descripcion: 'Descripción video 5',
      url_video:
        'https://www.youtube.com/watch?v=gAJY80FSFzM&pp=ygUFb3BldGg%3D',
      cant_likes: 0,
      cant_dislikes: 0,
      created_at: '',
      comentarios: [],
    },
  ];

  // private apiLoaded = false;

  @Input() videoId: string = 'ENJumhoaW2s';

  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    /*
    if (!apiLoaded) {
      // This code loads the IFrame Player API code asynchronously, according to the instructions at
      // https://developers.google.com/youtube/iframe_api_reference#Getting_Started
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      apiLoaded = true;
    }
    */

    this.videos.forEach((video) => {
      if (video.url_video) {
        /*
        video.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/ENJumhoaW2s?showinfo=0&enablejsapi=1&origin=http://127.0.0.1:4201'
        );
        */

        video.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          'https://www.youtube.com/embed/ENJumhoaW2s?showinfo=0&enablejsapi=1&origin=http://127.0.0.1:4201'
        );

        console.log("video.iframeUrl: ", video.iframeUrl);
      }
    });
  }
}
