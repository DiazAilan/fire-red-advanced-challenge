import { Component } from '@angular/core';

class Option {
    icon: string;
    title: string;
    path: string;
}

@Component({
  selector: 'home-page',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    public options = [{
        icon: 'cloud_download',
        title: 'Descargar',
        path: 'http://download37.mediafire.com/3tcu2fghn3gg/188or8tpklvxqpd/Pokemon+Fire+Red+Advanced+Challenge.rar'
    }, {
        icon: 'help',
        title: 'Preguntas Frecuentes',
        path: '/FAQ'
    }]
}
