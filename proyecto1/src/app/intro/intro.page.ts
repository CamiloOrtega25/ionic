import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpt = {
    initialSlide: 1, //slide inicial (primero) [0,1,2,3]
    slidesPerView: 1, //configuramos un slide por vista
    centerSlides: true, //que las slides enten centradas
    speed: 400 //velocidad movimiento de los slides
  }

  slides = [
    {
      title: "Libreria dCamilo",
      desc: "Libros para leer",
      subtitle: "libros y mas libros",
      img: "../assets/imagen.png",
      description: "Vienvenido al desconocido mundo de la lectura"
    },
    {
      title: "Libreria dCamilo",
      desc: "libro uno",
      subtitle: "libros y mas libros",
      img: "../assets/libro1.jpg",
      description: "La Historia definitiva de la vida y el legado"
    },
    {
      title: "Libreria dCamilo",
      desc: "libro dos",
      subtitle: "libros y mas libros",
      img: "../assets/libro2.jpg",
      description: "La Historia definitiva de la vida y el legado."
    },
    {
      title: "Libreria dCamilo",
      desc: "libro tres",
      subtitle: "libros y mas libros",
      img: "../assets/libro3.png",
      description: "La Historia definitiva de la vida y el legado."
    },
    {
      title: "Libreria dCamilo",
      desc: "libro cuatro",
      subtitle: "libros y mas libros",
      img: "../assets/libro4.jpg",
      description: "La Historia definitiva de la vida y el legado."
    },
    
  ]

  constructor(private router: Router, private storage: Storage) { 
  }

  finish(){
    this.storage.set("isIntroShowed", true);
    this.router.navigateByUrl("/home");
  }
  ngOnInit() {
  }

}
