import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calca',
  templateUrl: './calca.component.html',
  styleUrls: ['./calca.component.css']
})
export class CalcaComponent implements OnInit {
  CalcaIndependente = [
   {nome: 'Calca Tradicional',
   imagem: 'assets/calça/Calca Tradicional.jpg',
   tamanho: 'G Adulto',
   valor: 'R$ 50,00'
   },
   {nome: 'Calca Preta Tradicional',
   imagem: 'assets/calça/Calca Preta Tradicional.jpg',
   tamanho: 'G Atuldo',
   valor: 'R$ 70,00'
   },
   {nome: 'Calca Bordada Letra',
   imagem: 'assets/calça/Calca Bordada Letra.jpg',
   tamanho: 'M Atuldo',
   valor: 'R$ 50,00'
   },
   {nome: 'Calca Branca',
   imagem: 'assets/calça/Calca Branca.jpg',
   tamanho: 'G Atuldo',
   valor: 'R$ 59,00'
   },
   {nome: 'Calca feminina Preta',
   imagem: 'assets/calça/Calca feminina Preta.jpg',
   tamanho: 'M Atuldo',
   valor: 'R$ 79,00'
   },
   {nome: 'Calca Feminina Tradicional ',
   imagem: 'assets/calça/Calca Feminina Tradicional.jpg',
   tamanho: 'P Atuldo',
   valor: 'R$ 89,00'
   },
   {nome: 'Calca preta detalhes',
   imagem: 'assets/calça/Calca preta detalhes.jpg',
   tamanho: 'P Atuldo',
   valor: 'R$ 99,00'
   },
   {nome: 'Calca Bordada Detalhes',
   imagem: 'assets/calça/Calca Bordada Detalhes.jpg',
   tamanho: 'G Atuldo',
   valor: 'R$ 49,00'
   },
   {nome: 'Calca Branca Detalhes ',
   imagem: 'assets/calça/Calca Branca Detalhes.jpg',
   tamanho: 'M Atuldo',
   valor: 'R$ 100,00'
   },
   {nome: 'Preta Detalhes',
   imagem: 'assets/calça/Preta Detalhes.jpg',
   tamanho: 'G Atuldo',
   valor: 'R$ 70,00'
   }
   ]

  constructor() { }

  ngOnInit(): void {
  }

}
