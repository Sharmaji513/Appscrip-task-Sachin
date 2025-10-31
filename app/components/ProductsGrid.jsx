'use client'
import { useState, useMemo } from 'react'
import ProductCard from './ProductCard'
import Filters from './Filters'

export default function ProductsGrid({initialProducts}) {
  const [selectedCats, setSelectedCats] = useState([])
  const [priceRange, setPriceRange] = useState('all')
  const [query, setQuery] = useState('')
  const [wishlist, setWishlist] = useState([])
  const [showFilter, setShowFilter] = useState(true)

  // derive categories
  const categories = useMemo(() => {
    const set = new Set(initialProducts.map(p => p.category))
    return Array.from(set)
  }, [initialProducts])

  function toggleWishlist(id){
    setWishlist(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id])
  }

  const filtered = useMemo(() => {
    return initialProducts.filter(p=>{
      // category filter
      if(selectedCats.length && !selectedCats.includes(p.category)) return false
      // price filter
      if(priceRange==='under1000' && p.price>=1000) return false
      if(priceRange==='1000to3000' && (p.price<1000 || p.price>3000)) return false
      if(priceRange==='above3000' && p.price<=3000) return false
      // search
      if(query && !p.title.toLowerCase().includes(query.toLowerCase())) return false
      return true
    })
  }, [initialProducts, selectedCats, priceRange, query])

  return (
    <div>
      <div className="controls" style={{marginTop:18}}>
        <div className="left">
          <div style={{fontWeight:700}}>3425 ITEMS</div>
        </div>
        <div className="right">
          <button className="filter-toggle" onClick={() => setShowFilter(!showFilter)}>{showFilter ? 'HIDE FILTER' : 'SHOW FILTER'}</button>
          <select aria-label="Sort by" style={{padding:8,borderRadius:6,border:'1px solid #eee',marginLeft:12}}>
            <option>RECOMMENDED</option>
            <option>NEWEST FIRST</option>
            <option>PRICE: LOW TO HIGH</option>
          </select>
        </div>
      </div>

      <div style={{display:'flex',gap:28,marginTop:18}}>
        {showFilter && (
          <aside style={{width:260}}>
            <Filters categories={categories} selectedCats={selectedCats} setSelectedCats={setSelectedCats} priceRange={priceRange} setPriceRange={setPriceRange} />
          </aside>
        )}

        <main style={{flex:1}}>
          <div style={{marginTop:8}} className="products-grid" role="list">
            {filtered.map(p => (
              <ProductCard key={p.id + '-' + Math.random()} product={p} onToggleWishlist={toggleWishlist} isWish={wishlist.includes(p.id)} />
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}
