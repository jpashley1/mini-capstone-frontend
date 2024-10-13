import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

export function MyCart() {
  const cartedProducts = useLoaderData();
  
  const navigate = useNavigate();

  const handleOrdersCreate = () => {
    axios
      .post("http://localhost:3000/orders.json")
      .then((response) => {
        console.log(response)
        navigate(`/orders/${response.data.id}`);
      })

      .catch((error) => {
        // Handle any errors here
        console.error("There was an error creating the order!", error);
      });
  };

  return (
    <div>
      <p>The items in my shopping cart:</p>
      {cartedProducts.map((cp) => (
        <div key={cp.id}>
          <p>Name: {cp.product.name}</p>
          <p>Price: {cp.product.price}</p>
          <p>Quantity: {cp.quantity}</p>
          <hr />
        </div>
      ))}
      <div>
        <button onClick={handleOrdersCreate}>Purchase</button>
      </div>
    </div>
  );
}
