import React from 'react';
import './styles.css'

export default function Login(){
    return(
        <div className="login container">
            <section className="form">
                <form>
                    <h1>Login de usuário</h1>
                    <input placeholder="Username" />
                    <input type="password" placeholder="Password" />
                    <button className="button" type="submit">Login</button>
                </form>
            </section>
        </div>
    )
}