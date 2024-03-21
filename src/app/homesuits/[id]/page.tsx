import CustomPaging from "@/components/product/components/CustomProductSlider";
import ProductDescription from "@/components/product/components/ProductDescription";
import { productsArray } from '../../../../data.js'

const item = productsArray[0]

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <>
      <div className='max-w-[1024px] my-0 mx-auto p-[10px]'>
        <div className='  md:flex md:gap-4 md:justify-center lg:gap-7'>

          <CustomPaging />
        <div className="md:max-w-[300px] lg:max-w-[400px] p-[10px]">

          <ProductDescription product={item} />
        </div>
      </div>
      </div>
    </>
  )
}
