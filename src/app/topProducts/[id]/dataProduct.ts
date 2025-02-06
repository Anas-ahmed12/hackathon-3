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
}

const products: Product[] = [
    { id: 1, title: 'Newest Furniture',    code: 'Y523201', price: 19.99, miniTitle: 'modern Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/hero01.jpeg', 'blue': '/s11.jpeg', 'green': '/s17.jpeg' }, slug: '1'     },
    { id: 2, title: 'Exclusive Furniture', code: 'Y523202', price: 29.99, miniTitle: 'modern Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/s20bgr.png', 'blue': '/s15.jpeg', 'green': '/s11.jpeg' }, slug: '2' },
    { id: 3, title: 'Limited Time Deal', code: 'Y523203', price: 19.99, miniTitle: 'Pink Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/s10.jpeg', 'blue': '/s14.jpeg', 'green': '/s18.jpeg' }, slug: '3' },
  ];

  export default products;