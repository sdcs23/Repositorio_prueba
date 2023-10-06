import background from "../assets/fondo_derecho.jpeg";
import { useState } from "react";
import { useAuth } from "../auth/AuthProvider";
import { Navigate} from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = useAuth();

    if (auth.isAuthenticated) {
        return <Navigate to="/Dashboard" />
    }
    const login = () => {
        fetch("http://localhost:3000/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        })
        .then((res) => res.json())
          .then((res) => {
            if(res.success === true){
                console.log('real');
            }else{
                console.log('falso');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      };

    return (
        <>
            <main>
                <div className="Container">
                    <div className="LeftSide">
                        <div className="Logo">
                            <div className="Square"></div>
                            <div className="Purple28">G</div>
                        </div>
                        <div className="Spacing35"></div>
                        <div className="Black32">Inicio De Sesión</div>
                        <div className="Gray16">¡Bienvenido! Por favor, inicia sesión para acceder a tu cuenta.</div>
                        <div className="Spacing25"></div>
                        <form className="Form">
                            <div className="FormGroup">
                                <div className="Black16Bold">Email</div>
                                <input className="Black16"
                                    type="email"
                                    value={email} onChange={(e) => setEmail(e.target.value)}
                                    name="email"
                                    placeholder="Correo Electrónico" required />
                            </div>
                            <div className="FormGroup">
                                <div className="Frame1">
                                    <div className="Black16Bold">Contraseña</div>
                                    <div className="Purple16">Olvidaste tu constraseña?</div>
                                </div>
                                <input className="Black16"
                                    type="password"
                                    value={password} onChange={(e) => setPassword(e.target.value)}
                                    name="password"
                                    placeholder="Contraseña" required />
                            </div>
                            <div className="RememberMe">
                                <input type="checkbox" name="RememberMe" id="check1" />
                                <label htmlFor="check1" className="Black16Bold">Recordarme</label>
                            </div>
                            <button type="button" className="Button" onClick={() => login()}>
                                <span className="White16Bold">Iniciar Sesión</span>
                            </button>
                        </form >
                        <div className="Spacing35"></div>
                        <div className="Register"><span className="Gray16Bold">BelumPunyaAkun?</span><span className="Purple16">aftarSekarang,
                            gratis!</span></div>
                        <div className="RightSide" style={{ backgroundImage: `url(${background})` }}>
                            <div className="Text1Rigth">NAMANYAJUGABELAJAR.IO</div>
                            <div className="Text2Rigth">Belajar secara online semakin mudah – tetep belajar walaupun pake kuota dari
                                Kemendikbud hehe~</div>
                        </div>
                    </div>
                </div>
            </main>
        </>

    );
}