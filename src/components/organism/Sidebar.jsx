import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import IconHome from '../../assets/img/home.svg'
import IconDashb from '../../assets/img/dashboard.svg'
import IconTrace from '../../assets/img/trace.svg'
import IconLogout from '../../assets/img/logout.svg'
import LogoSecuride from '../../assets/img/securideTransparent.png'
import IconUser from '../../assets/img/Userrojo.svg'
import IconUser2 from '../../assets/img/Usernaranja.svg'
import { useAuth } from '../../context/AuthContext'
import '../../assets/css/sidebar.css'

function Sidebar({children}) {
    const { logout } = useAuth();
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: "/app/home",
            name: "Home",
            icon: <img src={IconHome} alt="Icono Home" />
        },
        {
            path: "/app/dashboard",
            name: "Dashboard",
            icon: <img src={IconDashb} alt="Icono dashboard" />
        },
        {
            path: "/app/trace",
            name: "Rastro",
            icon: <img src={IconTrace} alt="Icono trace" />
        },
        {
            path: "/",
            name: "Log out",
            icon: <img src={IconLogout} alt="Icono logout" />
        },
    ]

    return ( 
        <div className="flex-container">
            <div className={`sidebar ${isOpen ? "" : "closed"}`} > {/* onMouseOver={toggle} */}
                <div className="top_section">
                    <img style={ {display: isOpen ? "block" : "none"} } src={LogoSecuride} alt="Logo de securide" className="logo" />
                    <i className='bx bx-menu' onClick={toggle}></i>
                </div>
                {
                    menuItem.map((item, index) => (
                        (index != 3) ? 
                        <NavLink style={ {paddingLeft: isOpen ? "15%" : "20%", marginLeft: isOpen ? "1.5rem" : "1rem"} } to={item.path} key={index} className={"link"} activeclassname="active">
                            <div className="icon">{item.icon}</div>
                            <div style={ {display: isOpen ? "block" : "none"} } className="link_text">{item.name}</div>
                        </NavLink>
                        : 
                        <NavLink style={ {paddingLeft: isOpen ? "15%" : "20%", marginLeft: isOpen ? "1.5rem" : "1rem"} } to={item.path} key={index} className={"link logout"} activeclassname="active" onClick={logout}>
                            <div className="icon">{item.icon}</div>
                            <div style={ {display: isOpen ? "block" : "none"} } className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            <div className='container-page'>
                <div className="navbar">
                    <span className="username">My username</span>
                    <img src={IconUser2} alt="Icono de usuario" />
                </div>
                <main>{children}</main>
            </div>
            {/* <Footer/> */}
            
        </div>
     );
}

export default Sidebar;