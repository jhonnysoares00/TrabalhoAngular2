import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-touca',
  templateUrl: './touca.component.html',
  styleUrls: ['./touca.component.css']
})
export class ToucaComponent implements OnInit {
  ToucaIndependente = [

    {nome: 'Touca inde',
    imagem: 'assets/touca/Touca inde.jpg',
    tamanho: 'M Adulto',
    valor: 'R$ 50,00'
    },
    {nome: 'Touca Patch',
    imagem: 'assets/touca/Touca Patch.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 70,00'
    },
    {nome: 'Touca Punho Fechado',
    imagem: 'assets/touca/Touca Punho Fechado.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 50,00'
    },
    {nome: 'Touca So os Fortes',
    imagem: 'assets/touca/Touca So os Fortes.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 59,00'
    },
    {nome: 'Touca Tradicional',
    imagem: 'assets/touca/Touca Tradicional.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 79,00'
    },
    {nome: 'Touca Vovo Tradicional',
    imagem: 'assets/touca/Touca Vovo Tradicional.jpg',
    tamanho: 'P Atuldo',
    valor: 'R$ 89,00'
    },
    {nome: 'Touca7',
    imagem: 'assets/touca/Touca7.jpg',
    tamanho: 'P Atuldo',
    valor: 'R$ 99,00'
    },
    {nome: 'Touca8',
    imagem: 'assets/touca/Touca8.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 49,00'
    },
    {nome: 'Touca9',
    imagem: 'assets/touca/Touca9.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 100,00'
    },
    {nome: 'Touca10',
    imagem: 'assets/touca/Touca10.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 70,00'
    }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
