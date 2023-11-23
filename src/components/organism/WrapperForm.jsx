import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import ReCAPTCHA from "react-google-recaptcha";
import Loader from "../atoms/Loader";
import { useAuth } from "../../context/AuthContext";

function WrapperForm() {
    const { sigin, isUser, isAuthenticated } = useAuth();
    useEffect(() => {
        if(isAuthenticated){
            console.log("Estados actualizados:", isAuthenticated, isUser);
        }
    }, [isUser, isAuthenticated]);
    

    const navigate = useNavigate()
    const [isActive, setIsActive] = useState(false);

    const recaptcha = useRef(null);
    const recaptchaReg = useRef(null);
    const [isValidateCaptcha, setIsValidateCaptcha] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const formReg = useRef();

    const changeRegister = (e) => {
        e.preventDefault();
        setIsActive(!isActive);
    };

    const handlerRegister = async (e) => {
        e.preventDefault();
        const registerForm = new FormData(formReg.current);
        // Muestra el loader
        setIsLoading(true);

        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    full_name: registerForm.get('full_name'),
                    emergency_number: registerForm.get('contact'),
                    weight: registerForm.get('weight'),
                    email: registerForm.get('email'),
                    password: registerForm.get('password'),
                }),
            };

            const response = await fetch('https://api-securide.kmonito.com:5000/create/', options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (data && data.message) {
                Swal.fire({
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    // Después de que SweetAlert se cierre, cambia el estado
                    setIsActive(!isActive);
                });
            } else if (data && data.error) {
                console.log(data.error);
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: data.error,
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                console.log('Respuesta del servidor inesperada:', data);
            }
        } catch (error) {
            console.error('Error de red o al procesar la respuesta:', error);
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: 'Ocurrió un error. Por favor, inténtelo de nuevo.',
                showConfirmButton: false,
                timer: 1500,
            });
        } finally {
            // Oculta el loader después de recibir la respuesta o en caso de error
            setIsLoading(false);
        }
    };

      const formLog = useRef();

      const handlerLogin = async (e) => {
        e.preventDefault();
        const loginForm = new FormData(formLog.current)
        try {
            console.log("El usuario no es un robot:", recaptcha.current.getValue());
                
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: loginForm.get('email'),
                    password: loginForm.get('password'),
                    recaptchaValue: isValidateCaptcha
                }),
                // credentials: 'include',
            }
            fetch('https://api-securide.kmonito.com:5000/login/', options) 
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                if (data && data.message) {
                    sigin(data);
                    // console.log("La autentificacion esta: ", isAuthenticated);
                    Swal.fire({
                        icon: 'success',
                        title: data.message,
                        showConfirmButton: false,
                        timer: 1500,
                    }).then(() => {
                        navigate("/app/home");
                    });
                    console.log(data);
                } else if (data && data.error) {
                    console.log(data.error);
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: data.error,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    console.log("Respuesta del servidor inesperada:", data);
                }
            })
            .catch((error) => {
                console.error("Error de red o al procesar la respuesta:", error);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Ocurrió un error. Por favor, inténtelo de nuevo.",
                    showConfirmButton: false,
                    timer: 1500,
                });
            });
            
        } catch (error) {
            console.log(error);
            Swal.fire({
                position: "center",
                icon: "error",
                title: error,
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    

    const onChangeRe = () => {
        setIsValidateCaptcha(recaptcha.current.getValue())
        // console.log(recaptcha.current.getValue())
    }

    return ( 
        <div className={`wrapper ${isActive ? "active" : ""}`}  style={{ transitionDelay: isActive ? "0" : "1.6s", height: isActive ? "80%" : "70%"}}>
            <span className="bg-animate"></span>
            <span className="bg-animate2"></span>

            {/* Loader */}
            {isLoading && <Loader />}

            <div className="form-box login">
                <h2 className="animation" style={{ "--i": 0, "--j":21 }}>Inicio de sesión</h2>
                <form ref={formLog}>
                    <div className="wrapper-input animation" style={{ "--i": 1, "--j":22 }}>
                        <input type="text"required  name="email" />
                        <label htmlFor="">Correo</label>
                        <i className='bx bx-envelope'></i>
                    </div>
                    <div className="wrapper-input animation" style={{ "--i": 2, "--j":23 }}>
                        <input type="password" required name="password" />
                        <label htmlFor="">Contraseña</label>
                        <i className='bx bx-lock-alt'></i> 
                    </div>
                    <div className="recaptcha animation" style={{ "--i": 3, "--j":24 }} >
                        <ReCAPTCHA ref={recaptcha} sitekey="6LfecBQpAAAAAF43ASGHHkNK9gUvHd3pCMdv8eJk" onChange={onChangeRe} />
                    </div>
                    <button className="btn animation" style={{ "--i": 3, "--j":24 }} onClick={handlerLogin}>Iniciar Sesión</button>
                    <div className="logreg-link animation" style={{ "--i": 4, "--j":25 }}>
                        <p>¿Aun no tienes una cuenta? <a href="" onClick={changeRegister} className={"link"}>Registrarse</a> </p>
                    </div>
                </form>
            </div>
            <div className="info-text login">
                <h2 className="animation" style={{ "--i": 0, "--j":20 }}>Bienvenido a <span>SecuRide</span></h2>
                <p className="animation" style={{ "--i": 1, "--j":21 }}>!Por que tu seguridad es nuestra prioridad¡</p>
            </div>

            <div className="form-box register">
                <h2 className="animation" style={{ "--i": 17, "--j":0 }}>Registro</h2>
                <form ref={formReg}>
                    <div className="wrapper-input animation" style={{ "--i": 18, "--j":1 }}>
                        <input type="text"required  name="full_name" />
                        <label htmlFor="">Nombre</label>
                        <i className='bx bx-user' ></i>
                    </div>
                    <div className="wrapper-input animation" style={{ "--i": 19, "--j":2 }}>
                        <input type="text"required  name="email" />
                        <label htmlFor="">Correo</label>
                        <i className='bx bx-envelope'></i>
                    </div>
                    <div className="wrapper-input animation" style={{ "--i": 20, "--j":3 }}>
                        <input type="password" required name="password" />
                        <label htmlFor="">Contraseña</label>
                        <i className='bx bx-lock-alt'></i> 
                    </div>
                    <div className="wrapper-input animation" style={{ "--i": 21, "--j":4 }}>
                        <input type="tel" required name="contact" id="" />
                        <label htmlFor="">Número de contacto de emergencia</label>
                        <i className='bx bxs-contact'></i>
                    </div>
                    <div className="wrapper-input animation" style={{ "--i": 21, "--j":4 }}>
                        <input type="number" required name="weight" />
                        <label htmlFor="">Peso (kg)</label>
                        <i className='bx bx-user' ></i>
                    </div>
                    
                    <div className="recaptcha animation" style={{ "--i": 22, "--j":5 }} >
                        <ReCAPTCHA ref={recaptchaReg} sitekey="6LfecBQpAAAAAF43ASGHHkNK9gUvHd3pCMdv8eJk" onChange={onChangeRe} />
                    </div>
                    <button className="btn animation" style={{ "--i": 22, "--j":5 }} onClick={handlerRegister}>Registrarse</button>
                    <div className="login-link animation" style={{ "--i": 23, "--j":6 }}>
                        <p>¿Ya tienes una cuenta? <a href="" onClick={changeRegister} className={"link"}>Iniciar Sesión</a> </p>
                    </div>
                </form>
            </div>
            <div className="info-text register">
                <h2 className="animation" style={{ "--i": 17, "--j":0 }}>Bienvenido a <span>SecuRide</span></h2>
                <p className="animation" style={{ "--i": 18, "--j":1 }}>!Por que tu seguridad es nuestra prioridad¡</p>
            </div>
        </div>
     );
}

export default WrapperForm;