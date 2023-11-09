import NavBarList from './components/Navbar';
import CardList from './components/Card List';
import HeroList from './components/Hero';
import GalleryList from './components/Gallery';
import FooterList from './components/Footer';
import ContactList from './components/Contact US';
import TeamList from './components/Teams';

const BLOCK_DATA = [
  {
    type: 'Navbar',
    list: NavBarList,
  },
  {
    type: 'Hero',
    list: HeroList,
  },
  {
    type: 'Card List',
    list: CardList,
  },
  {
    type: 'Gallery',
    list: GalleryList,
  },
  {
    type: 'Footer',
    list: FooterList,
  },
  {
    type: 'Contact US',
    list: ContactList,
  },
  {
    type: 'Teams',
    list: TeamList,
  },
];

export default BLOCK_DATA;
