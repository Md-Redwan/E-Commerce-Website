import Container from '../Component/Container'
import Header from '../Component/Header'
import NavBar from '../Component/NavBar'

const Cart = () => {
  return (
    <div>
      <Header/>
      <NavBar/>
      <Container>
        <p className="mt-20 text-[#7D8184] text-[14px] leading-[21px]">
          Home / {" "}
          <span className="text-black">Cart</span>
        </p>
        <div className='font-[poppins] leading-6 mt-20 flex justify-between rounded-sm shadow-sm py-6 px-10'>
            <h1>Product</h1>
            <h1>Price</h1>
            <h1>Quantity</h1>
            <h1>Subtotal</h1>
        </div>
        <div>
            
        </div>
      </Container>
    </div>
  )
}

export default Cart
