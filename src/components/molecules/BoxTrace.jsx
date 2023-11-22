import IconDistance from '../../assets/img/Width.svg'
import IconStart from '../../assets/img/Locationstart.svg'
import IconEnd from '../../assets/img/Locationend.svg'
import Mapa from '../../assets/img/mapa.png'

function BoxTrace({distance, start_coord, end_coord}) {
    return ( 
        <div className="box-trace">
            <div className="details">
                <div className="distance">
                    <h6 >Distancia</h6>
                    <div className="value">
                        <img src={IconDistance} alt="" />
                        <span className='number'>{distance}</span>
                        <span className='variable'> mtr</span>
                    </div>
                </div>
                <div className="start_location">
                    <label >Punto Inicial</label>
                    <div className="value">
                        <img src={IconStart} alt="" />
                        <span>{start_coord}</span>
                    </div>
                </div>
                <div className="end_location">
                    <label >Punto Final</label>  
                    <div className="value">
                        <img src={IconEnd} alt="" />
                        <span>{end_coord} mtr</span>
                    </div>                  
                </div>
            </div>

            <div className="map">
                {/* SOOY UN MAPAA */}
                <img src={Mapa} alt="" />
            </div>
        </div>
     );
}

export default BoxTrace;