
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
        title: 'Chair Modern',
        code: '123456',
        image: '/t1.png',
        price: 150,
        colors: ['red', 'blue', 'green'],
        images: {
            'red': '/t1.png',
            'blue': '/t2.png',
            'green': '/t3.png'
        },
        slug: '1',
      },
      {
        id: 2,
        title: 'Chair Light',
        code: '123457',
        image: '/t2.png',
        price: 120,
        colors: ['red', 'blue', 'green'],
        images: {
            'red': '/t2.png',
            'blue': '/t1.png',
            'green': '/t3.png'
        },
        slug: '2',
        },
      {
        id: 3,
        title: 'Chair Office',
        code: '123458',
        image: '/t3.png',
        price: 200,
        colors: ['red', 'blue', 'green'],
        images: {
            'red': '/t3.png',
            'blue': '/t2.png',
            'green': '/t4.png'
        },
        slug: '3',
      },
      {
        id: 4,
        title: 'Chair Sofa',
        code: '123459',
        image: '/t4.png',
        price: 180,
        colors: ['red', 'blue', 'green'],
        images: {   
            'red': '/t4.png',
            'blue': '/t3.png',
            'green': '/t2.png'
        },
        slug: '4',
      },
    ];
    export default products;