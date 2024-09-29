import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export function CreateProduct() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault()
    // console.log('handling submit')
    // make params dynamic
    const params = new FormData(event.target)  
    axios.post("http://localhost:3000/products.json", params).then(response => {
      console.log(response.data)
      // window.location.href = "/"
      navigate('/');
      
    }) 
    // props.onCreate(params, () => event.target.reset());
    }
  
    return (
      <div id="products-create">
        <h1>Create Listing</h1>
        <form onSubmit={handleSubmit}>
          <div>
            product name: <input name="name" type="text" />
          </div>
          <div>
            price: <input name="price" type="text" />
          </div>
          <div>
            description: <input name="description" type="text" />
          </div>
          <div>
            stock: <input name="stock" type="text" />
          </div>
          <div>
            supplier: <input name="supplier_id" type="text" />
          </div>
          <button id="Create-Listing" type="submit">Create Listing</button>
        </form>
      </div>
    );
  }