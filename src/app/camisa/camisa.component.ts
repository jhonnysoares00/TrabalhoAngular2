import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-camisa',
  templateUrl: './camisa.component.html',
  styleUrls: ['./camisa.component.css']
})
export class CamisaComponent implements OnInit {
  CamisaIndependente = [

    {nome: 'Camisa Bordada Escudo',
    imagem: 'assets/camisa/Camisa Bordada Escudo.jpg',
    tamanho: 'G Adulto',
    valor: 'R$ 50,00'
    },
    {nome: 'Camisa Dono da America',
    imagem: 'assets/camisa/Camisa Dono da America.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 70,00'
    },
    {nome: 'Camisa Dono da Cidade',
    imagem: 'assets/camisa/Camisa Dono da Cidade.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 50,00'
    },
    {nome: 'Camisa Estadio',
    imagem: 'assets/camisa/Camisa Estadio.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 59,00'
    },
    {nome: 'Camisa Ide Tradicional',
    imagem: 'assets/camisa/Camisa Ide Tradicional.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 79,00'
    },
    {nome: 'Camisa linha de frente ',
    imagem: 'assets/camisa/Camisa linha de frente.jpg',
    tamanho: 'P Atuldo',
    valor: 'R$ 89,00'
    },
    {nome: 'Camisa Respeito',
    imagem: 'assets/camisa/Camisa Respeito.jpg',
    tamanho: 'P Atuldo',
    valor: 'R$ 99,00'
    },
    {nome: 'Camisa Retro',
    imagem: 'assets/camisa/Camisa Retro.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 49,00'
    },
    {nome: 'Camisa Tradicional',
    imagem: 'assets/camisa/Camisa Tradicional.jpg',
    tamanho: 'M Atuldo',
    valor: 'R$ 100,00'
    },
    {nome: 'Camisa Vovo',
    imagem: 'assets/camisa/Camisa Vovo.jpg',
    tamanho: 'G Atuldo',
    valor: 'R$ 70,00'
    }
    ]
 
  constructor() { }

  ngOnInit(): void {
  }

}
