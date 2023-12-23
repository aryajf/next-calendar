import Image from 'next/image'
import Link from 'next/link'
export default function Card({ product }: any) {
  return (
    <>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Link href="/products/[id]" as={`/products/${product.id}`}>
              <Image width={500} height={500} className="rounded-t-lg m-auto block w-48 h-48" src={product.image} alt={product.title} />
          </Link>
          <div className="p-5">
              <Link href="/products/[id]" as={`/products/${product.id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">{product.title}</h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate">{product.description}</p>
              <Link href="/products/[id]" as={`/products/${product.id}`} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
              </Link>
          </div>
      </div>
    </>
  )
}