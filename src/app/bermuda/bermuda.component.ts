import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bermuda',
  templateUrl: './bermuda.component.html',
  styleUrls: ['./bermuda.component.css']
})
export class BermudaComponent implements OnInit {
bermudaIndependente = [
  {nome: 'Bermuda Preta Tradicional',
tamanho: 'G Adulto',
valor: 'R$ 59,00',
imagem: 'assets/bermuda/PretaTradicional.jpg',
},

{nome: 'Bermuda Branca Tradicional',
imagem: 'assets/bermuda/BrancaTradicional.jpg',
tamanho: 'G Adulto',
valor: 'R$ 80,00'
},
{nome: 'Bermuda Futebol e Samba',
imagem: 'assets/bermuda/Futebol e Samba.jpg',
tamanho: 'G Adulto',
valor: 'R$ 90,00'
},
{nome: 'Bermuda Tricolor',
imagem: 'assets/bermuda/Bermuda Tricolor.jpg',
tamanho: 'M Adulto',
valor: '70,00'
},
{nome: 'Bermuda Quicksilver',
imagem: 'assets/bermuda/Berma Quicksilver.jpg',
tamanho: 'M Adulto ',
valor: '60,00'
},
{nome: 'Bermuda 1972 ',
imagem: 'assets/bermuda/Bermuda 1972.jpg',
tamanho: 'G Adulto',
valor: '55,00'
},
{nome: '',
imagem: 'assets/bermuda/',
tamanho: '',
valor: ''
},
{nome: '',
imagem: 'assets/bermuda/',
tamanho: '',
valor: ''
},
{nome: '',
imagem: 'assets/bermuda/',
tamanho: '',
valor: ''
},
{nome: '',
imagem: 'assets/bermuda/',
tamanho: '',
valor: ''
}
]
  constructor() { }

  ngOnInit(): void {
  }

}
