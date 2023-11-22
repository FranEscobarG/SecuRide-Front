import { useState } from "react";
import { LayoutGroup, motion } from "framer-motion";
import ReactApexChart from "react-apexcharts";
import IconClose from '../../assets/img/Close.svg'

function Card({title, value, vari, icon, text, series}) {
    const [expanded, setExpanded] = useState(false);
    /*<ExpandedCard/>*/
    return ( 
        <LayoutGroup>
        {expanded ? (
            <ExpandedCard title={title} value={value} vari={vari} icon={icon} text={text} series={series}
            setExpanded={()=>setExpanded(false)} />
        ) : (
            <CompactCard title={title} value={value} vari={vari} icon={icon} text={text} series={series}
                setExpanded={()=>setExpanded(true)} />
        )}
        </LayoutGroup>
     );
}

function CompactCard({ title, value, vari, icon, text, series, setExpanded }) {
    return (
      <motion.div layoutId="compact-card" className={`compactCard ${series.name}`} onClick={setExpanded}>
        <h4 className="title">{title}</h4>
        <div className="detail">
          <img src={icon} alt="" />
          <span className="value">{value}</span>
          <span className="variable">{vari}</span>
        </div>
        <p>{text}</p>
      </motion.div>
    );
}

function ExpandedCard({ title, value, vari, icon, text, series, setExpanded }) {
    const [data, setData] = useState({
        options: {
          chart: {
            height: "auto",
            type: 'line',
            background: 'transparent', // Fondo transparente
            foreColor: '#fff', // Color de las etiquetas y los ejes
          },
          dropShadow: {
            enabled: false,
            enabledOnSeries: undefined,
            top: 0,
            left: 0,
            blur: 3,
            color: "#000",
            opacity: 0.35,
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            curve: 'straight',
            width: 4, // Ancho de la línea
            colors: ['#008900'], // Color de la línea
          },
          grid: {
            row: {
              colors: ['#ccccccb2', 'transparent'],
              opacity: 0.5,
            },
          },
          xaxis: {
            categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep'],
            labels: {
              style: {
                
                colors: '#fff', // Color de las etiquetas en el eje x
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                color: '#fff', // Color de las etiquetas en el eje y
              },
            },
          },
          tooltip: {
            theme: 'dark', // Cambiar a 'light' si prefieres un fondo más oscuro
            style: {
              fontSize: '14px',
              color: '#fff',
            },
          },
          markers: {
            colors: ['#cccccc'], // Cambiar el color del punto
          },
        },
      });
    
      return (
        <motion.div layoutId="expanded-card" className={`expandedCard ${series.name}`}>
          <div className="btn-close">
            <img src={IconClose} alt="close" onClick={setExpanded} />
          </div>
          <h4 className="title">{title}</h4>
          <div className="chartContainer">
            <ReactApexChart options={data.options} series={[series]} type="line" />
          </div>
        </motion.div>
      );
}

export default Card;