import { Component } from '@angular/core';

@Component({
  selector: 'app-initial',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Game selector';

  selectedGame;

  games = [
    {
      gameName: 'Football',
      gameImage: 'http://images.all-free-download.com/images/graphicthumb/football_theme_picture_07_hd_pictures_168216.jpg',
      players: [
        'Ronaldo',
        'Paulo',
        'Lionel messi',
        'Zlatan',
        'Neymar'
      ]
    },
    {
      gameName: 'Cricket',
      gameImage: 'http://p.imgci.com/db/PICTURES/CMS/235800/235819.jpg',
      players: [
        'Virat',
        'Sehwag',
        'Dhoni',
        'Yuvraj',
        'Piyush'
      ]
    },
    {
      gameName: 'Basketball',
      gameImage: 'https://joburgeastexpress.co.za/wp-content/uploads/sites/34/2017/07/basketball.jpg',
      players: [
        'Stephen',
        'Lebron',
        'Kyrie',
        'Kareem',
        'Michael'
      ]
    }
  ];
}
