import axios from "axios";
import { useState } from "react";

export function SignupPage() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordStatus, setPasswordStatus] = useState("");

  const validatePassword = (value) => {
    const uppercasePattern = /[A-Z]/;
    const specialCharacterPattern = /[!@#$%^&*(),.?":{}|<>]/;

    if (!uppercasePattern.test(value)) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!specialCharacterPattern.test(value)) {
      return 'Password must contain at least one special character.';
    }
    return '';
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);

    // Update validation status
    if (value.length === 0) {
      setPasswordStatus("");
    } else {
      const validationError = validatePassword(value);
      if (validationError) {
        setPasswordStatus(validationError);
      } else {
        setPasswordStatus("Password is valid.");
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    setPasswordError('');

    // Validate password
    const validationError = validatePassword(password);
    if (validationError) {
      setPasswordError(validationError);
      return; // Prevent submission if there's a validation error
    }

    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
        {passwordError && <li style={{ color: 'red' }}>{passwordError}</li>}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          username: <input 
            name="name" 
            type="text" 
            value={name} 
            maxLength={25}
            onChange={(event) => setName(event.target.value)} 
          />
          <small>{25 - name.length} characters remaining</small>
        </div>
        <div>
          email: <input name="email" type="email" />
        </div>
        <div>
          password: <input 
            name="password" 
            type="password" 
            value={password} 
            onChange={handlePasswordChange} 
          />
          <small>{passwordStatus}</small>
        </div>
        <div>
          password confirmation: <input 
            name="password_confirmation" 
            type="password" 
            value={passwordConfirmation} 
            onChange={(event) => setPasswordConfirmation(event.target.value)} 
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}
