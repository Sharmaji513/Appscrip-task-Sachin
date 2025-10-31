'use client'
import { FaRegHeart } from 'react-icons/fa'

export default function ProductCard({product, onToggleWishlist, isWish}) {
  return (
    <article className="card" role="listitem" aria-label={product.title}>
      <div className="img-wrap">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="product-title">{product.title}</div>
      <div className="product-sub">Sign in or Create an account to see pricing</div>
      <div className="card-meta">
        <div style={{fontWeight:700}}>₹{product.price}</div>
        <button className="wishlist" onClick={() => onToggleWishlist(product.id)} aria-pressed={isWish}>
          <FaRegHeart color={isWish ? '#ff6b6b' : '#666'} />
        </button>
      </div>
    </article>
  )
}
