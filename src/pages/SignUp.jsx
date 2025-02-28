import React from 'react';
import { Link } from 'react-router-dom';

function SignUp() {
    const [formState, setFormState] = React.useState({
        username: '',
        email: '',
        password: '',
    })

    function handleChange(e) {
        const changedFieldName = e.target.name;

        setFormState({
            ...formState,
            [changedFieldName]: e.target.value,
        });
    }

    async function onFormSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/register', {
                email: formState.email,
                password: formState.password,
                username: formState.username,
            });
            console.log(response.data);

        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
      <h1>Registreren</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
        harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
        doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
        <form onSubmit={onFormSubmit}
              className="signup-form">
            <label htmlFor="username">
                Titel:
                <input
                    type="text"
                    id="username"
                    name="username"
                    onChange={handleChange}
                    required/>
            </label>
            <label htmlFor="email">
                Titel:
                <input
                    type="text"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    required/>
            </label>
            <label htmlFor="password">
                Titel:
                <input
                    type="password"
                    id="password"
                    name="password"
                    onChange={handleChange}
                    required/>
            </label>
        </form>
        <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>
    </>
  );
}

export default SignUp;