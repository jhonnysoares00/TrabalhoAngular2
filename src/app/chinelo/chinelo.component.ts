import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chinelo',
  templateUrl: './chinelo.component.html',
  styleUrls: ['./chinelo.component.css']
})
export class ChineloComponent implements OnInit {
  ChineloIndependente = [

    {nome: 'Chinelo Preto1',
    imagem: 'assets/chinelo/Chinelo preto1.jpg',
    tamanho: 'G Adulto',
    valor: 'R$ 50,00'
    },
    {nome: 'Chinelo Branco1',
    imagem: 'assets/chinelo/Chinelo branco1.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 70,00'
    },
    {nome: 'Chinelo Preto2',
    imagem: 'assets/chinelo/Chinelo preto2.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 50,00'
    },
    {nome: 'Chinelo Branco2',
    imagem: 'assets/chinelo/Chinelo Branco2.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 59,00'
    },
    {nome: 'Chinelo Preto3',
    imagem: 'assets/chinelo/Chinelo preto3.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 79,00'
    },
    {nome: 'Chinelo Branco3',
    imagem: 'assets/chinelo/Chinelo Branco3.jpg',
    tamanho: 'P Atuldo',
    valor: 'R$ 89,00'
    },
    {nome: 'Chinelo Preto4',
    imagem: 'assets/chinelo/Chinelo preto4.jpg',
    tamanho: 'P Atuldo',
    valor: 'R$ 99,00'
    },
    {nome: 'Chinelo Branco4',
    imagem: 'assets/chinelo/Chinelo branco4.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 49,00'
    },
    {nome: 'Chinelo Preto5',
    imagem: 'assets/chinelo/Chinelo preto5.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 100,00'
    },
    {nome: 'Chinelo Branco5',
    imagem: 'assets/chinelo/Chinelo branco5.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 70,00'
    }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
