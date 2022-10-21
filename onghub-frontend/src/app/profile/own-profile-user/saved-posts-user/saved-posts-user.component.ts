import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saved-posts-user',
  templateUrl: './saved-posts-user.component.html',
  styleUrls: ['./saved-posts-user.component.scss'],
})
export class SavedPostsUserComponent implements OnInit {
  private post: Object;
  constructor() {}

  ngOnInit() {
    this.post = {
      title: 'Deforestación en el amazonas',
      authorNgo: {
        name: 'Manos Unidas',
      },
      description:
        'Los últimos cincuenta años han supuesto un coste de deforestación nunca antes visto en la historia de la humanidad, arrasando un 15% de la superficie mundial de vegetación equivalente al territorio de España, Portugal y Francia. Ahora, un nuevo estudio alerta sobre la pérdida de 4.567 kilómetros cuadrados de la selva del Amazonas en los últimos diez meses: un 54 % más que el período anterior.',
      likes: 10,
      ODS: ['vida de ecosistemas terrestres'],
    };
  }
}
