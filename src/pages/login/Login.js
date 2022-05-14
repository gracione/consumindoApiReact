import React, { useEffect, useState } from "react";
import api from "../../services/api";

export default function Login() {
    const [user, setUser] = useState();

    useEffect(() => {
        api
            .get()
            .then((response) => setUser(response.data['0']?.id_usuario))
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <div>
            <form>
                {console.log(user)}
                <label>Email</label>
                <input></input>
                <label>Senha</label>
                <input></input>
                <button>Login</button>
            </form>
        </div>
    )
}