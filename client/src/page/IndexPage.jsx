import { Link } from "react-router-dom"
import Footer from "../Footer"

function IndexPage() {
  return (
    <>
      <div className="bg-[url('./assets/women.webp')] bg-image">
        <div className="text-head text-secondary sm:ms-16 md:ms-24">
          <h1 className="font-bold text-6xl sm:text-4xl">GAMING ACCESSORIES</h1>
          <h2 className="text-3xl sm:text-xl">Life is too short to play a bad gaming accessories</h2>
          <h3 className="text-3xl sm:text-xl">Let me help you</h3>
          <div className="mt-6">
            <Link to={'/allproduct'} className="border border-white py-5 px-16 font-bold hover:bg-secondary hover:text-main">SHOP NOW</Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 md:grid-cols-1">
        <div className="bg-[url('./assets/headphone.webp')] bg-image-2 relative flex justify-center">
        <div className="absolute top-[320px]">
            <Link to={'/allproduct'} className="border border-white py-4 px-10 bg-white font-light hover:bg-secondary hover:text-main">SHOP NOW</Link>
        </div>
        </div>
        <div className="bg-[url('./assets/mouse.webp')] bg-image-2 relative flex justify-center">
        <div className="absolute top-[320px]">
            <Link to={'/allproduct'} className="border border-white py-4 px-10 bg-white font-light hover:bg-secondary hover:text-main">SHOP NOW</Link>
        </div>
        </div>
        <div className="bg-[url('./assets/joystick.webp')] bg-image-2 relative flex justify-center">
        <div className="absolute top-[320px]">
            <Link to={'/allproduct'} className="border border-white py-4 px-10 bg-white font-light hover:bg-secondary hover:text-main">SHOP NOW</Link>
        </div>
        </div>
      </div>

      <div className="bg-[url('https://cdn.pixabay.com/photo/2017/05/08/02/22/game-2294201_1280.jpg')] bg-image-3 flex justify-center items-center">
        <div>
            <Link to={'/addproduct'} className="border border-white py-4 px-[200px] bg-white font-light md:px-[100px] sm:px-[calc(10px+5vw)]">MAKE YOUR PRODUCT WITH US</Link>
        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default IndexPage