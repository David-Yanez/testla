import { ProductGrid, Title } from "@/components"
import { Categoryy } from "@/interfaces"
import { initialData } from "@/seed/seed"
import { notFound } from "next/navigation"

const seedProducts = initialData.products

interface Props{
    params:{
        id: Categoryy
    } 
}

export default function Category ({params}: Props){

   const {id} = params
   const products = seedProducts.filter(product => product.gender === id)
  /*  if(id === 'kids'){
        notFound()
    }
*/
    const labels: Record<Categoryy, string> = {
        'men': 'para Hombres',
        'women': 'para Mujeres',
        'kid': 'para Niños',
        'unisex': 'para Todos'
    }

    return(
        <>
          
            <Title
      title={`Articulos de ${labels[id]}`}
      subtitle="Todos los productos"
      className="mb-2"
      />

      <ProductGrid
      products={products}
      />
        </>
    )
}