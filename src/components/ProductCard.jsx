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
        inStock
    } = product;

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

                {/* แสดงส่วนลด (ถ้ามี) */}
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

// ✅ ปรับปรุง PropTypes ให้ละเอียดขึ้นด้วย shape()
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
