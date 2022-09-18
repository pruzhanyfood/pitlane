import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const PRODUCT_NAME = [
  'Nike Air Force 1 NDESTRUKT',
  'Nike Space Hippie 04',
  'Nike Air Zoom Pegasus 37 A.I.R. Chaz Bear',
  'Nike Blazer Low 77 Vintage',
  'Nike ZoomX SuperRep Surge',
  'Zoom Freak 2',
  'Nike Air Max Zephyr',
  'Jordan Delta',
  'Air Jordan XXXV PF',
  'Nike Waffle Racer Crater',
  'Kyrie 7 EP Sisterhood',
  'Nike Air Zoom BB NXT',
  'Nike Air Force 1 07 LX',
  'Nike Air Force 1 Shadow SE',
  'Nike Air Zoom Tempo NEXT%',
  'Nike DBreak-Type',
  'Nike Air Max Up',
  'Nike Air Max 270 React ENG',
  'NikeCourt Royale',
  'Nike Air Zoom Pegasus 37 Premium',
  'Nike Air Zoom SuperRep',
  'NikeCourt Royale',
  'Nike React Art3mis',
  'Nike React Infinity Run Flyknit A.I.R. Chaz Bear',
];
const PRODUCT_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

export const goods = [
  {
      id: 'js01',
      category: 1,
      name: 'Гамбургер',
      poster: "1qGkNL5g_UaVH4AGnepQfXZLp8koDqahI",
      price: 4,
      sizePrice: [
          {
              size: 'M',
              price: 4
          },
          {
              size: 'L',
              price: 7.5
          }
      ]
  },
  {
      id: 'js02',
      category: 1,
      name: 'Чикен бургер',
      poster: "1oB5oaCz1QpB9uBlh6SAV6MOF9s0wWgYY",
      price: 5,
      sizePrice: [
          {
              size: 'M',
              price: 5
          },
          {
              size: 'L',
              price: 6
          }
      ]
  },
  {
      id: 'js03',
      category: 1,
      name: 'Чизбургер',
      poster: "1ol8YNYy_uN_Qz0eiWLLhv75Dtc_LCI2s",
      price: 4.5,
      sizePrice: [
          {
              size: 'M',
              price: 4.5
          },
          {
              size: 'L',
              price: 9
          }
      ]
  },
  {
      id: 'data01',
      category: 1,
      name: 'Фреш чикен',
      poster: "1qBM_gnx3erS47x1fm8HrBSJ5tDwd_pDk",
      price: 6,
      sizePrice: [
          {
              size: 'M',
              price: 6
          },
          {
              size: 'L',
              price: 9
          }
      ],
  },
  {
      id: 'js04',
      category: 1,
      name: 'Воппер',
      poster: "1pjHqY5GIBJkTZYHfcx1hwYG6DSsN85X2",
      price: 10,
      sizePrice: [
          {
              size: 'L',
              price: 10
          }
      ],
  },
  {
      id: 'js05',
      category: 1,
      name: 'Мексикано',
      poster: "1nqU4zc-qmU3pAsweTtpJInfsICIjA3f6",
      price: 5.5,
      sizePrice: [
          {
              size: 'M',
              price: 5.5
          },
          {
              size: 'L',
              price: 10
          }
      ]
  },
  {
      id: 'js06',
      category: 1,
      name: 'Биг Тейсти',
      poster: "1nrLQ1nOpuoDcjDd2yPvS27WbEBp0SI_z",
      price: 12,
      sizePrice: [
          {
              size: 'L',
              price: 12
          }
      ]
  },
  {
      id: 'js07',
      category: 1,
      name: 'Двойной Гамбургер',
      poster: "1nscKjtf2ZkA5rcZGk1NGGo4nBrUu4Nmu",
      price: 9,
      sizePrice: [
          {
              size: 'L',
              price: 9
          }
      ]
  },
  {
      id: 'js08',
      category: 1,
      name: 'Двойной Чизбургер',
      poster: "1ntyb5NyC7O0kQrHA-RSc4HQwhLvwzYU9",
      price: 10,
      sizePrice: [
          {
              size: 'L',
              price: 10
          }
      ]
  },
  {
      id: 'js09',
      category: 1,
      name: 'Чикенчизбургер',
      poster: "1nuiGOOPP5rgL849TapEQ8bUweGAEff8m",
      price: 7,
      sizePrice: [
          {
              size: 'M',
              price: 7
          },
          {
              size: 'L',
              price: 10
          }
      ]
  },
  {
      id: 'js010',
      category: 1,
      name: 'Пит Маффин',
      poster: "1qH4T2g5vR19_dgCjqmV5Blqt9aB_2VoI",
      price: 4.5,
      sizePrice: [
          {
              size: 'M',
              option: 1,
              price: 4.5
          },
          {
              size: 'M',
              option: 2,
              price: 5
          },
          {
              size: 'L',
              option: 1,
              price: 8
          },
          {
              size: 'L',
              option: 2,
              price: 10
          },
      ]
  },
  {
      id: 'js097',
      category: 1,
      name: 'Cэт Пит Маффин',
      poster: "1qH4T2g5vR19_dgCjqmV5Blqt9aB_2VoI",
      price: 8,
      sizePrice: [
          {
              size: 'S',
              option: 1,
              price: 8
          },
          {
              size: 'S',
              option: 2,
              price: 8.5
          },
          {
              size: 'M',
              option: 1,
              price: 14
          },
          {
              size: 'M',
              option: 2,
              price: 14
          },
      ]
  },
  {
      id: 'video01',
      category: 1,
      name: 'Чикен пармеджано',
      poster: "1o1PJiEn-e0f5SpfikyJGeM35nsTACH4t",
      price: 7,
      sizePrice: [
          {
              size: 'L',
              price: 7
          }
      ],
  },
  {
      id: 'js011',
      category: 1,
      name: 'Фишбургер от Шефа',
      poster: "1qIwqbIvxSrbqP9SRFWG5x0lMirgCdp6f",
      price: 4.5,
      sizePrice: [
          {
              size: 'L',
              price: 4.5
          }
      ]
  },
  {
      id: 'js012',
      category: 1,
      name: 'Фишбургер',
      poster: "1qMWKsWEQZnozpKpUkToJUvhsWkmM_Lo3",
      price: 5,
      sizePrice: [
          {
              size: 'L',
              price: 5
          }
      ]
  },
  {
      id: 'js013',
      category: 2,
      name: 'Донер Кебаб',
      poster: "1o4-XAB3ndFQMWGqoZKcFM8MKnuwPA8oC",
      price: 5,
      sizePrice: [
          {
              size: 'L',
              price: 5
          },
          {
              size: 'XL',
              price: 8.5
          }
      ]
  },
  {
      id: 'js014',
      category: 2,
      name: 'Ланчбокс-донер',
      poster: "1o7MrsuIDBKL1d6qwRnanmSAroGz7aYdj",
      price: 9,
      sizePrice: [
          {
              size: 'L',
              price: 9
          },
      ]
  },
  {
      id: 'js015',
      category: 2,
      name: 'Ланчбокс-шаурма',
      poster: "1oAB5pxu9bbBoroKysfBQaZDlOLatKenS",
      price: 7.5,
      sizePrice: [
          {
              size: 'L',
              price: 7.5
          },
      ]
  },
  {
      id: 'js016',
      category: 2,
      name: 'Шаурма',
      poster: "1oB1ZiODlQXk3YKrZ3k1AYpn_aZJIM-_p",
      price: 5,
      sizePrice: [
          {
              size: 'S',
              price: 5,
              name: '400гр.'
          },
          {
              size: 'L',
              price: 7,
              name: '550гр.'
          },
          {
              size: 'XL',
              price: 10,
              name: '750гр.'
          },
      ]
  },
  {
      id: 'js017',
      category: 2,
      name: 'Шаурма Грибная',
      poster: "1oB1ZiODlQXk3YKrZ3k1AYpn_aZJIM-_p",
      price: 4.5,
      sizePrice: [
          {
              size: 'S',
              price: 4.5,
          },
          {
              size: 'L',
              price: 5.5,
          },
          {
              size: 'XL',
              price: 7.5,
          },
      ]
  },
  {
      id: 'js095',
      category: 2,
      name: 'Шаурма по-кавказски',
      poster: "1oB1ZiODlQXk3YKrZ3k1AYpn_aZJIM-_p",
      price: 6,
      sizePrice: [
          {
              size: 'S',
              price: 6,
          },
          {
              size: 'L',
              price: 7,
          },
          {
              size: 'XL',
              price: 9.5,
          },
      ]
  },
  {
      id: 'js018',
      category: 2,
      name: 'Шаурма овощная',
      poster: "1oB1ZiODlQXk3YKrZ3k1AYpn_aZJIM-_p",
      price: 5.5,
      sizePrice: [
          {
              size: 'S',
              price: 5.5,
          },
          {
              size: 'L',
              price: 7,
          },
          {
              size: 'XL',
              price: 9.5,
          },
      ]
  },
  {
      id: 'js019',
      category: 2,
      name: 'Шаурма сырная',
      poster: "1oB1ZiODlQXk3YKrZ3k1AYpn_aZJIM-_p",
      price: 5.5,
      sizePrice: [
          {
              size: 'S',
              price: 5.5,
          },
          {
              size: 'L',
              price: 7,
          },
          {
              size: 'XL',
              price: 10,
          },
      ]
  },
  {
      id: 'js096',
      category: 2,
      name: 'Шаурма Эль Дъябло',
      poster: "1oB1ZiODlQXk3YKrZ3k1AYpn_aZJIM-_p",
      price: 7,
      sizePrice: [
          {
              size: 'S',
              price: 7,
          },
          {
              size: 'L',
              price: 9,
          },
          {
              size: 'XL',
              price: 11,
          },
      ]
  },
  {
      id: 'js098',
      category: 3,
      name: 'WOK',
      poster: "",
      price: 8,
      sizePrice: [
          {
              size: 'M',
              price: 8,
              option: 1,
          },
      ]
  },
  {
      id: 'js020',
      category: 6,
      name: 'Ветчина и сыр',
      poster: "1oBTjbqSYwa5vl4fIq3riChTkj22P0Rpl",
      price: 4
  },
  {
      id: 'js021',
      category: 6,
      name: 'Снежный краб',
      poster: "1oDv738Urpn0FJ9CUWly4GiBlfrcVaPY1",
      price: 4
  },
  {
      id: 'js022',
      category: 6,
      name: 'С творогом',
      poster: "1oGZQHytbWQR2MxnDmtQH6WIvY3FtGRZO",
      price: 3
  },
  {
      id: 'js023',
      category: 6,
      name: 'С шоколадной пастой',
      poster: "1oGj-o4_n-3w_m2e1eh1j6Wh-4FHGLJHJ",
      price: 3
  },
  {
      id: 'js024',
      category: 6,
      name: 'С маслом',
      poster: "1oSwP5fgn9MM0A0fKA8JsqrfR0nKhPCCW",
      price: 2.5
  },
  {
      id: 'js025',
      category: 6,
      name: 'С сыром',
      poster: "1oW3gSFJWFo1-AtUk_HSVnVt5TSa4uuvz",
      price: 3
  },
  {
      id: 'js026',
      category: 6,
      name: 'С кебабом',
      poster: "1obYtppzR0m71nNcS8Hm7OmIAe-xXxEa0",
      price: 4.5
  },
  {
      id: 'js027',
      category: 6,
      name: 'Блин во фритюре с сосиской',
      poster: "",
      price: 4
  },
  {
      id: 'js028',
      category: 6,
      name: 'от Бабушки грибной',
      poster: "",
      price: 6
  },
  {
      id: 'js029',
      category: 6,
      name: 'Блин Директорский',
      poster: "",
      price: 5
  },
  {
      id: 'js030',
      category: 6,
      name: 'Конверт сырный',
      poster: "1p1EOVO_vuuZm-vdgLvi1ICdtedESDl4I",
      price: 4
  },
  {
      id: 'js031',
      category: 6,
      name: 'Конверт свежесть',
      poster: "1p1r16cKu2NkXLSFSc-G76GAQgYdvtjLB",
      price: 3
  },
  {
      id: 'js032',
      category: 6,
      name: 'Беляш',
      poster: "",
      price: 2
  },
  {
      id: 'js033',
      category: 6,
      name: 'Панкейки (оладьи) 5шт.',
      poster: "",
      price: 3
  },
  {
      id: 'js034',
      category: 7,
      name: 'Французский',
      poster: "1p3r3_3dZkBeDFe88gl0AdpZHNiiGO3EO",
      price: 4
  },
  {
      id: 'js035',
      category: 7,
      name: 'Датский',
      poster: "1pAmZ83Mob_0cLOpmj35o0X6bzQlErAl1",
      price: 4.5
  },
  {
      id: 'js036',
      category: 7,
      name: 'Датский с кебабом',
      poster: "1pFPfkw8OcNBbZmIZv7NwTsrS-8LIgSCc",
      price: 5
  },
  {
      id: 'js037',
      category: 7,
      name: 'Фреш-дог',
      poster: "1pH6LxyRymwSvVEuieMla08BUo32Zlo7s",
      price: 5
  },
  {
      id: 'js038',
      category: 7,
      name: 'Энергопакет',
      poster: "1pI-you4NFgzLxBh5_UpxdQmZ8bWWMsaJ",
      price: 6
  },
  {
      id: 'js039',
      category: 7,
      name: 'Ланчбокс колбаски тирольские',
      poster: "1pT48vhLF7Gfo56AyQvrIm6wc475Fbnwe",
      price: 8.5
  },
  {
      id: 'js040',
      category: 7,
      name: 'Ланчбокс сардельки',
      poster: "1prRnElsbYzNv6CYVd2Wyhn3vSRLwP6AR",
      price: 7
  },
  {
      id: 'js041',
      category: 7,
      name: 'Ланчбокс колбаски гриль',
      poster: "1puQVtmejdoWYCVRU8hur9ekgy8XMFf8u",
      price: 8
  },
  {
      id: 'js042',
      category: 9,
      name: 'Греческий',
      poster: "1q48pSozbkq4iLpheiF2hnt3_qoWKSItP",
      price: 5.5
  },
  {
      id: 'js043',
      category: 9,
      name: 'Цезарь',
      poster: "1q7VEmc5B5HyieMiOV9n06IQ02uaxDPdq",
      price: 7
  },
  {
      id: 'js044',
      category: 8,
      name: 'Картошка фри',
      poster: "1qBKo0986vNNlKFSpRm4Ltj97VuosvjNW",
      price: 2.5,
      sizePrice: [
          {
              size: 'S',
              price: 2.5,
          },
          {
              size: 'M',
              price: 3,
          },
          {
              size: 'L',
              price: 4,
          },
      ]
  },
  {
      id: 'js045',
      category: 8,
      name: 'Картошка по-деревенски',
      poster: "1nFinJkLMFTAj3x8tD_-AhtQSCCRA0sRH",
      price: 3,
      sizePrice: [
          {
              size: 'M',
              price: 3,
          },
          {
              size: 'L',
              price: 4,
          },
      ]
  },
  {
      id: 'js046',
      category: 8,
      name: 'Кольца кальмара',
      poster: "1nMKcGKgDQkzeRLiCd6bqVbzO80Li5spY",
      price: 8.5,
      sizePrice: [
          {
              size: 'S',
              price: 8.5,
              name: '100',
          },
          {
              size: 'M',
              price: 13,
              name: '150',
          },
          {
              size: 'L',
              price: 17,
              name: '200',
          },
      ]
  },
  {
      id: 'js047',
      category: 8,
      name: 'Луковые кольца',
      poster: "1n_hdvSQt1EuwTsRPpk9-dpPemWi9ddCU",
      price: 3.5,
      sizePrice: [
          {
              size: 'S',
              price: 3.5,
              name: '100',
          },
          {
              size: 'M',
              price: 4.5,
              name: '150',
          },
          {
              size: 'L',
              price: 6.5,
              name: '200',
          },
      ]
  },
  {
      id: 'js048',
      category: 8,
      name: 'Сырные палочки',
      poster: "1nhS3Mc80aY7J7zxFWHGN07xxLsNbjIcd",
      price: 7.5,
      sizePrice: [
          {
              size: '6',
              price: 7.5,
              name: 'шт.',
          },
          {
              size: '9',
              price: 10.5,
              name: 'шт.',
          },
      ]
  },
  {
      id: 'js049',
      category: 8,
      name: 'Стрипсы',
      poster: "1ni4HmNNgn57EoKY9t_-FputVAxsygHN-",
      price: 8,
      sizePrice: [
          {
              size: 'S',
              price: 8,
              name: '100',
          },
          {
              size: 'M',
              price: 10.5,
              name: '150',
          },
          {
              size: 'L',
              price: 13,
              name: '200',
          },
      ]
  },
  {
      id: 'js050',
      category: 8,
      name: 'Наггетсы',
      poster: "",
      price: 5,
      sizePrice: [
          {
              size: '6',
              price: 5,
              name: 'шт.',
          },
          {
              size: '9',
              price: 6,
              name: 'шт.',
          },
          {
              size: '12',
              price: 7,
              name: 'шт.',
          },
      ]
  },
  {
      id: 'js051',
      category: 8,
      name: 'Рыбные палочки',
      poster: "",
      price: 3.5,
      sizePrice: [
          {
              size: '4',
              price: 3.5,
              name: 'шт.',
          },
          {
              size: '6',
              price: 5,
              name: 'шт.',
          },
          {
              size: '8',
              price: 6,
              name: 'шт.',
          },
      ]
  },
  {
      id: 'js052',
      category: 8,
      name: 'Креветки в панировке',
      poster: "",
      price: 8.5,
      sizePrice: [
          {
              size: 'S',
              price: 8.5,
              name: '100',
          },
          {
              size: 'M',
              price: 13,
              name: '150',
          },
          {
              size: 'L',
              price: 16.5,
              name: '200',
          },
      ]
  },
  {
      id: 'js053',
      category: 8,
      name: 'Крылышки острые',
      poster: "",
      price: 8,
      sizePrice: [
          {
              size: 'S',
              price: 8,
              name: '150',
          },
          {
              size: 'M',
              price: 12,
              name: '300',
          },
          {
              size: 'L',
              price: 18,
              name: '450',
          },
      ]
  },
  {
      id: 'js054',
      category: 8,
      name: 'Гренки',
      poster: "",
      price: 2.5,
      sizePrice: [
          {
              size: 'L',
              price: 2.5,
          },
          {
              size: 'XL',
              price: 4.5,
          },
      ]
  },
  {
      id: 'js055',
      category: 8,
      name: 'Ланчбокс колбаски гриль',
      poster: "",
      price: 8,
  },
  {
      id: 'js056',
      category: 8,
      name: 'Пельмени фри (курица)',
      poster: "",
      price: 4,
  },
  {
      id: 'js057',
      category: 8,
      name: 'Пельмени фри (картошка и грибы)',
      poster: "",
      price: 3.5,
  },
  {
      id: 'js058',
      category: 8,
      name: 'Оладья картофельная',
      poster: "",
      price: 1.3,
  },
  {
      id: 'js059',
      category: 8,
      name: 'Ланчбокс драник',
      poster: "",
      price: 4.8,
  },
  {
      id: 'js060',
      category: 8,
      name: 'Хлеб пшеничный Рамадан пидэ',
      poster: "",
      price: 2,
      sizePrice: [
          {
              size: 'Половина',
              price: 2
          },
          {
              size: 'Целый',
              price: 3,
          },
      ]
  },
  {
      id: 'js061',
      category: 4,
      name: 'На двоих',
      poster: "",
      price: 15,
  },
  {
      id: 'js062',
      category: 4,
      name: 'Детский',
      poster: "",
      price: 9,
  },
  {
      id: 'js063',
      category: 4,
      name: 'Студенческий',
      poster: "",
      price: 7.5,
  },
  {
      id: 'js064',
      category: 4,
      name: 'Для компании',
      poster: "",
      price: 19,
      sizePrice: [
          {
              size: 'L',
              price: 19,
          },
          {
              size: 'XL',
              price: 24,
          },
      ]
  },
  {
      id: 'js065',
      category: 4,
      name: 'Морской',
      poster: "",
      price: 17,
      sizePrice: [
          {
              size: 'S',
              price: 17,
          },
          {
              size: 'L',
              price: 25,
          },
          {
              size: 'XL',
              price: 33,
          },
      ]
  },
  {
      id: 'js066',
      category: 4,
      name: 'Обеденный',
      poster: "",
      price: 6.5,
      sizePrice: [
          {
              size: 'L',
              price: 6.5,
          },
          {
              size: 'XL',
              price: 11,
          },
      ]
  },
  {
      id: 'js067',
      category: 4,
      name: 'К пиву',
      poster: "",
      price: 12.9,
      sizePrice: [
          {
              size: 'L',
              price: 12.9,
          },
          {
              size: 'XL',
              price: 18.9,
          },
      ]
  },
  {
      id: 'js068',
      category: 12,
      name: 'Милкшейк',
      poster: "",
      price: 3,
      sizePrice: [
          {
              size: '250',
              price: 3,
          },
          {
              size: '500',
              price: 5.5,
          },
      ]
  },
  {
      id: 'js069',
      category: 12,
      name: 'Молочный коктейль СССР',
      poster: "",
      price: 2.5,
      sizePrice: [
          {
              size: '250',
              price: 2.5,
          },
          {
              size: '500',
              price: 4.5,
          },
      ]
  },
  {
      id: 'js070',
      category: 11,
      name: 'Заварной кофе',
      poster: "",
      price: 1.5,
  },
  {
      id: 'js071',
      category: 11,
      name: 'Кофе 3 в 1',
      poster: "",
      price: 1,
  },
  {
      id: 'js072',
      category: 11,
      name: 'Эспрессо / со сливками',
      poster: "",
      price: 2.5,
  },
  {
      id: 'js073',
      category: 11,
      name: 'Американо',
      poster: "",
      price: 2.5,
  },
  {
      id: 'js074',
      category: 11,
      name: 'Мокачино',
      poster: "",
      price: 3,
  },
  {
      id: 'js075',
      category: 11,
      name: 'Капучино',
      poster: "",
      price: 3,
  },
  {
      id: 'js099',
      category: 11,
      name: 'Флэт уйат',
      poster: "",
      price: 3.5,
  },
  {
      id: 'js076',
      category: 11,
      name: 'Латте',
      poster: "",
      price: 3,
  },
  {
      id: 'js077',
      category: 11,
      name: 'Амаретто',
      poster: "",
      price: 2.5,
  },
  {
      id: 'js078',
      category: 11,
      name: 'Шоколад',
      poster: "",
      price: 2.5,
  },
  {
      id: 'js079',
      category: 11,
      name: 'Чай',
      poster: "",
      price: 0.8,
  },
  {
      id: 'js080',
      category: 10,
      name: 'Морковь по-корейски',
      poster: "",
      price: 0.7,
  },
  {
      id: 'js081',
      category: 10,
      name: 'Огурец свежий / маринованный',
      poster: "",
      price: 0.7,
  },
  {
      id: 'js082',
      category: 10,
      name: 'Томат',
      poster: "",
      price: 0.7,
  },
  {
      id: 'js083',
      category: 10,
      name: 'Лук маринованный',
      poster: "",
      price: 0.7,
  },
  {
      id: 'js084',
      category: 10,
      name: 'Халапеньо',
      poster: "",
      price: 0.7,
  },
  {
      id: 'js085',
      category: 10,
      name: 'Кукуруза',
      poster: "",
      price: 0.7,
  },
  {
      id: 'js086',
      category: 10,
      name: 'Опята',
      poster: "",
      price: 1,
  },
  {
      id: 'js087',
      category: 10,
      name: 'Шоколадная паста',
      poster: "",
      price: 1,
  },
  {
      id: 'js088',
      category: 10,
      name: 'Сыр',
      poster: "",
      price: 0.7,
  },
  {
      id: 'js089',
      category: 10,
      name: 'Шампиньоны',
      poster: "",
      price: 0.7,
  },
  {
      id: 'js090',
      category: 10,
      name: 'Соус',
      poster: "",
      price: 0.5,
  },
  {
      id: 'js091',
      category: 10,
      name: 'Порционные соусы',
      poster: "",
      price: 1,
  },
  {
      id: 'js092',
      category: 10,
      name: 'Фирменный соус в соуснике',
      poster: "",
      price: 1,
  },
  {
      id: 'js093',
      category: 10,
      name: 'Соус Тартар в соуснике',
      poster: "",
      price: 1.5,
  },
];
const products = goods.map((good, index) => {
  const setIndex = index + 1;

  return {
    id: good.id,
    cover: good.poster,
    name: good.name,
    price: good.price,
    priceSale: null,
    // colors:
    //   (setIndex === 1 && PRODUCT_COLOR.slice(0, 2)) ||
    //   (setIndex === 2 && PRODUCT_COLOR.slice(1, 3)) ||
    //   (setIndex === 3 && PRODUCT_COLOR.slice(2, 4)) ||
    //   (setIndex === 4 && PRODUCT_COLOR.slice(3, 6)) ||
    //   (setIndex === 23 && PRODUCT_COLOR.slice(4, 6)) ||
    //   (setIndex === 24 && PRODUCT_COLOR.slice(5, 6)) ||
    //   PRODUCT_COLOR,
    status: '',// sample(['sale', 'new', '', '']),
  };
});

export default products;
