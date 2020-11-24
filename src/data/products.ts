import IProduct from '../__types__/IProduct';
import EUnits from '../__types__/EUnits';
import ECategories from '../__types__/ECategories';

import Cabbage from '../img/products/cabbage.webp';
// import Potatoes from '../img/products/potatoes.webp';
import Onions from '../img/products/onions.webp';
import GreenBean from '../img/products/greenBeans.webp';
import Apples from '../img/products/apples.jpg';
import Cauliflower from '../img/products/cauliflower.jpg';
import CucumbersPickled from '../img/products/cucumbersPickled.jpg';
import Grapes from '../img/products/grapes.jpg';
import Oranges from '../img/products/oranges.jpg';
import Pears from '../img/products/pear.jpg';
import Pumpkin from '../img/products/pumpkin.webp';
import Radish from '../img/products/radish.jpg';
// import Salad from '../img/products/salad.webp';
import Tomatoes from '../img/products/tomatoes.jpg';
import Banana from '../img/products/banana.webp';
import PepperRed from '../img/products/redPepper.jpg';
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
import AvocadoGreen from '../img/products/avocadoGreen.jpg';
import Beetruit from '../img/products/beetruits.jpg';
import Carrot from '../img/products/carrot.jpg';
import CauliflowerGreen from '../img/products/cauliflowerGreen.jpg';
import CherryHeart from '../img/products/cherryHeart.jpg';
import Chilli from '../img/products/chilliPepper.jpg';
import Cucumber from '../img/products/cucumber.jpg';
import Celery from '../img/products/celery.jpg';
import Eggs from '../img/products/eggs.jpg';
import EggsCountry from '../img/products/eggs2.jpg';
import Ginger from '../img/products/ginger.jpg';
import KhakaFruit from '../img/products/khakaFruit.jpg';
import Kiwi from '../img/products/kiwi.jpg';
import Mandarine from '../img/products/mandarine.jpg';
import Mint from '../img/products/mint.jpg';
import OnionRed from '../img/products/onionRed.jpg';
import OnionSmall from '../img/products/onionSmall.jpg';
import ParsleyRoot from '../img/products/parsleyFull.jpg';
import PotatoesGala from '../img/products/potatoesGala.jpg';
import PumpkinMuscat from '../img/products/pumpkinMuscat.jpg';
import RaspBerries from '../img/products/raspberries.jpg';
import YellowPepper from '../img/products/yellowPepper.jpg';
import Romanesco from '../img/products/romanesco.jpg';
import Rosemary from '../img/products/rozmarine.jpg';
import SweetPotato from '../img/products/sweetPotato.jpg';
import Sorell from '../img/products/sorell.jpg';
import TomatoesRaspberry from '../img/products/tomatoesRaspberry.jpg';
import Pineapple from '../img/products/pineapple.jpg';
// import BlackTurnip from '../img/products/blackTurnip.jpg';
import HungarianSalad from '../img/products/hungarianSalad.jpg';
import PickledCucumbers from '../img/products/pickledCucumber.jpg';
import Jarzynes from '../img/products/jarzynes.jpg';
import AppleGrey from '../img/products/appleGrey.jpg';
import AppleGala from '../img/products/appleGala.jpg';
import AppleRuby from '../img/products/appleRuby.jpg';
import AppleLigol from '../img/products/appleLigol.jpg';
import ApplePrince from '../img/products/applePrince.jpg';
import IcebergLettuce from '../img/products/icebergLettuce.jpg';

