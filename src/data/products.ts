import IProduct from '../__types__/IProduct';
import EUnits from '../__types__/EUnits';
import ECategories from '../__types__/ECategories';

import Cabbage from '../img/products/cabbage.webp';
import Pepper from '../img/products/peppers.webp';
import Potatoes from '../img/products/potatoes.webp';
import Onions from '../img/products/onions.webp';
import GreenBean from '../img/products/greenBeans.webp';
import Apples from '../img/products/apples.jpg';
import Cauliflower from '../img/products/cauliflower.jpg';
import Cucumbers from '../img/products/cucumbers.jpg';
import Grapes from '../img/products/grapes.jpg';
import Oranges from '../img/products/oranges.jpg';
import Pears from '../img/products/pear.jpg';
import Pumpkin from '../img/products/pumpkin.webp';
import Radish from '../img/products/radish.jpg';
import Salad from '../img/products/salad.webp';
import Tomatoes from '../img/products/tomatoes.webp';
import Banana from '../img/products/banana.webp';
import Beetruit from '../img/products/beetruits.webp';
import Pomegranate from '../img/products/pomegranate.jpg';
import Corn from '../img/products/corn.jpg';
import Asparagus from '../img/products/asparagus.webp';
import Basil from '../img/products/basil.webp';
import BroadBean from '../img/products/broadBean.webp';
import Broccoli from '../img/products/broccoli.jpg';
import Garlic from '../img/products/garlic.webp';
import Lemon from '../img/products/lemon.webp';
import Eggplant from '../img/products/eggplant.webp';
import Parsley from '../img/products/parsley.webp';
import Zucchini from '../img/products/zucchini.webp';
import Watermelon from '../img/products/watermelon.webp';

export const Products: IProduct[] = [
  {
    name: 'Kapusta',
    img: Cabbage,
    category: ECategories.VEGS,
    price: 1.50,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Papryka',
    category: ECategories.VEGS,
    img: Pepper,
    price: 8,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Ziemniaki',
    category: ECategories.VEGS,
    img: Potatoes,
    price: 1.20,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Zielona fasolka',
    category: ECategories.VEGS,
    img: GreenBean,
    price: 3,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Cebula',
    category: ECategories.VEGS,
    img: Onions,
    price: 2.2,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Jabłka',
    category: ECategories.FRUITS,
    img: Apples,
    price: 3,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Kalafior',
    category: ECategories.VEGS,
    img: Cauliflower,
    price: 2,
    unit: EUnits.PIECE,
  },
  {
    name: 'Ogórki',
    category: ECategories.VEGS,
    img: Cucumbers,
    price: 2.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Winogrona',
    category: ECategories.FRUITS,
    img: Grapes,
    price: 5.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Pomarańcze',
    category: ECategories.FRUITS,
    img: Oranges,
    price: 3.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Gruszki',
    category: ECategories.FRUITS,
    img: Pears,
    price: 3.8,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Dynie',
    category: ECategories.VEGS,
    img: Pumpkin,
    price: 1.9,
    unit: EUnits.PIECE,
  },
  {
    name: 'Rzodkiew',
    category: ECategories.VEGS,
    img: Radish,
    price: 4.2,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Sałata',
    category: ECategories.VEGS,
    img: Salad,
    price: 2,
    unit: EUnits.PIECE,
  },
  {
    name: 'Pomidory',
    category: ECategories.VEGS,
    img: Tomatoes,
    price: 4.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Kukurydza',
    category: ECategories.VEGS,
    img: Corn,
    price: 2.5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Banany',
    category: ECategories.FRUITS,
    img: Banana,
    price: 4.2,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Buraki',
    category: ECategories.VEGS,
    img: Beetruit,
    price: 3.8,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Granat',
    category: ECategories.FRUITS,
    img: Pomegranate,
    price: 8,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Szparagi',
    category: ECategories.VEGS,
    img: Asparagus,
    price: 4.2,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Bazylia',
    category: ECategories.WEEDS,
    img: Basil,
    price: 2.2,
    unit: EUnits.PIECE,
  },
  {
    name: 'Fasola',
    category: ECategories.VEGS,
    img: BroadBean,
    price: 3.4,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Brokuł',
    category: ECategories.VEGS,
    img: Broccoli,
    price: 6,
    unit: EUnits.PIECE,
  },
  {
    name: 'Czosnek',
    category: ECategories.VEGS,
    img: Garlic,
    price: .8,
    unit: EUnits.PIECE,
  },
  {
    name: 'Cytryna',
    category: ECategories.FRUITS,
    img: Lemon,
    price: .75,
    unit: EUnits.PIECE,
  },
  {
    name: 'Bakłażan',
    category: ECategories.VEGS,
    img: Eggplant,
    price: 1.3,
    unit: EUnits.PIECE,
  },
  {
    name: 'Pietruszka',
    category: ECategories.WEEDS,
    img: Parsley,
    price: .8,
    unit: EUnits.PIECE,
  },
  {
    name: 'Cukinia',
    category: ECategories.VEGS,
    img: Zucchini,
    price: 4.4,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Arbuz',
    category: ECategories.FRUITS,
    img: Watermelon,
    price: 6.5,
    unit: EUnits.KILOGRAMS,
  },
];