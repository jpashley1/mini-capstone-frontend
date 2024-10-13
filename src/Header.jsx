import { Link } from "react-router-dom";
import { LogoutLink } from './LogoutLink'


  console.log(localStorage.jwt)
  let authenticationLinks;
  if (localStorage.jwt === undefined) {
    // logged out    
    authenticationLinks = (
      <>
      <Link to="/login">Login</Link> |
      <Link to="signup">Signup</Link>
      </>
    )
  }  else {
    // logged in    
    authenticationLinks = (
      <LogoutLink />
    )
  }
export function Header() {
  return (
    <header>
      <nav>
      <Link to="/">Home</Link> | <Link to="/products/new">Create Listing</Link> | {authenticationLinks}
      | <Link to="/my_cart">Cart</Link>
      </nav>
      
    </header>
  )
}