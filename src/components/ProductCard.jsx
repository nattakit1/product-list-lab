import React from 'react';
import PropTypes from 'prop-types';

function ProductCard({ product, onAddToCart, onViewDetails }) {
    const {
        name,
        image,
        description,
        price,
        originalPrice,
        discount,
        inStock,
        rating
    } = product;

    // ⭐ ฟังก์ชันแสดงดาว
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
        const stars = [];

        // ดาวเต็ม
        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className="star full">★</span>);
        }

        // ดาวครึ่ง
        if (hasHalfStar) {
            stars.push(<span key="half" className="star half">⭐</span>);
        }

        // ดาวว่าง
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
        }

        return stars;
    };

    return (
        <div className="product-card">
            <div className="product-image">
                <img
                    src={image}
                    alt={name}
                    onError={(e) => {
                        e.target.src = 'https://placehold.co/300x300/cccccc/666666?text=No+Image';
                    }}
                />
            </div>

            <div className="product-info">
                <h3 className="product-name">{name}</h3>
                <p className="product-description">{description}</p>

                {/* ⭐ ส่วนแสดงดาว */}
                <div className="product-rating">
                    {renderStars(rating)} <span className="rating-number">({rating})</span>
                </div>

                {/* 💸 ส่วนแสดงราคาและส่วนลด */}
                <div className="product-price">
                    {discount > 0 ? (
                        <>
                            <span className="old-price">
                                ฿{originalPrice.toLocaleString()}
                            </span>{' '}
                            <span className="new-price">
                                ฿{price.toLocaleString()}
                            </span>{' '}
                            <span className="discount-tag">ลด {discount}%</span>
                        </>
                    ) : (
                        <span className="new-price">
                            ฿{price.toLocaleString()}
                        </span>
                    )}
                </div>

                {/* 🔘 ปุ่มกด */}
                <div className="product-actions">
                    <button
                        className="btn btn-secondary"
                        onClick={() => onViewDetails(product)}
                    >
                        ดูรายละเอียด
                    </button>
                    <button
                        className="btn btn-primary"
                        onClick={() => onAddToCart(product)}
                        disabled={!inStock}
                    >
                        {inStock ? 'ใส่ตะกร้า' : 'หมดสินค้า'}
                    </button>
                </div>
            </div>
        </div>
    );
}

// ✅ PropTypes ที่ละเอียด
ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        originalPrice: PropTypes.number,
        discount: PropTypes.number,
        image: PropTypes.string,
        description: PropTypes.string,
        inStock: PropTypes.bool,
        rating: PropTypes.number
    }).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onViewDetails: PropTypes.func.isRequired
};

export default ProductCard;
