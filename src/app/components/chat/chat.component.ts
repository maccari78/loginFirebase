import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mostrarChat = false;
  usuarioLogeado: any;
  nuevoMensaje: string = "";
  mensajes: any = [
    {
      emisor: "dV9RFO7zsAR0noxax0pdRTxbQdR2",
      texto: "Hola, que tal?"
    },
    {
      emisor: "VBsOYVi5l2aqvChh0CczK34v37k2",
      texto: "Todo bien y vos?"
    },
    {
      emisor: "dV9RFO7zsAR0noxax0pdRTxbQdR2",
      texto: "Todo perfecto"
    },
    {
      emisor: "id",
      texto: "Hola gente!!!"
    },
    {
      emisor: "id",
      texto: "Que onda?"
    },
    {
      emisor: "dV9RFO7zsAR0noxax0pdRTxbQdR2",
      texto: "Nada, aca recien arrancamos"
    },
  ];

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getUserLogged().subscribe(usuario => {
      this.usuarioLogeado = usuario;
    });
  }

  enviarMensaje() {

    if(this.nuevoMensaje=="") return;
    
    console.log(this.nuevoMensaje);
    let mensaje = {
      emisor: this.usuarioLogeado.uid,
      texto: this.nuevoMensaje
    }
    this.mensajes.push(mensaje);

    this.nuevoMensaje = "";

    setTimeout(() => {
      this.scrollToTheLastElementByClassName();
    }, 30);
    
  }

  scrollToTheLastElementByClassName() {
    let elements = document.getElementsByClassName('msj');
    let ultimo: any = elements[elements.length - 1];
    let toppos = ultimo.offsetTop;

    // @ts-ignore
    document.getElementById('contenedorDeMensajes')?.scrollTop=toppos;
  }

}
