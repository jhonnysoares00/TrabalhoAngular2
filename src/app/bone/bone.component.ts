import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bone',
  templateUrl: './bone.component.html',
  styleUrls: ['./bone.component.css']
})
export class BoneComponent implements OnInit {
  boneIndependente = [
    {nome: 'Bone 1972',
   imagem: 'assets/bone/Bone 1972.jpg',
   tamanho: 'G Adulto',
   valor: 'R$ 50,00'
   },
   
   {nome: 'Bone Boxeador',
   imagem: 'assets/bone/Bone Boxeador.jpg',
   tamanho: 'G Atuldo',
   valor: 'R$ 70,00'
   },
   {nome: 'Bone Face Vovo',
   imagem: 'assets/bone/Bone Face Vovo.jpg',
   tamanho: 'M Atuldo',
   valor: 'R$ 50,00'
   },
   {nome: 'Bone Os Caras',
   imagem: 'assets/bone/Bone Os Caras.jpg',
   tamanho: 'G Atuldo',
   valor: 'R$ 59,00'
   },
   {nome: 'Bone Patch Trio',
   imagem: 'assets/bone/Bone Patch Trio.jpg',
   tamanho: 'M Atuldo',
   valor: 'R$ 79,00'
   },
   {nome: 'Bone Pode Vir Todo Mundo',
   imagem: 'assets/bone/Bone Pode Vir Todo Mundo.jpg',
   tamanho: 'P Atuldo',
   valor: 'R$ 89,00'
   },
   {nome: 'Bone Punho Fechado',
   imagem: 'assets/bone/Bone Punho Fechado.jpg',
   tamanho: 'P Atuldo',
   valor: 'R$ 99,00'
   },
   {nome: 'Bone Respeito que Impomos',
   imagem: 'assets/bone/Bone Respeito que Impomos.jpg',
   tamanho: 'G Atuldo',
   valor: 'R$ 49,00'
   },
   {nome: 'Bone só os Fortes Sobrevivem',
   imagem: 'assets/bone/Bone só os Fortes Sobrevivem.jpg',
   tamanho: 'M Atuldo',
   valor: 'R$ 100,00'
   },
   {nome: 'Bone Vovo Tradicional',
   imagem: 'assets/bone/Bone Vovo Tradicional.jpg',
   tamanho: 'G Atuldo',
   valor: 'R$ 70,00'
   }
   ]
  constructor() { }

  ngOnInit(): void {
  }

}
