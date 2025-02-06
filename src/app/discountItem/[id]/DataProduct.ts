
export type Product = {
    id: number;
    title: string;
    code: string;
    image: string;
    price: number;
    colors: string[];
    images: {[key: string]: string};
    slug: string;
  };

const products: Product[] = [
      {
        id: 1,
        title: 'Wood Chair',
        code: '123456',
        image: '/sh02.png',
        price: 150,
        colors: ['red', 'blue', 'green'],
        images: {
            'red': '/sh02.png',
            'blue': '/secondhero.png',
            'green': '/s17.jpeg'
        },
        slug: '1',
      },
      {
        id: 2,
        title: 'Plastic Chair',
        code: '123457',
        image: '/s16.jpeg',
        price: 120,
        colors: ['red', 'blue', 'green'],
        images: {
            'red': '/s16.jpeg',
            'blue': '/secondhero.png',
            'green': '/s17.jpeg'
        },
        slug: '2',
        },
      {
        id: 3,
        title: 'Sofa Collection',
        code: '123458',
        image: '/secondhero.png',
        price: 200,
        colors: ['red', 'blue', 'green'],
        images: {
            'red': '/s17.jpeg',
            'blue': '/s16.jpeg',
            'green': '/secondhero.png'
        },
        slug: '3',
      },
      {
        id: 4,
        title: 'Product 4',
        code: '123459',
        image: '/s17.jpeg',
        price: 180,
        colors: ['red', 'blue', 'green'],
        images: {   
              'red': '/s17.jpeg',
            'blue': '/s16.jpeg',
            'green': '/secondhero.png'
        },
        slug: '4',
      },
    ];
    export default products;