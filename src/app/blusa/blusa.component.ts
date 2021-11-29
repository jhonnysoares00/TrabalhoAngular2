import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blusa',
  templateUrl: './blusa.component.html',
  styleUrls: ['./blusa.component.css']
})
export class BlusaComponent implements OnInit {
  blusaIndependente = [
   {nome: 'Blusa Tradicional Bordado',
  imagem: 'assets/blusa/Blusa Tradicional Bordado.jpg',
  tamanho: 'G Atuldo',
  valor: 'R$ 59,00'
  },
  
  {nome: 'Blusa Bordado Uniao Sinistra',
  imagem: 'assets/blusa/Blusa Bordado Uniao Sinistra.jpg',
  tamanho: 'G Adluto',
  valor: '200,00'
  },
  {nome: 'Blusa Bobojaco',
  imagem: 'assets/blusa/Blusa Bobojaco.jpg',
  tamanho: 'G Adulto',
  valor: '150,00'
  },
  {nome: 'Blusa Bordado Che',
  imagem: 'assets/blusa/Blusa Bordado Che.jpg',
  tamanho: 'M Adulto',
  valor: '250,00'
  },
  {nome: 'Blusa Bordado Punho Cruzado',
  imagem: 'assets/blusa/Blusa Bordado Punho Cruzado.jpg',
  tamanho: 'M Adulto',
  valor: '170,00'
  },
  {nome: 'Blusa Escudo Bombado',
  imagem: 'assets/blusa/Blusa Escudo Bombado.jpg',
  tamanho: 'G Adulto',
  valor: '145,00'
  },
  {nome: 'Blusa Futebol e Samba',
  imagem: 'assets/blusa/Blusa Futebol e Samba.jpg',
  tamanho: 'P Adulto',
  valor: '110,00'
  },
  {nome: 'Blusa Sentimentos Movidos',
  imagem: 'assets/blusa/Blusa Sentimentos Movidos.jpg',
  tamanho: 'GG Adulto',
  valor: '120,00'
  },
  {nome: 'Blusa Só os Fortes Sobrevivem',
  imagem: 'assets/blusa/Blusa Só os Fortes Sobrevivem.jpg',
  tamanho: 'P Adulto',
  valor: '140,00'
  },
  {nome: 'Blusa Vovo Bombado',
  imagem: 'assets/blusa/Blusa Vovo Bombado.jpg',
  tamanho: 'G Adulto',
  valor: '150,00'
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
