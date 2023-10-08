import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

function Footer() {

  return (
    <footer>
      <div className="h-[auto] w-full bg-black md:py-10 border-b py-20">
        <div className="grid grid-cols-[1fr,2fr,1fr] md:grid-cols-1 text-white  h-full">

            <div className="flex items-center">
              <div className="mx-auto">
                <h2 className="font-black text-xl text-center mb-2">CONTACT US</h2>
                <input type='email' className="text-black rounded-none p-2" placeholder="tanonchai@gmail.com"/>
              </div>
            </div>

            <div className="flex items-center">
              <div className="grid grid-cols-3 w-full ms-8 md:grid-cols-1">
                <div className="md:hidden">
                  <p className="hover:text-primary cursor-pointer">Help Center</p>
                  <p className="hover:text-primary cursor-pointer">Warranty</p>
                  <p className="hover:text-primary cursor-pointer">Product Help</p>
                  <p className="hover:text-primary cursor-pointer">Order Status</p>
                </div>
                <div className="md:hidden ">
                  <p className="hover:text-primary cursor-pointer">Bulk Orders</p>
                  <p className="hover:text-primary cursor-pointer">Recycling Help</p>
                </div>
                <div className="md:hidden">
                  <p className="hover:text-primary cursor-pointer">About</p>
                  <p className="hover:text-primary cursor-pointer">Careers</p>
                  <p className="hover:text-primary cursor-pointer">Contact Us</p>  
                </div>
              </div>
            </div>
            
            <>
            <div className="w-full text-white hidden md:block md:my-14">
              <div className="py-2 border-y">
                <div className="flex justify-between items-center mx-[20px]">
                    <div className="font-light">SUPPORT</div>
                    <div className="text-2xl">+</div>
                </div>
              </div>
              <div className="py-2 border-y">
                <div className="flex justify-between items-center mx-[20px]">
                    <div className="font-light">OFFER</div>
                    <div className="text-2xl">+</div>
                </div>
              </div>
              <div className="py-2 border-y">
                <div className="flex justify-between items-center mx-[20px]">
                    <div className="font-light">ABOUT US</div>
                    <div className="text-2xl">+</div>
                </div>
              </div>
            </div>
            </>

            <div className="flex column items-center justify-center">
              <div>
                <h2 className="font-black text-xl mb-2 text-center">FOLLOW US</h2>
              <div className="flex justify-center gap-5">
                <div><FaSquareFacebook className="w-10 h-10 hover:text-primary cursor-pointer"/></div>
                <div><FaYoutube className="w-10 h-10 hover:text-primary cursor-pointer"/></div>
                <div><FaSquareTwitter className="w-10 h-10 hover:text-primary cursor-pointer"/></div>
                <div><AiFillInstagram className="w-10 h-10 hover:text-primary cursor-pointer"/></div>
              </div>
              </div>
            </div>
        </div>
      </div>
      <div className="bg-black text-center">
          <p className="text-gray-200 font-light p-2 text-sm">© 2023 Create by Tanonchai Srikawe</p>
        </div>
    </footer>
  )
}

export default Footer