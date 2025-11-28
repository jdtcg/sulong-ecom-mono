import { auth } from "@clerk/nextjs/server";

const TestPage = async () => {
  const {getToken} = await auth()
  const token = await getToken()

  const resProduct = await fetch('http://localhost:8000/test', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const productData = await resProduct.json();
  console.log(productData)

  const resOrder = await fetch('http://localhost:8001/test', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const orderData = await resOrder.json();
  console.log(orderData)
  
  const resPayment = await fetch('http://localhost:8002/test', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const paymentData = await resPayment.json();
  console.log(paymentData)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-4xl font-bold mb-8">Test Page</h1>
      <p className="text-lg text-gray-700">
        This is a test page for verifying the setup of the Sulong application.
      </p>
    </div>
  )
}

export default TestPage