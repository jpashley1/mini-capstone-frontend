import { useLoaderData } from "react-router-dom";

export function OrdersShow() {
  const order = useLoaderData();
  return (
<div id="ordershow">
      <h2>Your Order</h2>
      {/* {order.map((order) => ( */}
        <div key={order.id}>
          <h2>order#{order.id}</h2>
          <p>subtotal:      ${order.subtotal}</p>
          <p>tax:           ${order.tax}</p>
          <p>total:         ${order.total}</p>
        </div>
      {/* ))} */}
    </div>
  )
}