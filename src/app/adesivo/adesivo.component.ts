import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adesivo',
  templateUrl: './adesivo.component.html',
  styleUrls: ['./adesivo.component.css']
})
export class AdesivoComponent implements OnInit {
  AdesivoIndependente = [
    
  {nome: 'Adesivo Bombado',
  tamanho: 'G Adulto',
  valor: 'R$ 59,00',
  imagem: 'assets/adesivo/Adesivo Bombado.jpg',
  },
  
  {nome: 'Adesivo Che',
  imagem: 'assets/adesivo/Adesivo Che.jpg',
  tamanho: 'G Adulto',
  valor: 'R$ 80,00'
  },
  {nome: 'Adesivo Futebol e Samba',
  imagem: 'assets/adesivo/Adesivo Futebol e Samba.jpg',
  tamanho: 'G Adulto',
  valor: 'R$ 90,00'
  },
  {nome: 'Adesivo Punho Cruzado',
  imagem: 'assets/adesivo/Adesivo Punho Cruzado.jpg',
  tamanho: 'M Adulto',
  valor: '70,00'
  },
  {nome: 'Adesivo Torcida Inde',
  imagem: 'assets/adesivo/Adesivo Torcida Inde.jpg',
  tamanho: 'M Adulto ',
  valor: '60,00'
  },
  {nome: 'Adesivo7',
  imagem: 'assets/adesivo/Adesivo7.jpg',
  tamanho: 'G Adulto',
  valor: '55,00'
  },
  {nome: 'Adesivo8',
  imagem: 'assets/adesivo/Adesivo8.jpg',
  tamanho: 'M Adulto',
  valor: '80,00'
  },
  {nome: 'Adesivo9',
  imagem: 'assets/adesivo/Adesivo9.jpg',
  tamanho: 'M Adulto',
  valor: '72,00'
  },
  {nome: 'Adesivo10',
  imagem: 'assets/adesivo/Adesivo10.jpg',
  tamanho: 'M Adulto',
  valor: '150,00'
  },
  {nome: 'Adesivos só os fortes',
  imagem: 'assets/adesivo/Adesivos só os fortes.jpg',
  tamanho: 'G Adulto',
  valor: '70,00'
  }
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}
