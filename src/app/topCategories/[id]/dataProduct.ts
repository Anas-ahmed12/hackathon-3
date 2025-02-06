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
    { id: 1, title: 'Wood Chair',    code: 'Y523201', price: 19.99, miniTitle: 'Pink Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/cat1.png', 'blue': '/cat2.png', 'green': '/cat3.png' }, slug: '1'     },
    { id: 2, title: 'Plastic Chair', code: 'Y523202', price: 29.99, miniTitle: 'Pink Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/cat2.png', 'blue': '/cat1.png', 'green': '/cat3.png' }, slug: '2' },
    { id: 3, title: 'Luxury Sofa', code: 'Y523203', price: 19.99, miniTitle: 'Pink Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/s8.jpeg', 'blue': '/s9.jpeg', 'green': '/s10.jpeg' }, slug: '3' },
    { id: 4, title: 'Luxurious Sofa', code: 'Y523204', price: 29.99, miniTitle: 'Pink Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/s9.jpeg', 'blue': '/s8.jpeg', 'green': '/s10.jpeg' }, slug: '4' },
    { id: 5, title: 'Modern Sofa', code: 'Y523205', price: 19.99, miniTitle: 'Pink Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/s14.jpeg', 'blue': '/s15.jpeg', 'green': '/s16.jpeg' }, slug: '5' },
    { id: 6, title: 'Arm Sofa', code: 'Y523206', price: 29.99, miniTitle: 'Pink Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/s4.jpeg', 'blue': '/s5.jpeg', 'green': '/s6.jpeg' }, slug: '6' },
    { id: 7, title: 'Wood Sofa', code: 'Y523207', price: 39.99, miniTitle: 'Pink Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/s9.jpeg', 'blue': '/s8.jpeg', 'green': '/s7.jpeg' }, slug: '7' },
    { id: 8, title: 'Kids Sofa', code: 'Y523208', price: 49.99, miniTitle: 'Pink Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/s6.jpeg', 'blue': '/s5.jpeg', 'green': '/s4.jpeg' }, slug: '8' },
    { id: 9, title: 'Expensive Sofa', code: 'Y523209', price: 59.99, miniTitle: 'Pink Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/s7.jpeg', 'blue': '/s8.jpeg', 'green': '/s9.jpeg' }, slug: '9' },
    { id: 10, title: 'Demanded Sofa', code: 'Y523210', price: 59.99, miniTitle: 'Pink Sofa', colors: ['red', 'blue', 'green'], filter: 'New Arrival', images: { 'red': '/s10.jpeg', 'blue': '/s9.jpeg', 'green': '/s8.jpeg' }, slug: '10' },
  ];

  export default products;