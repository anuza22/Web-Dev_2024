export interface Product {
  id: number;
  category: number;
  name: string;
  price: number;
  description: string;
  rating: number
  img: string;
  kaspi_link: string;
  like: number;
}

export const products = [
  {
    id: 1, category: 1,
    name: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
    price: 298528,
    description: `
      -технология NFC: Да
      -цвет: черный
      -тип экрана: OLED, Super Retina XDR
      -диагональ: 6.1 дюйм
    `,
    rating: 4.5,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-small",
    kaspi_link: "https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000",
    like: 0
  },
  {
    id: 2,category: 1,
    name: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
    price: 158000,
    description: `-технология NFC: Нет
    -цвет: черный
    -тип экрана: IPS, сенсорный
    -диагональ: 6.79 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h1b/h77/84526902706206.jpg?format=gallery-medium",
    rating: 5,
    kaspi_link : "https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000"
    ,like: 0
  },
  {
    id: 3,category: 1,
    name: 'Смартфон Apple iPhone 15 Pro Max 256Gb серый',
    price: 614666,
    description: `технология NFC: Да
    цвет: серый
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.7 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc1/h65/83559848181790.png?format=gallery-medium",
    rating: 4.8,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-seryi-113138420/?c=750000000"
    ,like: 0
  },
  {
    id: 4,category: 1,
    name: 'Смартфон Apple iPhone 14 128Gb черный',
    price: 325969,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: OLED, Super Retina XDR display
    диагональ: 6.1 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h98/h2b/64400497737758.jpg?format=gallery-medium",
    rating: 4.5,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-14-128gb-chernyi-106363023/?c=750000000"
    ,like: 0
  },
  {
    id: 5,category: 1,
    name: 'Смартфон Samsung Galaxy A24 6 ГБ/128 ГБ черный',
    price: 89593,
    description: 'long battery life, bright display',
    img: "https://resources.cdn-kaspi.kz/img/m/p/hdc/h12/80750151303198.jpg?format=gallery-medium",
    rating: 4.3,
    kaspi_link : "https://kaspi.kz/shop/p/samsung-galaxy-a24-6-gb-128-gb-chernyi-110343531/?c=750000000"
    ,like: 0
  },
  {
    id: 6,category: 1,
    name: 'Смартфон Xiaomi Redmi 12C 4 ГБ/128 ГБ серый',
    price: 49290,
    description: `технология NFC: Нет
    цвет: серый
    тип экрана: IPS LCD
    диагональ: 6.71 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/ha6/h82/69586957697054.jpg?format=gallery-medium",
    rating: 4.2,
    kaspi_link : "https://kaspi.kz/shop/p/xiaomi-redmi-12c-4-gb-128-gb-seryi-109149311/?c=750000000"
    ,like: 0
  },
  {
    id: 7,category: 1,
    name: 'Смартфон Samsung Galaxy A54 5G 8 ГБ/256 ГБ черный',
    price: 163841,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: Super AMOLED, сенсорный
    диагональ: 6.4 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/h81/h13/80435536887838.jpg?format=gallery-medium",
    rating: 4.9,
    kaspi_link : "https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-8-gb-256-gb-chernyi-110044379/?c=750000000",
    like: 0
  },
  {
    id: 8,category: 1,
    name: 'Смартфон Apple iPhone 13 128Gb зеленый',
    price: 287723,
    description: `технология NFC: Да
    цвет: зеленый
    тип экрана: OLED, Super Retina XDR
    диагональ: 6.1 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd1/h2f/64255724159006.jpg?format=gallery-medium",
    rating: 4.9,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-13-128gb-zelenyi-104078887/?c=750000000"
    ,like: 0
  },
  {
    id: 9,category: 1,
    name: 'Смартфон Samsung Galaxy A54 5G 6 ГБ/128 ГБ черный',
    price: 142351,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: Super AMOLED, сенсорный
    диагональ: 6.4 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hc4/h8b/80435552223262.jpg?format=gallery-medium",
    rating: 4.7,
    kaspi_link : "https://kaspi.kz/shop/p/samsung-galaxy-a54-5g-6-gb-128-gb-chernyi-110044409/?c=750000000"
    ,like: 0
  },
  {
    id: 10,category: 1,
    name: 'Смартфон Apple iPhone 11 128Gb Slim Box черный',
    price: 245170,
    description: `технология NFC: Да
    цвет: черный
    тип экрана: сенсорный мультитач цветной IPS, Liquid Retina HD
    диагональ: 6.1 дюйм`,
    img: "https://resources.cdn-kaspi.kz/img/m/p/hd8/hac/63897052413982.jpg?format=gallery-medium",
    rating: 4.5,
    kaspi_link : "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000"
    ,like: 0
  },
  {
    id: 11,
    category: 1,
    name: 'Phone XL',
    price: 799,
    description: 'A large phone with one of the best screens',
    img: "https://m.media-amazon.com/images/I/71bfERiBXSL._AC_UY218_.jpg",
    rating: 4.5,
    kaspi_link : "https://www.amazon.com/TracFone-iPhone-Prepaid-Smartphone-Locked/dp/B08WJNJQYW/ref=sr_1_1?crid=11SVNB8JBCSG2&keywords=iphone+xr&qid=1647084646&sprefix=iphone+xr+ca%2Caps%2C366&sr=8-1"
    ,like: 0
  },
  {
    id: 12,category: 1,
    name: 'Phone Mini A52',
    price: 699,
    description: 'A great phone with one of the best cameras',
    img: "https://m.media-amazon.com/images/I/71ei4H2B0-L._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Samsung-Galaxy-A52s-5G-Unlocked/dp/B09GRGVMBB/ref=sr_1_17?crid=5DXC994T3AZ6&keywords=samsung&qid=1647084752&sprefix=sams%2Caps%2C616&sr=8-17"
    ,like: 0
  },
  {
    id: 13,category: 1,
    name: 'Phone Standard',
    price: 299,
    description: 'Apple iPhone 12 Pro Max',
    img: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFNMBWL/ref=sr_1_1?crid=KHMHIKAWRF58&keywords=iphone+12+pro&qid=1647084805&sprefix=iphone+12+pr%2Caps%2C343&sr=8-1"
    ,like: 0},
  {
    id: 14,category: 1,
    name: 'Samsung Galaxy S20',
    price: 700,
    description: 'FE 5G (128GB, 6GB) 6.5" AMOLED, Snapdragon 865, IP68 Water Resistant',
    img: "https://m.media-amazon.com/images/I/514ByLfO+oL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Samsung-Factory-Unlocked-Smartphone-Pro-Grade/dp/B08FYTSXGQ/ref=sr_1_1?crid=2H7CEE2SM5PZQ&keywords=samsung+galaxy+s20&qid=1647085003&sprefix=samsung+galaxy+s22%2Caps%2C350&sr=8-1"
    ,like: 0},
  {
    id: 15,category: 1,
    name: 'Samsung galaxy S22 ',
    price: 999,
    description: 'long battery life, bright display',
    img: "https://m.media-amazon.com/images/I/81Ulnpn3ZpL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Samsung-Snapdragon-Resistant-Unlocked-International/dp/B09PLNBG4H/ref=sr_1_5?crid=1UH9CU0G7W8H&keywords=samsung+galaxy+s22&qid=1647084971&sprefix=samsung+galaxy+s22%2Caps%2C362&sr=8-5"
    ,like: 0},
  {
    id: 16,category: 1,
    name: 'Xiaomi 11T',
    price: 432,
    description: '108mp tripple camera, NFC dual sim',
    img: "https://m.media-amazon.com/images/I/51Wr13eabnL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Xiaomi-11T-Compatible-Unlocked-Meteorite/dp/B09JX9HG77/ref=sr_1_1?crid=2U8K4BQZB0EWN&keywords=xiaomi+11t&qid=1647085028&sprefix=xiaomi+1%2Caps%2C283&sr=8-1"
    ,like: 0},
  {
    id: 17,category: 1,
    name: 'Xiaomi redmi 9A',
    price: 299,
    description: '2Gb + 32 gb',
    img: "https://m.media-amazon.com/images/I/81oPj2JzHDL._AC_UY218_.jpg",
    rating: 4.5,
    kaspi_link : "https://www.amazon.com/Xiaomi-Display-Unlocked-Global-Version/dp/B08CGXVPXW/ref=sr_1_1?crid=G5H4WN31MXOQ&keywords=xiaomi+redmi+9a&qid=1647085051&sprefix=xiaomi+redmi+%2Caps%2C309&sr=8-1",
    like: 0},
  {
    id: 18,category: 1,
    name: 'Phone Standard',
    price: 1000,
    description: 'Apple iPhone 12 Pro Max',
    img: "https://m.media-amazon.com/images/I/71FuI8YvCNL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Apple-iPhone-12-Pro-Pacific/dp/B09JFNMBWL/ref=sr_1_1?crid=KHMHIKAWRF58&keywords=iphone+12+pro&qid=1647084805&sprefix=iphone+12+pr%2Caps%2C343&sr=8-1"
    ,like: 0},
  {
    id: 19,category: 1,
    name: 'One plus nord200',
    price: 800,
    description: '5G Enabled (5G service only available on T-Mobile and Google Fi)',
    img: "https://m.media-amazon.com/images/I/71DCZOdq92S._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/OnePlus-Unlocked-Android-Smartphone-Charging/dp/B07XWGWPH5/ref=sr_1_1?crid=1P2VKRCR5ET7H&keywords=oneplus+nord+200&qid=1647085115&sprefix=oneplus+nord+20%2Caps%2C273&sr=8-1"
    ,like: 0},
  {
    id: 20,category: 1,
    name: 'One plus nord100',
    price: 500,
    description: '120Hz Fluid Display, Hasselblad Triple Camera, 65W Ultra Fast Charge',
    img: "https://m.media-amazon.com/images/I/41OGxSEvX+S._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/OnePlus-Unlocked-Smartphone-Hasselblad-Wireless/dp/B08Y727NMK/ref=sr_1_2?crid=TODOI6APATYZ&keywords=oneplus&qid=1647084105&sprefix=one%2Caps%2C445&sr=8-2&th=1"
    ,like: 0},
  {
    id: 21,category: 2,
    name: 'HP flagship',
    price: 509,
    description: '120Hz Fluid Display, Hasselblad Triple Camera, 65W Ultra Fast Charge',
    img: "https://m.media-amazon.com/images/I/81GzHjQ0mEL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Flagship-HP-15-6-Laptop-HubxcelCables/dp/B09S5MR596/ref=sr_1_1_sspa?crid=3SVCW2XHS9QXO&keywords=laptops&qid=1647173934&s=pc&sprefix=laptops%27%2Caps%2C527&sr=1-1-spons&psc=1&smid=A39LX1CZ9BSTRA&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQTFCNDJOSVVRTkdKJmVuY3J5cHRlZElkPUEwODg4NTEzMzJNS1hNOUw0MDVENyZlbmNyeXB0ZWRBZElkPUEwNDkzMzExMlRIVlJaRVE4SElJMiZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
    ,like: 0},
  {
    id: 22,category: 2,
    name: 'HP newest',
    price: 489,
    description: '4-core Intel Pentium N5030(Up to 3.1GHz), 16GB RAM',
    img: "https://m.media-amazon.com/images/I/61EX1LtalAL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/HP-Micro-Edge-Pentium-Bluetooth-Accessories/dp/B09PFZL9XK/ref=sr_1_2_sspa?crid=3SVCW2XHS9QXO&keywords=laptops&qid=1647173934&s=pc&sprefix=laptops%27%2Caps%2C527&sr=1-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyQTFCNDJOSVVRTkdKJmVuY3J5cHRlZElkPUEwODg4NTEzMzJNS1hNOUw0MDVENyZlbmNyeXB0ZWRBZElkPUEwNzYxMjAzNURRWTBOVkFMMjhCJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
    ,like: 0},
  {
    id: 23,category: 2,
    name: 'Acer Aspire 5',
    price: 399,
    description: ' Full HD IPS Display | AMD Ryzen 3 3350U Quad-Core Mobile Processor | 4GB DDR4',
    img: "https://m.media-amazon.com/images/I/7189iXimfWL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Acer-A515-46-R3UB-Display-Quad-Core-Processor/dp/B09HVC79PC/ref=sr_1_3?crid=3SVCW2XHS9QXO&keywords=laptops&qid=1647173934&s=pc&sprefix=laptops%27%2Caps%2C527&sr=1-3"
    ,like: 0},
  {
    id: 24,category: 2,
    name: 'HP pavilion',
    price: 799,
    description: '11th Gen Intel Core i7-1165G7 Processor, 16 GB RAM',
    img: "https://m.media-amazon.com/images/I/711Nx6ZoRML._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/HP-i7-1165G7-Processor-Micro-Edge-15-eg0025nr/dp/B09FX1YF28/ref=sr_1_4?crid=3SVCW2XHS9QXO&keywords=laptops&qid=1647173934&s=pc&sprefix=laptops%27%2Caps%2C527&sr=1-4"
    ,like: 0},
  {
    id: 25,category: 2,
    name: 'Lenovo ideapad 5',
    price: 549,
    description: 'Full HD - 1920 x 1080 - Intel Core i5 11th Gen i5-1135G7 Quad-core (4 Core) 2.40 GHz - 16 GB RAM - 512 GB SSD - Graphite Gray',
    img: "https://m.media-amazon.com/images/I/61JSNgFdBDL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link : "https://www.amazon.com/Lenovo-IdeaPad-14ITL05-82FE00MEUS-Notebook/dp/B09BMHSMBF/ref=sr_1_1?crid=2DT47AJYWUY9B&keywords=lenovo+ideapad+5+pro+14&qid=1647174569&sprefix=lenovo+ideapad+5+pro+1%2Caps%2C405&sr=8-1"
    ,like: 0},
  {
    id: 26,
    name: "Roku Smart",
    category: 3,
    price: 200,
    description: "TCL 32 inch",
    img:  "https://m.media-amazon.com/images/I/71wYJc19PiL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/TCL-32S327-32-Inch-1080p-Smart/dp/B07F981R8M/ref=sr_1_3?crid=1FNFKRGDD3RTW&keywords=tv&qid=1647174780&sprefix=%2Caps%2C272&sr=8-3",
    like: 0},
  {
    id: 27,
    category: 3,
    name: "Smart Roku",
    price: 539,
    description: "TCL 65 inch",
    img:  "https://m.media-amazon.com/images/I/71wJCiFPrfL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/TCL-Class-UHD-Smart-Roku/dp/B08GW982QS/ref=sr_1_4?crid=1FNFKRGDD3RTW&keywords=tv&qid=1647174780&sprefix=%2Caps%2C272&sr=8-4"
    ,like: 0},
  {
    id: 28,
    category: 3,
    name: "Sony x85j",
    price: 319,
    description: "Google TV with Native 120HZ Refresh Rate, Dolby Vision HDR",
    img: "https://m.media-amazon.com/images/I/812wiz16nlL._AC_UY218_.jpg" ,
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/Sony-X85J-Inch-Compatibility-KD75X85J/dp/B08WJKNQ8N/ref=sr_1_5?crid=1FNFKRGDD3RTW&keywords=tv&qid=1647174780&sprefix=%2Caps%2C272&sr=8-5&th=1"
    ,like: 0},
  {
    id: 29,
    category: 3,
    name: "VIZIO 58inch",
    price: 485,
    description: "4K UHD LED HDR Smart TV with Apple AirPlay and Chromecast Built-in",
    img:  "https://m.media-amazon.com/images/I/813UjyhFSnL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/VIZIO-58-Inch-AirPlay-Chromecast-V585-J01/dp/B092Q2B9N3/ref=sr_1_6?crid=1FNFKRGDD3RTW&keywords=tv&qid=1647174780&sprefix=%2Caps%2C272&sr=8-6"
    ,like: 0},
  {
    id: 30,
    category: 3,
    name: "Amazon Fire",
    price: 279,
    description: "TV 43 4-Series 4K UHD smart TV",
    img:  "https://m.media-amazon.com/images/I/51EPd38RHQL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/amazon-fire-tv-43-inch-4-series-4k-smart-tv/dp/B08SWD2SCK/ref=sr_1_7_sspa?crid=1FNFKRGDD3RTW&keywords=tv&qid=1647174780&sprefix=%2Caps%2C272&sr=8-7-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyVDg1S0xEVERDTE1MJmVuY3J5cHRlZElkPUEwMzQ4OTIzMkZQVlRPU1lKRFNXMSZlbmNyeXB0ZWRBZElkPUEwNTExODA3RlBCVE1VRUpIQlhQJndpZGdldE5hbWU9c3BfbXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ=="
    ,like: 0},
  {
    id: 31,
    category: 4,
    name: "Fire 7",
    price : 70,
    description: "tablet, 7 display, 16 GB, latest model (2019 release), Twilight Blue",
    img: "https://m.media-amazon.com/images/I/71sONE4A2RL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/Fire-Tablet-7/dp/B07HZHJGY7/ref=sr_1_1_sspa?crid=WNBJLV9HZLA7&keywords=tablets&qid=1647175333&sprefix=tabl%2Caps%2C1103&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOTdCNjQ3NlFHWThQJmVuY3J5cHRlZElkPUEwNzYyNDUzMjNaTkVXOFREN1NMRyZlbmNyeXB0ZWRBZElkPUEwNjM1MTc2MlpGQ0cyQU9EUFkxNyZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
    ,like: 0},
  {
    id: 32,
    category: 4,
    name: "Fire 10",
    price : 100,
    description: "kids pro tablet, blue",
    img: "https://m.media-amazon.com/images/I/61I0wpp31qS._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/Fire-HD-10-Kids-Pro-tablet/dp/B08F5MXVYL/ref=sr_1_2_sspa?crid=WNBJLV9HZLA7&keywords=tablets&qid=1647175333&sprefix=tabl%2Caps%2C1103&sr=8-2-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyOTdCNjQ3NlFHWThQJmVuY3J5cHRlZElkPUEwNzYyNDUzMjNaTkVXOFREN1NMRyZlbmNyeXB0ZWRBZElkPUEwODgzNTU0MkNWMUhLVk5TUUFLWSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
    ,like: 0},
  {
    id: 33,
    category: 4,
    name: "Fire 7",
    price : 50,
    description: "tablet, 7 display, 16 GB, latest model (2019 release), Black",
    img: "https://m.media-amazon.com/images/I/71POuqajw1L._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/Fire-Tablet-7/dp/B07FKR6KXF/ref=sr_1_3?crid=WNBJLV9HZLA7&keywords=tablets&qid=1647175333&sprefix=tabl%2Caps%2C1103&sr=8-3"
    ,like: 0 },
  {
    id: 34,
    category: 4,
    name: "Moderness Tablet 10.1",
    price : 117,
    description: "10.1 Inch Android 10 32GB 6000mAh Battery Quad Core HD Touchscreen Tablets",
    img: "https://m.media-amazon.com/images/I/61Uxn7OGnmL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/Android-6000mAh-Battery-Touchscreen-Tablets/dp/B09C5MJYTG/ref=sr_1_4?crid=WNBJLV9HZLA7&keywords=tablets&qid=1647175333&sprefix=tabl%2Caps%2C1103&sr=8-4&th=1"
    ,like: 0 },
  {
    id: 35,
    category: 4,
    name: "Samsung",
    price : 140,
    description: "Tab A7 Lite 8.7 Gray 32GB (SM-T220NZAAXAR)",
    img: "https://m.media-amazon.com/images/I/819hAP4xoGS._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/Samsung-Lite-Gray-32GB-SM-T220NZAAXAR/dp/B094Q89NKH/ref=sr_1_6?crid=WNBJLV9HZLA7&keywords=tablets&qid=1647175333&sprefix=tabl%2Caps%2C1103&sr=8-6"
    ,like: 0},
  {
    id: 36,
    category: 5,
    name: "Sonzy ZX",
    price: 14,
    description: "Wired on ear headphones, white",
    img: "https://m.media-amazon.com/images/I/416mZ6bkTyL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/Sony-Wired-Headphones-MDRZX110-WHI/dp/B00NJ2M43M/ref=sr_1_3?crid=2PEE39DGGIUE5&keywords=headphones&qid=1647175875&sprefix=headphone%2Caps%2C410&sr=8-3"
    ,like: 0},
  {
    id: 37,
    category: 5,
    name: "JBL vibe",
    price: 30,
    description: "100 TWS - True Wireless In-Ear Headphones - Purple",
    img: "https://m.media-amazon.com/images/I/41HswNxIJzS._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/JBL-VIBE-100-TWS-Ear/dp/B095J77T36/ref=sr_1_4?crid=2PEE39DGGIUE5&keywords=headphones&qid=1647175875&sprefix=headphone%2Caps%2C410&sr=8-4"
    ,like: 0},
  {
    id: 38,
    category: 5,
    name: "Shure AONIC 50 ",
    price: 60,
    description: "20 Hours Battery Life, Fingertip Controls - Black",
    img: "https://m.media-amazon.com/images/I/71FrbqZOTdL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/Shure-Cancelling-Headphones-Studio-Quality-Technology/dp/B084RZSFCX/ref=sr_1_5?crid=2PEE39DGGIUE5&keywords=headphones&qid=1647175875&sprefix=headphone%2Caps%2C410&sr=8-5"
    ,like: 0},
  {
    id: 39,
    category: 5,
    name: "Apple EarPods",
    price: 6,
    description: "Lightning Connector - White",
    img: "https://m.media-amazon.com/images/I/51+UEOS6bML._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/Apple-EarPods-Lightning-Connector-White/dp/B01M0GB8CC/ref=sr_1_6?crid=2PEE39DGGIUE5&keywords=headphones&qid=1647175875&sprefix=headphone%2Caps%2C410&sr=8-6"
    ,like: 0},
  {
    id: 40,
    category: 5,
    name: "Beats Solo3",
    price: 359,
    description: "Wireless On-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 40 Hours of Listening Time, Built-in Microphone - Rose Gold",
    img: "https://m.media-amazon.com/images/I/51PbyjVSxsL._AC_UY218_.jpg",
    rating: 4.5,

    kaspi_link: "https://www.amazon.com/Beats-Solo3-Wireless-Ear-Headphones/dp/B07YVYPNRD/ref=sr_1_10?crid=2PEE39DGGIUE5&keywords=headphones&qid=1647175875&sprefix=headphone%2Caps%2C410&sr=8-10"
    ,like: 0},
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/