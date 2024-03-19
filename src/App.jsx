import { useState } from 'react';
import './App.css';

function MyForm() {
  const [inputs, setInputs] = useState({});
  const [textarea, setTextarea] = useState(
    'the content of a textarea goes in the value attribute'
  );

  const handleUserChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleUserSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  };

  const handleTextChange = (event) => {
    setTextarea(event.target.value);
  };

  return (
    <>
      <h1>Absolute px vs rem em relative h1 default is 2em or 32px</h1>
      <p>
        What is default for p using default browser 16px or 1em <br />
        <a href="#">Click me</a>
      </p>
      <form onSubmit={handleUserSubmit}>
        <label>
          Enter your name:
          <input
            type="text"
            name="username"
            value={inputs.username || ''}
            onChange={handleUserChange}
          />
        </label>
        <p />
        <label>
          Enter your age:
          <input
            type="number"
            name="age"
            value={inputs.age || ''}
            onChange={handleUserChange}
          />
        </label>
        
      </form>
      <p />
      <form>
        <textarea value={textarea} onChange={handleTextChange} />
      </form>
      <p />
      <input type="submit" />
    </>
  );
}

export default MyForm;
