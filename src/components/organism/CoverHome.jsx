import { useNavigate } from 'react-router-dom';
import '../../assets/css/sidebar.css'
import Caption from '../atoms/Caption';
import Title from '../atoms/Title';
import Swal from 'sweetalert2';
import { useAuth } from '../../context/AuthContext';
import { useEffect, useState } from 'react';

function CoverHome() {
    const { isUser } = useAuth();
    const navigate = useNavigate();

    // Verifica si ya hay un travelID almacenado en localStorage
    const storedTravelID = localStorage.getItem('travelID');
    const [isTravelActive, setIsTravelActive] = useState(!!storedTravelID);
    useEffect(() => {
        // Al montar el componente, verifica si ya hay un travelID almacenado
        setIsTravelActive(!!storedTravelID);
    }, [storedTravelID]);


    const handlerTravelAction = async (e) => {
        e.preventDefault();
        try {
            const url = isTravelActive ? 'https://api-securide.kmonito.com:5000/end-travel/' : 'https://api-securide.kmonito.com:5000/start-travel/';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${isUser.token}`,
                },
                body: JSON.stringify({
                    userId: isUser.usernameID,
                    travelId: localStorage.getItem('travelID'), // Asegúrate de tener el travelID almacenado
                }),
            };

            const response = await fetch(url, options);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if (data && data.message) {
                if (!isTravelActive) {
                    // Almacena el travelID en localStorage solo al iniciar el viaje
                    localStorage.setItem('travelID', data.travelID);
                } else {
                    // Borra el travelID al finalizar el viaje
                    localStorage.removeItem('travelID');
                }

                Swal.fire({
                    icon: 'success',
                    title: data.message,
                    showConfirmButton: false,
                    timer: 1500,
                }).then(() => {
                    navigate("/app/dashboard");
                });

                // Cambia el estado del viaje
                setIsTravelActive(!isTravelActive);
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
        }
    };

    return ( 
        <div className="container-home">
            <div className="cover">
                <Title text={"Bienvenido a"} textColor={"SecuRide"} />
                <Caption msn={"!Por que tu seguridad es nuestra prioridad¡"} />
                <button className="btn-start" onClick={handlerTravelAction}>
                    {isTravelActive ? 'Terminar viaje' : 'Iniciar viaje'}
                </button>
            </div>
        </div>
    );
}


export default CoverHome;