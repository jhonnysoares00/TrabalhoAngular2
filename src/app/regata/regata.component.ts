import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regata',
  templateUrl: './regata.component.html',
  styleUrls: ['./regata.component.css']
})
export class RegataComponent implements OnInit {
  RegataIndependente = [

    {nome: 'Regata Bordada',
    imagem: 'assets/regata/Regata Bordada.jpg',
    tamanho: 'M Adulto',
    valor: 'R$ 50,00'
    },
    {nome: 'Regata Dono da Cidade',
    imagem: 'assets/regata/Regata Dono da Cidade.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 70,00'
    },
    {nome: 'Regata Estadio',
    imagem: 'assets/regata/Regata Estadio.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 50,00'
    },
    {nome: 'Regata Guerra',
    imagem: 'assets/regata/Regata Guerra.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 59,00'
    },
    {nome: 'Regata Linha de Frente',
    imagem: 'assets/regata/Regata Linha de Frente.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 79,00'
    },
    {nome: 'Regata Maior Tricolor',
    imagem: 'assets/regata/Regata Maior Tricolor.jpg',
    tamanho: 'P Atuldo',
    valor: 'R$ 89,00'
    },
    {nome: 'Regata Muay Thai',
    imagem: 'assets/regata/Regata Muay Thai.jpg',
    tamanho: 'P Atuldo',
    valor: 'R$ 99,00'
    },
    {nome: 'Regata Titular',
    imagem: 'assets/regata/Regata Titular.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 49,00'
    },
    {nome: 'Regata Torcida',
    imagem: 'assets/regata/Regata Torcida.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 100,00'
    },
    {nome: 'Regata Tradicional',
    imagem: 'assets/regata/Regata Tradicional.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 70,00'
    }
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
