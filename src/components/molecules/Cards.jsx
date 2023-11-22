import IconSpeed from '../../assets/img/Speed.svg'
import IconDistance from '../../assets/img/Width.svg'
import IconCalories from '../../assets/img/Calories.svg'
import Card from '../atoms/Card';

function Cards() {
    const dataCards = [
        {
            title: "Velocidad Promedio",
            // barValue: 75
            value: 35,
            var: "k/h",
            icon: IconSpeed,
            text: "Promedio de velocidad sobre todos tus viajes",
            series: {   // DATOS DE LA GRAFICA
                name: "Velocidad",
                data: [20, 15, 25, 27, 22, 30, 19],
            }
        },
        {
            title: "Distancia Promedio",
            // barValue: 75
            value: 375,
            var: "m",
            icon: IconDistance,
            text: "Distanca recorrida en promedio sobre todos tus viajes",
            series: {   // DATOS DE LA GRAFICA
                name: "Distancia",
                data: [100, 123, 80, 92, 300, 215, 284],
            }
        },
        {
            title: "Calorias Promedio",
            // barValue: 75
            value: 2820,
            var: "kcal",
            icon: IconCalories,
            text: "Calorias quemadas en promedio sobre todos tus viajes",
            series: {   // DATOS DE LA GRAFICA - deberian ser los de la API
                name: "Calorias",
                data: [1000, 890, 1600, 1454, 1800, 1200, 1537],
            }
        },
    ];

    return ( 
        <div className="cards">
            {
                dataCards.map((card, index) => (
                    <div className="parent-container" key={index} >
                        <Card
                            title={card.title}
                            value={card.value}
                            vari={card.var}
                            icon={card.icon}
                            text={card.text}
                            series={card.series}
                        />
                    </div>
                ))
            }
        </div>
     );
}

export default Cards;