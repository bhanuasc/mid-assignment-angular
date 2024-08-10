import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";
 
@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {
  resources = [
    {
      id: 1,
      title: 'Inception',
      description: 'A skilled thief is given a chance at redemption if he can successfully perform inception.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    },
    {
      id: 2,
      title: 'The Matrix',
      description: 'A computer hacker learns about the true nature of reality and his role in the war against its controllers.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    },
    {
      id: 3,
      title: 'The Dark Knight',
      description: 'Batman faces his most dangerous adversary yet: the Joker, a criminal mastermind bent on chaos.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    },
    {
      id: 4,
      title: 'Interstellar',
      description: 'A team of explorers travels through a wormhole in space in an attempt to ensure humanity\'s survival.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    },
    {
      id: 5,
      title: 'The Shawshank Redemption',
      description: 'The story of a man sentenced  unlikely friendship and seeks redemption.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    },
    {
      id: 6,
      title: 'Fight Club',
      description: 'An insomniac office worker and a soap salesman build a global organization to help vent male aggression.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    },
    {
      id: 7,
      title: 'Pulp Fiction',
      description: 'The lives of two mob hitmen, a boxer, a  bandits intertwine in four tales of violence and redemption.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    },
    {
      id: 8,
      title: 'Forrest Gump',
      description: 'The presidencies of Kennedy and Johnson, the events of Vietn from the perspective of an Alabama man with a low IQ.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    },
    {
      id: 9,
      title: 'Gladiator',
      description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family m into slavery.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    },
    {
      id: 10,
      title: 'The Godfather',
      description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    },
    {
      id: 11,
      title: 'Jurassic Park',
      description: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    },
    {
      id: 12,
      title: 'Avatar',
      description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes tord he feels is his home.',
      imageUrl: 'https://t3.ftcdn.net/jpg/01/67/91/72/360_F_167917256_66v0N9dBWpatv3KY3biYET8spHe0xtIt.jpg'
    }
  ]
  
}