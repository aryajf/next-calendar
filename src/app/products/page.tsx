import Card from '@/components/product/Card'

async function getData(){
  const res = await fetch('https://fakestoreapi.com/products',{
    cache: 'no-store'
  })
  return res.json()
}

export default async function Home() {
  const products = await getData()
  console.log(products)
  return (
    <>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center gap-3 my-3'>
        {products.length > 0 && 
          products.map((product:any) => (
            <Card key={product.id} product={product} />
          ))
        }
      </div>
    </>
  )
}
