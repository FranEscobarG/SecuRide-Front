import '../../assets/css/sidebar.css'
import Caption from '../atoms/Caption';
import Title from '../atoms/Title';

function CoverHome() {
    return ( 
        <div className="container-home">
            <div className="cover">
                <Title text={"Bienvenido a"} textColor={"SecuRide"} />
                <Caption msn={"!Por que tu seguridad es nuestra prioridad¡"} />
                <button className="btn-start">Iniciar viaje</button>
            </div>
        </div>
     );
}

export default CoverHome;