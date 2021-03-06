import images from './images';

const burgers = [
  {
    title: 'Portal',
    price: '$11.500',
    tags: '150 gr de carne artesanal, queso, tocineta, lechuga, tomate',
    comboPrice: '$16.000',
  },
  {
    title: 'Portazo',
    price: '$19.000',
    tags: 'Dos carnes de 150 gr de carne artesanal, doble queso, tocineta, lechuga, tomate',
    comboPrice: '$23.000',
  },
  {
    title: 'Pollo',
    price: '$11.500',
    tags: 'Filete de pollo, queso, tocineta, lechuga, tomate, cebolla',
    comboPrice: '$16.000',
  },
  {
    title: 'Ranchera',
    price: '$15.000',
    tags: '150 gr de carne artesanal, salchicha ranchera en salsa BB, queso, tocineta, lechuga, tomate',
    comboPrice: '$19.000',
  },
  {
    title: 'Queso',
    price: '$12.000',
    tags: '150 gr de carne artesanal, triple queso, tocineta',
    comboPrice: '$16.500',
  },
  {
    title: 'Junior',
    price: '$9.000',
    tags: '100 gr de carne artesanal, queso, tocineta, lechuga, tomate',
    comboPrice: '$14.000',
  },
  {
    title: 'Norteña',
    price: '$15.500',
    tags: '120 gr de carne desmechada con picante y frijol sofritot, tocineta, queso, aros de cebolla, pepino agridulces',
    comboPrice: '$19.500',
  },
  {
    title: 'ArepaBurger',
    price: '$11.500',
    tags: '150 gr de carne artesanal, queso, tocineta, lechuga, tomate',
    comboPrice: '$16.000',
  },
];

const sandwich = [
  {
    title: 'Pollo',
    price: '$8.500',
    tags: 'Pechuga a la plancha, pan, queso, lechuga,tomate, salsa de ajo',
    comboPrice: '$12.500',
  },
  {
    title: 'Jamon',
    price: '$7.500',
    tags: 'Jamon, pan, queso, lechuga,tomate, salsa de ajo Portal',
    comboPrice: '$11.500',
  },
  {
    title: 'Norteño',
    price: '$9.500',
    tags: 'Carne desmechada con frijol sofrito algo picante, pan, queso, lechuga,tomate, salsa de ajo Portal',
    comboPrice: '$13.500',
  },
];
const perros = [
  {
    title: 'Perro Portal',
    price: '$9.500',
    tags: 'Salchicha Zenu tipo americano, tocineta, pan bimbo, doble queso, cebolla, papa fosforito, salsa tartara Portal',
    comboPrice: '$14.000',
  },
  {
    title: 'Perra Portal',
    price: '$10.500',
    tags: 'Tocineta, pan bimbo, doble queso, cebolla, papa fosforito, salsa tartara Portal',
    comboPrice: '$14.500',
  },
  {
    title: 'Perro Norteño',
    price: '$12.000',
    tags: 'Carne desmechada con frijol sofrito algo picante, pan, queso, lechuga,tomate, salsa tartara Portal',
    comboPrice: '$16.500',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { burgers, sandwich, perros, awards };
