import ProductsGrid from './components/ProductsGrid'

async function getProducts(){
  try {
    const res = await fetch('https://fakestoreapi.com/products', {cache: 'no-store'})
    if(!res.ok) throw new Error('Failed to fetch')
    const data = await res.json()
    // duplicate data for fuller grid
    const dup = []
    for(let i=0;i<3;i++) dup.push(...data)
    return dup.slice(0,24)
  } catch(e) {
    console.error(e)
    return []
  }
}

export default async function Page(){
  const products = await getProducts()
  return (
    <>
      <section className="hero" style={{paddingTop:30}}>
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.</p>
      </section>

      <ProductsGrid initialProducts={products} />
    </>
  )
}
