import Hero from "@/components/Hero"
import Brands from "@/components/Brands"
import FeaturedProducts from "@/components/Featured"
import Categories from "@/components/Topcategories"
import Popular from "@/components/Popularstyles"
import OurProducts from "@/components/HomeProducts"

export default function Home(){
    return (
        <>
        <Hero/>
        <Brands/>
        <FeaturedProducts/>
        <Categories/>
        <Popular/>
        <OurProducts/>
        </>
    )
}