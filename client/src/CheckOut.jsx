import { Link } from "react-router-dom"


function CheckOut() {
  return (
    <div className="text-center mt-10 mx-10 p-8 bg-main rounded-2xl">
        <h1 className="font-bold text-5xl text-white sm:text-2xl">THANK YOU FOR YOUR ORDER</h1>
        <h3 className="text-xl text-white my-2 sm:text-base">we will keep you informed in you email when we have sent</h3>
        <div className="mt-8">
            <Link to={'/'} className="text-white border p-2  text-2xl sm:text-sm sm:p-1" >Back to homepage</Link>
        </div>
    </div>
  )
}

export default CheckOut