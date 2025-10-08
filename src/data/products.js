// src/data/products.js
export const categories = [
  { id: 'all', name: 'ทั้งหมด' },
  { id: 'electronics', name: 'อิเล็กทรอนิกส์' },
  { id: 'clothing', name: 'เสื้อผ้า' },
  { id: 'books', name: 'หนังสือ' },
  { id: 'accessories', name: 'อุปกรณ์เสริม' } // เพิ่มหมวดใหม่ (ถ้าต้องการ)
];

// ข้อมูลสินค้าพื้นฐาน + เพิ่มสินค้าใหม่
export const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    category: 'electronics',
    price: 45900,
    originalPrice: 49900,
    discount: 8,
    image: 'https://placehold.co/300x300/007bff/ffffff?text=iPhone+15',
    description: 'สมาร์ทโฟนล่าสุดจาก Apple',
    inStock: true,
    rating: 4.8
  },
  {
    id: 2,
    name: 'เสื้อยืดผ้าฝ้าย',
    category: 'clothing',
    price: 299,
    originalPrice: 450,
    discount: 33,
    image: 'https://placehold.co/300x300/ffc107/000000?text=T-Shirt',
    description: 'เสื้อยืดผ้าฝ้าย 100% นุ่มสบาย',
    inStock: true,
    rating: 4.2
  },
  {
    id: 3,
    name: 'หนังสือ React.js Guide',
    category: 'books',
    price: 650,
    originalPrice: 750,
    discount: 13,
    image: 'https://placehold.co/300x300/17a2b8/ffffff?text=React+Book',
    description: 'คู่มือเรียนรู้ React.js ฉบับสมบูรณ์',
    inStock: false,
    rating: 4.7
  },
  // ✅ สินค้าใหม่ที่เพิ่มเข้ามา
  {
    id: 4,
    name: 'หูฟังไร้สาย Bluetooth',
    category: 'electronics',
    price: 1490,
    originalPrice: 1990,
    discount: 25,
    image: 'https://placehold.co/300x300/6f42c1/ffffff?text=Headphones',
    description: 'หูฟังเสียงคมชัด แบตเตอรี่ใช้งานได้นาน',
    inStock: true,
    rating: 4.5
  },
  {
    id: 5,
    name: 'รองเท้าผ้าใบสุดเท่',
    category: 'clothing',
    price: 1290,
    originalPrice: 1590,
    discount: 19,
    image: 'https://placehold.co/300x300/28a745/ffffff?text=Sneakers',
    description: 'รองเท้าผ้าใบสไตล์มินิมอล ใส่สบายทุกโอกาส',
    inStock: true,
    rating: 4.4
  },
  {
    id: 6,
    name: 'กระเป๋าหนังแท้',
    category: 'accessories',
    price: 1990,
    originalPrice: 2490,
    discount: 20,
    image: 'https://placehold.co/300x300/6610f2/ffffff?text=Leather+Bag',
    description: 'กระเป๋าหนังแท้คุณภาพสูง ดีไซน์เรียบหรู',
    inStock: true,
    rating: 4.6
  }
];
