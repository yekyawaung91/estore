export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviewCount: number;
  description: string;
  colors: string[];
  sizes: string[];
  isHot?: boolean;
  isBestSelling?: boolean;
}

export const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
    images: [
      'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg',
      'https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg',
    ],
    category: 'electronics',
    brand: 'TechPro',
    rating: 4.8,
    reviewCount: 124,
    description: 'Experience premium sound quality with these wireless headphones featuring noise cancellation and 30-hour battery life.',
    colors: ['Black', 'White', 'Silver'],
    sizes: [],
    isHot: true,
    isBestSelling: true,
  },
  {
    id: '2',
    name: 'Organic Cotton T-Shirt',
    price: 49,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    images: [
      'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg',
    ],
    category: 'clothing',
    brand: 'EcoWear',
    rating: 4.5,
    reviewCount: 89,
    description: 'Comfortable and sustainable organic cotton t-shirt, perfect for everyday wear.',
    colors: ['White', 'Black', 'Navy', 'Gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    isBestSelling: true,
  },
  {
    id: '3',
    name: 'Smart Fitness Watch',
    price: 199,
    originalPrice: 249,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    images: [
      'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg',
    ],
    category: 'electronics',
    brand: 'FitTech',
    rating: 4.6,
    reviewCount: 203,
    description: 'Track your fitness goals with this advanced smartwatch featuring heart rate monitoring and GPS.',
    colors: ['Black', 'White', 'Rose Gold'],
    sizes: ['Small', 'Medium', 'Large'],
    isHot: true,
  },
  {
    id: '4',
    name: 'Leather Handbag',
    price: 159,
    image: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    images: [
      'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg',
    ],
    category: 'accessories',
    brand: 'LuxeBags',
    rating: 4.7,
    reviewCount: 67,
    description: 'Elegant leather handbag crafted from premium materials, perfect for any occasion.',
    colors: ['Brown', 'Black', 'Tan'],
    sizes: [],
    isHot: true,
    isBestSelling: true,
  },
  {
    id: '5',
    name: 'Running Shoes',
    price: 129,
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    images: [
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg',
    ],
    category: 'footwear',
    brand: 'SportMax',
    rating: 4.4,
    reviewCount: 156,
    description: 'Lightweight and comfortable running shoes designed for maximum performance.',
    colors: ['Blue', 'Black', 'Red'],
    sizes: ['7', '8', '9', '10', '11', '12'],
    isHot: true,
  },
  {
    id: '6',
    name: 'Ceramic Coffee Mug',
    price: 24,
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    images: [
      'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
    ],
    category: 'home',
    brand: 'HomeEssentials',
    rating: 4.3,
    reviewCount: 43,
    description: 'Beautiful ceramic coffee mug, perfect for your morning coffee ritual.',
    colors: ['White', 'Blue', 'Green'],
    sizes: [],
    isBestSelling: true,
  },
];

export const categories = [
  { id: 'electronics', name: 'Electronics', count: 3 },
  { id: 'clothing', name: 'Clothing', count: 1 },
  { id: 'accessories', name: 'Accessories', count: 1 },
  { id: 'footwear', name: 'Footwear', count: 1 },
  { id: 'home', name: 'Home & Garden', count: 1 },
];

export const brands = [
  { id: 'techpro', name: 'TechPro', logo: '🎧' },
  { id: 'ecowear', name: 'EcoWear', logo: '👕' },
  { id: 'fittech', name: 'FitTech', logo: '⌚' },
  { id: 'luxebags', name: 'LuxeBags', logo: '👜' },
  { id: 'sportmax', name: 'SportMax', logo: '👟' },
  { id: 'homeessentials', name: 'HomeEssentials', logo: '🏠' },
];

export const testimonials = [
  {
    id: '1',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Amazing quality products and fast shipping. Highly recommended!',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
  },
  {
    id: '2',
    name: 'Michael Chen',
    rating: 5,
    comment: 'Great customer service and excellent product selection.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
  },
  {
    id: '3',
    name: 'Emily Davis',
    rating: 4,
    comment: 'Love the sustainable options and eco-friendly packaging.',
    image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg',
  },
];

export const teamMembers = [
  {
    id: '1',
    name: 'Alex Rivera',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
    bio: 'Passionate about creating exceptional shopping experiences.',
  },
  {
    id: '2',
    name: 'Jamie Taylor',
    role: 'Head of Design',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
    bio: 'Bringing beautiful and functional design to every product.',
  },
  {
    id: '3',
    name: 'Morgan Lee',
    role: 'Tech Lead',
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
    bio: 'Building the technology that powers our platform.',
  },
];