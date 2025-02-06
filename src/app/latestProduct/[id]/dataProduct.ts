export type Product = {
    id: number;
    title: string;
    code: string;
    price: number;
    miniTitle: string;
    colors: string[];
    filter: string;
    images: { [key: string]: string };
    slug: string;
  };

const products: Product[] = [
    // Sample product data
    {
      id: 1,
      title: 'Orangy Sofa',
      code: 'Y523201',  
      price: 30.00,
      miniTitle: 'Pink Sofa',
      colors: ["white", "brown", "blue"],
      filter: 'New Arrival',
      images: {
      "white": "/s1.jpeg",
      "brown": "/s20.jpeg",
        "blue": "/s21.jpeg",
      },
      slug: '1',
    },
    {
      id: 2,
      title: 'Brown Sofa',
      code: 'Y523202',
      price: 35.00,
      miniTitle: 'Brown Sofa',
      filter: 'New Arrival',
      colors: ["white", "brown", "blue"],
      images: {
      "white": "/s7.jpeg",
      "brown": "/s20.jpeg",
        "blue": "/s21.jpeg",
      },
      slug: '2',
    },
    {
      id: 3,
      title: 'Pinkish Sofa',
      code: 'Y523203',
      price: 25.00,
      miniTitle: 'pinkish Sofa',
      filter: 'New Arrival',
      colors: ["white", "brown", "blue"],
      images: {
      "white": "/s20.jpeg",
      "brown": "/s19.jpeg",
        "blue": "/s21.jpeg",
      },
      slug: '3',
    },
    {
      id: 4,
      title: 'Yellowish Sofa',
      code: 'Y523204',
      price: 28.00,
      miniTitle: 'yellowish Sofa',
      filter: 'New Arrival',
      colors: ["white", "brown", "blue"],
      images: {
      "white": "/s21.jpeg",
      "brown": "/s20.jpeg",
        "blue": "/s19.jpeg",
      },
      slug: '4',
    },
    {
      id: 5,
      title: 'Greenish Sofa',
      code: 'Y523205',
      price: 32.00,
      miniTitle: 'greenish Sofa',
      filter: 'New Arrival',
      colors: ["white", "brown", "blue"],
      images: {
      "white": "/s10.jpeg",
      "brown": "/s19.jpeg",
        "blue": "/s21.jpeg",
      },
      slug: '5',
    },
    {
      id: 6,
      title: 'Blueish Sofa',
      code: 'Y523206',
      price: 30.00,
      miniTitle: 'blueish Sofa',
      filter: 'New Arrival',
      colors: ["white", "brown", "blue"],
      images: {
      "white": "/s23.jpeg",
      "brown": "/s10.jpeg",
        "blue": "/s21.jpeg",
      },
      slug: '6',
    },{
      id: 7,
      title: 'Greyish Sofa',
      code: 'Y523207',
      price: 30.00,
      miniTitle: 'greyish Sofa',
      filter: 'Best Seller',
      colors: ["white", "brown", "blue"],
      images: {
      "white": "/s12.jpeg",
      "brown": "/s10.jpeg",
        "blue": "/s21.jpeg",
      },
      slug: '7',
    },{
      id: 8,
      title: 'Redish Sofa',
      code: 'Y523208',
      price: 30.00,
      miniTitle: 'redish Sofa',
      filter: 'Best Seller',
      colors: ["white", "brown", "blue"],
      images: {
      "white": "/s13.jpeg",
        "brown": "/s10.jpeg",
        "blue": "/s21.jpeg",
      },
      slug: '8',
    },{
      id: 9,
      title: 'Purpleish Sofa',
      code: 'Y523209',
      price: 30.00,
      miniTitle: 'purpleish Sofa',
      filter: 'Featured',
      colors: ["white", "brown", "blue"],
      images: {
      "white": "/s14.jpeg",
      "brown": "/s10.jpeg",
        "blue": "/s21.jpeg",
      },
      slug: '9',
    },{
      id: 10,
      title: 'Whiteish Sofa',
      code: 'Y523210',
      price: 30.00,
      miniTitle: 'whiteish Sofa',
      filter: 'Featured',
      colors: ["white", "brown", "blue"],
      images: {
      "white": "/s15.jpeg",
      "brown": "/s10.jpeg",
        "blue": "/s21.jpeg",
      },
      slug: '10',
    },{
      id: 11,
      title: 'Brownish Sofa',
      code: 'Y523211',
      price: 30.00,
      miniTitle: 'brownish Sofa',
      filter: 'Best Seller',
      colors: ["white", "brown", "blue"],
      images: {
      "white": "/s16.jpeg",
      "brown": "/s10.jpeg",
        "blue": "/s21.jpeg",
      },
      slug: '11',
    },
    {
      id: 12,
      title: 'Blackish Sofa',
      code: 'Y523212',
      price: 30.00,
      miniTitle: 'bluish Sofa',
      filter: 'Special Offer',
      colors: ["white", "brown", "blue"],
      images: {
      "white": "/s17.jpeg",
      "brown": "/s10.jpeg",
        "blue": "/s21.jpeg",
      },
      slug: '12',
    },
  ];
  export default products;