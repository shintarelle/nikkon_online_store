'use client'
import MainSlider from "@/components/mainSlider/MainSlider";
import NewCollection from "@/components/newCollection/NewCollection";
import Products from "@/components/products/new/Products";

export default function Home() {
  return (
    <>
      <MainSlider />
      <NewCollection />
      <Products title='новинки' type='new'/>
      <Products title='топ продаж' type='top'/>
      <Products title='распродажа' type='sale' />

    </>
  );
}
