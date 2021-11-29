import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chaveiro',
  templateUrl: './chaveiro.component.html',
  styleUrls: ['./chaveiro.component.css']
})
export class ChaveiroComponent implements OnInit {
  ChaveiroIndependente = [

    {nome: 'Chaveiro1',
    imagem: 'assets/chaveiro/Chaveiro1.jpg',
    tamanho: '5 centimetros',
    valor: 'R$ 14,00'
    },
    {nome: 'Chaveiro2',
    imagem: 'assets/chaveiro/Chaveiro2.jpg',
    tamanho: '6 centimetros',
    valor: 'R$ 10,00'
    },
    {nome: 'Chaveiro3',
    imagem: 'assets/chaveiro/Chaveiro3.jpg',
    tamanho: '4 centimetros',
    valor: 'R$ 12,00'
    },
    {nome: 'Chaveiro4',
    imagem: 'assets/chaveiro/Chaveiro4.jpg',
    tamanho: '5 centimetros',
    valor: 'R$ 15,00'
    },
    {nome: 'Chaveiro5',
    imagem: 'assets/chaveiro/Chaveiro5.jpg',
    tamanho: '5 centimetros',
    valor: 'R$ 20,00'
    },
    {nome: 'Chaveiro6',
    imagem: 'assets/chaveiro/Chaveiro6.jpg',
    tamanho: '5 centimetros',
    valor: 'R$ 50,00'
    },
    {nome: 'Chaveiro7',
    imagem: 'assets/chaveiro/Chaveiro7.jpg',
    tamanho: '5 centimetros',
    valor: 'R$ 10,00'
    },
    {nome: 'Chaveiro8',
    imagem: 'assets/chaveiro/Chaveiro8.jpg',
    tamanho: '5 centimetros',
    valor: 'R$ 15,00'
    },
    {nome: 'Chaveiro9',
    imagem: 'assets/chaveiro/Chaveiro9.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 19,00'
    },
    {nome: 'Chaveiro10',
    imagem: 'assets/chaveiro/Chaveiro10.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 25,00'
    }
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
