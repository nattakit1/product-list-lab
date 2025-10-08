import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import './ProductList.css';

function ProductList({ products, categories, onAddToCart, onViewDetails }) {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('');

    // ฟิลเตอร์ + search + sort
    const filteredAndSortedProducts = useMemo(() => {
        // 1️⃣ กรองหมวดหมู่
        let filtered = selectedCategory === 'all'
            ? products
            : products.filter(product => product.category === selectedCategory);

        // 2️⃣ กรองด้วย search query
        filtered = filtered.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            product.description.toLowerCase().includes(searchQuery.toLowerCase())
        );

        // 3️⃣ เรียงลำดับ
        switch (sortBy) {
            case 'name':
                filtered.sort((a, b) => a.name.localeCompare(b.name));
                break;
            case 'price':
                filtered.sort((a, b) => a.price - b.price);
                break;
            case 'rating':
                filtered.sort((a, b) => b.rating - a.rating);
                break;
            default:
                break;
        }

        return filtered;
    }, [products, selectedCategory, searchQuery, sortBy]);

    return (
        <div className="product-list-container">
            {/* Header */}
            <div className="header">
                <h1>🛍️ ร้านค้าออนไลน์</h1>
                <p>Lab 3.2 - การสร้าง Components และ Props</p>
            </div>

            {/* Controls: Category Filter + Search + Sort */}
            <div className="controls" style={{ marginBottom: '20px', textAlign: 'center' }}>
                {/* Category */}
                <label htmlFor="category-select">หมวดหมู่: </label>
                <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    style={{ padding: '5px', fontSize: '16px', marginRight: '10px' }}
                >
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>

                {/* Search */}
                <input
                    type="text"
                    placeholder="ค้นหาสินค้า..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{ padding: '5px', fontSize: '16px', marginRight: '10px' }}
                />

                {/* Sort */}
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    style={{ padding: '5px', fontSize: '16px' }}
                >
                    <option value="">-- เรียงลำดับ --</option>
                    <option value="name">ชื่อ (A-Z)</option>
                    <option value="price">ราคา (น้อย → มาก)</option>
                    <option value="rating">คะแนน (สูง → ต่ำ)</option>
                </select>
            </div>

            {/* Products Display */}
            <div className="products-grid">
                {filteredAndSortedProducts.length > 0 ? (
                    filteredAndSortedProducts.map(product => (
                        <ProductCard
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            onViewDetails={onViewDetails}
                        />
                    ))
                ) : (
                    <p className="no-results">ไม่พบสินค้าที่ตรงกับเงื่อนไข</p>
                )}
            </div>
        </div>
    );
}

// PropTypes
ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired
};

export default ProductList;
