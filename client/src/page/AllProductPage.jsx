import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import SearchFilter from 'react-filter-search';
import Footer from "../Footer";




function AllProductPage() {
        const [dataProducts,setDataProducts] = useState([]);
        const [search,setSearch] = useState('');
        
    useEffect(()=>{
        axios.get('/product').then(res=>
            setDataProducts(res.data))
    },[])
    
  return (
    <>
    <div className="mx-5 " id="allproduct">
        <h2 className="font-extrabold text-6xl my-16  text-center sm:text-4xl">EXPLORE PRODUCTS</h2>
        <div className="mx-auto max-w-7xl">
            <input type="search" placeholder="Search" value={search} onChange={(e)=> setSearch(e.target.value)}/>
        </div>
        <div className="flex justify-evenly flex-wrap gap-10 my-20">
            <SearchFilter 
                    value={search}
                    data={dataProducts}
                    renderResults={dataProducts => (dataProducts.length > 0 && dataProducts.map(items => (
                                    <Link to={'/detail/'+items._id} key={items._id}>
                                        <div className="img">
                                            <img src={'http://localhost:5500/'+items.picture} className="img-set h-full"/>
                                        </div>
                                        <h2 className="text-center text-lg my-1">{items.nameProduct}</h2>
                                        <h3 className="text-center font-bold text-2xl">$ {items.price}</h3>
                                        <div className="text-center grid gap-2">
                                        <button className="border border-black py-1 px-3 mt-1 hover:bg-black hover:text-white">View Detail</button>
                                        </div>
                                    </Link>
                            )))}
                />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default AllProductPage