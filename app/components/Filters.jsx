'use client'
import { useState } from 'react'

export default function Filters({categories, selectedCats, setSelectedCats, priceRange, setPriceRange}) {
  const [openSections, setOpenSections] = useState({
    customizable: true, ideal: true, occasion: false, work: false, fabric:false, segment:false, suitable:false, raw:false, pattern:false
  })

  function toggleSection(name){
    setOpenSections(prev => ({...prev, [name]: !prev[name]}))
  }

  function onCategoryChange(cat){
    if(selectedCats.includes(cat)){
      setSelectedCats(selectedCats.filter(c => c !== cat))
    } else {
      setSelectedCats([...selectedCats, cat])
    }
  }

  return (
    <div>
      <div className="filters-card">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <strong>Filters</strong>
          <button style={{background:'transparent',border:'none',color:'#999'}}>Clear</button>
        </div>

        <div style={{marginTop:12}}>
          <label><input type="checkbox" /> CUSTOMIZABLE</label>
        </div>

        <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection('ideal')}>
            <span>IDEAL FOR</span>
            <span>{openSections.ideal ? '−' : '+'}</span>
          </div>
          {openSections.ideal && (
            <div style={{marginTop:10,display:'flex',flexDirection:'column',gap:8}}>
              <label><input type="checkbox" /> Men</label>
              <label><input type="checkbox" /> Women</label>
              <label><input type="checkbox" /> Baby & Kids</label>
            </div>
          )}
        </div>

        <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection('occasion')}>
            <span>OCCASION</span>
            <span>{openSections.occasion ? '−' : '+'}</span>
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection('fabric')}>
            <span>FABRIC</span>
            <span>{openSections.fabric ? '−' : '+'}</span>
          </div>
        </div>

        <div className="filter-section">
          <div className="filter-header" onClick={() => toggleSection('pattern')}>
            <span>PATTERN</span>
            <span>{openSections.pattern ? '−' : '+'}</span>
          </div>
        </div>

      </div>
    </div>
  )
}
