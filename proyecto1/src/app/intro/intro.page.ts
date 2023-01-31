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
      img: "../assets/logo1.jpg",
      description: "Bienvenido al desconocido mundo de la lectura"
    },
    {
      title: "Libreria dCamilo",
      desc: "libro uno",
      subtitle: "libros y mas libros",
      img: "../assets/libro1.jpg",
      description: "Mitnick fue el hacker más escurridizo de la historia. Logró colarse en ordenadores y redes de las agencias y compañías más grandes del mundo."
    },
    {
      title: "Libreria dCamilo",
      desc: "libro dos",
      subtitle: "libros y mas libros",
      img: "../assets/libro2.jpg",
      description: "Todos tenemos una manera distinta de enfrentar nuestras perdidas y aprender de ellas, considero que es el paso final para continuar en este viaje por la vida."
    },
    {
      title: "Libreria dCamilo",
      desc: "libro tres",
      subtitle: "libros y mas libros",
      img: "../assets/libro3.png",
      description: "El arte de la guerra es un libro sobre tácticas y estrategias militares, escrito por Sun Tzu, un famoso estratega militar chino. Se trata de un antiguo tratado militar chino que data del final del periodo de las primaveras y otoños."
    },
    {
      title: "Libreria dCamilo",
      desc: "libro cuatro",
      subtitle: "libros y mas libros",
      img: "../assets/libro4.jpg",
      description: "Esta esclarecedora obra ilustrada nos ofrece una historia del universo del Big Bang a los agujeros negros."
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
