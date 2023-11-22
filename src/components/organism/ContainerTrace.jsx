import Caption from "../atoms/Caption";
import BoxTrace from "../molecules/BoxTrace";

function ContainerTrace() {
    const data_trace = [
        {
            distance: '275', 
            start_coord: `16°37′19″N 93°06′17″O`,
            end_coord: `16°45′2″N 93°5′29″W`,
        },
        {
            distance: '300', 
            start_coord: `16°37′19″N 93°06′17″O`,
            end_coord: `16°45′2″N 93°5′29″W`,
        },
        {
            distance: '280', 
            start_coord: `16°37′19″N 93°06′17″O`,
            end_coord: `16°45′2″N 93°5′29″W`,
        },
    ]

    return ( 
        <div className="container-trace">
            <Caption msn={"Rutas de mis viajes"} />
            {
                data_trace.map((trace, index) => (
                    <BoxTrace key={index} distance={trace.distance} start_coord={trace.start_coord} end_coord={trace.end_coord} />
                ))
            }
        </div>
     );
}

export default ContainerTrace;