export const Products: IProduct[] = [
  {
    name: 'Kapusta',
    img: Cabbage,
    category: ECategories.VEGS,
    price: 3,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Papryka czerwona',
    category: ECategories.VEGS,
    img: PepperRed,
    price: 12,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Papryka żółta',
    category: ECategories.VEGS,
    img: YellowPepper,
    price: 12,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Zielona fasolka',
    category: ECategories.VEGS,
    img: GreenBean,
    price: 10,
    unit: EUnits.KILOGRAMS,
    unavaible: true,
  },
  {
    name: 'Cebula',
    category: ECategories.VEGS,
    img: Onions,
    price: 3,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Kalafior biały',
    category: ECategories.VEGS,
    img: Cauliflower,
    price: 7,
    unit: EUnits.PIECE,
  },
  {
    name: 'Ogórkek małosolny',
    category: ECategories.VEGS,
    img: CucumbersPickled,
    price: 25,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Winogrona białe',
    category: ECategories.FRUITS,
    img: Grapes,
    price: 15,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Pomarańcze',
    category: ECategories.FRUITS,
    img: Oranges,
    price: 10,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Gruszki',
    category: ECategories.FRUITS,
    img: Pears,
    price: 7,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Rzodkiew',
    category: ECategories.VEGS,
    img: Radish,
    price: 2.5,
    unit: EUnits.PIECE,
  },
  // {
  //   name: 'Sałata masłowa',
  //   category: ECategories.VEGS,
  //   img: Salad,
  //   price: 2,
  //   unit: EUnits.PIECE,
  // },
  {
    name: 'Pomidor czerwony',
    category: ECategories.VEGS,
    img: Tomatoes,
    price: 9.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Kukurydza tacka',
    category: ECategories.VEGS,
    img: Corn,
    price: 6,
    unit: EUnits.PIECE,
    unavaible: true,
  },
  {
    name: 'Banany',
    category: ECategories.FRUITS,
    img: Banana,
    price: 5.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Burak',
    category: ECategories.VEGS,
    img: Beetruit,
    price: 2.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Granat',
    category: ECategories.FRUITS,
    img: Pomegranate,
    price: 5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Szparagi 0.5 kg',
    category: ECategories.VEGS,
    img: Asparagus,
    price: 18,
    unit: EUnits.PIECE,
  },
  {
    name: 'Bazylia',
    category: ECategories.WEEDS,
    img: Basil,
    price: 5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Bób',
    category: ECategories.VEGS,
    img: BroadBean,
    price: 50,
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
    name: 'Czosnek główka',
    category: ECategories.VEGS,
    img: Garlic,
    price: 3,
    unit: EUnits.PIECE,
  },
  {
    name: 'Ogórek długi',
    category: ECategories.VEGS,
    img: Cucumber,
    price: 10.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Cytryna',
    category: ECategories.FRUITS,
    img: Lemon,
    price: 10,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Bakłażan',
    category: ECategories.VEGS,
    img: Eggplant,
    price: 12,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Natka pietruszki',
    category: ECategories.WEEDS,
    img: Parsley,
    price: 2,
    unit: EUnits.PIECE,
  },
  {
    name: 'Cukinia',
    category: ECategories.VEGS,
    img: Zucchini,
    price: 12,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Arbuz',
    category: ECategories.FRUITS,
    img: Watermelon,
    price: 10,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Awokado zielone',
    category: ECategories.FRUITS,
    img: AvocadoGreen,
    price: 5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Marchew',
    category: ECategories.VEGS,
    img: Carrot,
    price: 3.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Kalafior zielony',
    category: ECategories.VEGS,
    img: CauliflowerGreen,
    price: 8.5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Seler',
    category: ECategories.VEGS,
    img: Celery,
    price: 3.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Cherry gołębie serce',
    category: ECategories.VEGS,
    img: CherryHeart,
    price: 18,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Papryczka chilli',
    category: ECategories.VEGS,
    img: Chilli,
    price: 0.5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Jaja wiejskie 10 szt.',
    category: ECategories.ARTICLES,
    img: Eggs,
    price: 10,
    unit: EUnits.PIECE,
  },
  {
    name: 'Jaja przepiórcze 10 szt.',
    category: ECategories.ARTICLES,
    img: EggsCountry,
    price: 10,
    unit: EUnits.PIECE,
  },
  {
    name: 'Imbir',
    category: ECategories.VEGS,
    img: Ginger,
    price: 28,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Owoc khaki',
    category: ECategories.FRUITS,
    img: KhakaFruit,
    price: 5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Kiwi',
    category: ECategories.FRUITS,
    img: Kiwi,
    price: 2,
    unit: EUnits.PIECE,
  },
  {
    name: 'Mandarynka',
    category: ECategories.FRUITS,
    img: Mandarine,
    price: 8.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Mięta',
    category: ECategories.WEEDS,
    img: Mint,
    price: 5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Cebula czerwona',
    category: ECategories.VEGS,
    img: OnionRed,
    price: 4.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Cebulka',
    category: ECategories.VEGS,
    img: OnionSmall,
    price: 2.5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Korzeń pietruszki',
    category: ECategories.VEGS,
    img: ParsleyRoot,
    price: 4.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Ziemniak gala',
    category: ECategories.VEGS,
    img: PotatoesGala,
    price: 2,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Dynia muscat',
    category: ECategories.VEGS,
    img: PumpkinMuscat,
    price: 5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Romanesco',
    category: ECategories.VEGS,
    img: Romanesco,
    price: 8.5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Malina 250 g',
    category: ECategories.FRUITS,
    img: RaspBerries,
    price: 12,
    unit: EUnits.PIECE,
  },
  {
    name: 'Rozmaryn',
    category: ECategories.WEEDS,
    img: Rosemary,
    price: 8.5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Szałwia krwista',
    category: ECategories.WEEDS,
    img: Sorell,
    price: 5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Batat',
    category: ECategories.VEGS,
    img: SweetPotato,
    price: 9.5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Pomidor malinowy',
    category: ECategories.VEGS,
    img: TomatoesRaspberry,
    price: 15,
    unit: EUnits.KILOGRAMS,
  },
  // {
  //   name: 'Czarna rzepa 5kg',
  //   category: ECategories.VEGS,
  //   img: BlackTurnip,
  //   price: 10,
  //   unit: EUnits.PIECE,
  // },
  {
    name: 'Ananas premium',
    category: ECategories.FRUITS,
    img: Pineapple,
    price: 10,
    unit: EUnits.PIECE,
  },
  {
    name: 'Surówka węgierska',
    category: ECategories.SILAGE,
    img: HungarianSalad,
    price: 18,
    unit: EUnits.KILOGRAMS,
  },
  // {
  //   name: 'Jabłka odmnay',
  //   category: [ECategories.FRUITS, ECategories.APPLES],
  //   img: Apples,
  //   price: 7,
  //   unit: EUnits.KILOGRAMS,
  // },
  {
    name: 'Champion',
    category: [ECategories.FRUITS, ECategories.APPLES],
    img: Apples,
    price: 5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Mutsu',
    category: [ECategories.FRUITS, ECategories.APPLES],
    img: Apples,
    price: 5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Eliza',
    category: [ECategories.FRUITS, ECategories.APPLES],
    img: Apples,
    price: 5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Ogórek kiszony',
    category: [ECategories.SILAGE, ECategories.VEGS],
    img: PickledCucumbers,
    price: 12,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Jarzynka',
    category: ECategories.VEGS,
    img: Jarzynes,
    price: 5,
    unit: EUnits.PIECE,
  },
  {
    name: 'Jabłko gala',
    category: [ECategories.FRUITS, ECategories.APPLES],
    img: AppleGala,
    price: 5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Jabłko prince',
    category: [ECategories.FRUITS, ECategories.APPLES],
    img: ApplePrince,
    price: 5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Jabłko rubin',
    category: [ECategories.FRUITS, ECategories.APPLES],
    img: AppleRuby,
    price: 5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Szara reneta',
    category: [ECategories.FRUITS, ECategories.APPLES],
    img: AppleGrey,
    price: 7,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Jabłko ligol',
    category: [ECategories.FRUITS, ECategories.APPLES],
    img: AppleLigol,
    price: 5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Seler naciowy',
    category: ECategories.VEGS,
    img: Sorell,
    price: 7,
    unit: EUnits.PIECE,
  },
  {
    name: 'Dynia hokaido',
    category: ECategories.VEGS,
    img: Pumpkin,
    price: 5,
    unit: EUnits.KILOGRAMS,
  },
  {
    name: 'Sałata lodowa',
    category: ECategories.VEGS,
    img: IcebergLettuce,
    price: 7,
    unit: EUnits.PIECE,
  },
  {
    name: 'Por',
    category: ECategories.WEEDS,
    img: Parsley,
    price: 3,
    unit: EUnits.PIECE,
  },
  {
    name: 'Koperek',
    category: ECategories.WEEDS,
    img: Parsley,
    price: 2,
    unit: EUnits.PIECE,
  },
  {
    name: 'Awokado hass',
    category: ECategories.FRUITS,
    img: AvocadoGreen,
    price: 9.5,
    unit: EUnits.PIECE,
  },
];