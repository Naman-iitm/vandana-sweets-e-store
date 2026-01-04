export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  weight: string;
  isPopular?: boolean;
}

export const products: Product[] = [
  {
    id: 'laddoo-besan',
    name: 'Besan Laddoo',
    price: 450,
    description: 'Traditional gram flour laddoos made with pure desi ghee, perfectly rounded and melt-in-mouth.',
    image: '/products/besan-laddoo.jpg',
    category: 'Laddoos',
    weight: '500g',
    isPopular: true
  },
  {
    id: 'laddoo-motichoor',
    name: 'Motichoor Laddoo',
    price: 480,
    description: 'Fine droplet laddoos with delicate texture, infused with cardamom and saffron.',
    image: '/products/motichoor-laddoo.jpg',
    category: 'Laddoos',
    weight: '500g',
    isPopular: true
  },
  {
    id: 'laddoo-boondi',
    name: 'Boondi Laddoo',
    price: 420,
    description: 'Classic boondi laddoos dipped in sugar syrup, perfect for festivals and celebrations.',
    image: '/products/boondi-laddoo.jpg',
    category: 'Laddoos',
    weight: '500g'
  },
  {
    id: 'rasgulla-classic',
    name: 'Classic Rasgulla',
    price: 350,
    description: 'Soft, spongy cheese balls soaked in light sugar syrup. A Bengali delicacy.',
    image: '/products/rasgulla.jpg',
    category: 'Rasgullas',
    weight: '12 pieces',
    isPopular: true
  },
  {
    id: 'rasgulla-kesar',
    name: 'Kesar Rasgulla',
    price: 420,
    description: 'Premium rasgullas infused with authentic Kashmiri saffron.',
    image: '/products/kesar-rasgulla.jpg',
    category: 'Rasgullas',
    weight: '12 pieces'
  },
  {
    id: 'barfi-kaju',
    name: 'Kaju Barfi',
    price: 650,
    description: 'Rich cashew barfi with silver vark, made from finest quality cashews.',
    image: '/products/kaju-barfi.jpg',
    category: 'Barfi',
    weight: '500g',
    isPopular: true
  },
  {
    id: 'barfi-badam',
    name: 'Badam Barfi',
    price: 680,
    description: 'Premium almond barfi with cardamom, a royal treat for special occasions.',
    image: '/products/badam-barfi.jpg',
    category: 'Barfi',
    weight: '500g'
  },
  {
    id: 'barfi-pista',
    name: 'Pista Barfi',
    price: 720,
    description: 'Luxurious pistachio barfi with rich flavor and beautiful green color.',
    image: '/products/pista-barfi.jpg',
    category: 'Barfi',
    weight: '500g'
  },
  {
    id: 'peda-mathura',
    name: 'Mathura Peda',
    price: 380,
    description: 'Authentic Mathura-style peda with caramelized milk and cardamom.',
    image: '/products/mathura-peda.jpg',
    category: 'Peda',
    weight: '500g',
    isPopular: true
  },
  {
    id: 'peda-kesar',
    name: 'Kesar Peda',
    price: 420,
    description: 'Saffron-infused peda with rich creamy texture and royal taste.',
    image: '/products/kesar-peda.jpg',
    category: 'Peda',
    weight: '500g'
  },
  {
    id: 'namkeen-mixture',
    name: 'Special Mixture',
    price: 280,
    description: 'Crispy namkeen mixture with sev, peanuts, and aromatic spices.',
    image: '/products/namkeen-mixture.jpg',
    category: 'Namkeen',
    weight: '500g'
  },
  {
    id: 'namkeen-bhujia',
    name: 'Besan Bhujia',
    price: 320,
    description: 'Thin, crispy gram flour bhujia with perfect spice balance.',
    image: '/products/bhujia.jpg',
    category: 'Namkeen',
    weight: '500g'
  },
  {
    id: 'namkeen-samosa',
    name: 'Mini Samosa',
    price: 350,
    description: 'Crispy bite-sized samosas, perfect for tea-time snacking.',
    image: '/products/mini-samosa.jpg',
    category: 'Namkeen',
    weight: '500g'
  },
  {
    id: 'gulab-jamun',
    name: 'Gulab Jamun',
    price: 380,
    description: 'Soft, deep-fried milk solid balls soaked in rose-flavored sugar syrup.',
    image: '/products/gulab-jamun.jpg',
    category: 'Specials',
    weight: '12 pieces',
    isPopular: true
  }
];

export const categories = ['All', 'Laddoos', 'Rasgullas', 'Barfi', 'Peda', 'Namkeen', 'Specials'];
