
type Product = {
    id: number;
    title: string;
    code: string;
    price: number;
    discountedPrice: number;
    colors: string[];
    images: { [key: string]: string };
    slug: string;
    size: string; // Add this line if size is also needed

  };
  
  const products: Product[] = [
    {
      id: 1,
      title: "Cantilever Chair",
      code: "Y523201",
      price: 42.0,
      discountedPrice: 30.0,
      colors: ["orange", "green", "gray"],
      images: {
        "orange": "/s1.jpeg",
        "green": "/s2.jpeg",
        "gray": "/s3.jpeg",
      },
      slug: "1",
      size: "M",
    },
    {
      id: 2,
      title: "Wood Chair",
      code: "Y523201",
      price: 42.0,
      discountedPrice: 30.0,
      colors: ["green", "pink", "brown"],
      images: {
        "green": "/s9.jpeg",
        "brown": "/s8.jpeg",
        "pink": "/s6.jpeg",
      },
      slug: "2",
      size: "M",
    },
    {
      id: 3,
      title: "Sofa Collection",
      code: "Y523201",
      price: 42.0,
      discountedPrice: 30.0,
      colors: ["brown", "green", "gray"],
      images: {
        "brown": "/s7.jpeg",
        "green": "/s10.jpeg",
        "gray": "/s26.jpeg",
      },
      slug: "3",
      size: "M",
    },
    {
      id: 4,
          title: "Sofa Collection",
          code: "Y523201",
          price: 42.0,
          discountedPrice: 30.0,
          colors: ["brown", "pink", "gray"],
          images: {
            "brown": "/s15.jpeg",
            "pink": "/s20.jpeg",
            "gray": "/s22.jpeg",
          },
          slug: "4",
        size: "M",
    },
    {
      id: 5,
      title: "Arm Chair",
      code: "Y523201",
      price: 42.0,
      discountedPrice: 30.0,
      colors: ["green", "pink", "blue"],
      images: {
        "green": "/s18.jpeg",
        "pink": "/s19.jpeg",
        "blue": "/s23.jpeg",
      },
      slug: "5",
      size: "M",
    },
    {
      id: 6,
      title: "Demanded Chair",
      code: "Y523201",
      price: 42.0,
      discountedPrice: 30.0,
      colors: ["white", "brown", "blue"],
      images: {
        "white": "/chair1.jpeg",
        "brown": "/chair2.jpeg",
        "blue": "/chair3.jpeg",
      },
      slug: "6",
      size: "M",
    },
    {
      id: 7,
      title: "Light Chair",
      code: "Y523201",
      price: 42.0,
      discountedPrice: 30.0,
      colors: ["pink", "red", "white"],
      images: {
        "pink": "/t1.png",
        "red": "/t2.png",
        "white": "/t3.png",
      },
      slug: "7",
      size: "M",
    },
    {
      id: 8,
      title: "Most Valuable Sofa",
      code: "Y523201",
      price: 42.0,
      discountedPrice: 30.0,
      colors: ["blue", "brown", "black"],
      images: {
        "blue": "/secondhero.png",
        "brown": "/sofa2.png",
        "black": "/sofa3.png",
      },
      slug: "8",
      size: "M",
    },
  ];
  export default products;