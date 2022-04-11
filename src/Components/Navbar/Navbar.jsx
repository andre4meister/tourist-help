import c from './Navbar.module.css'
import {NavLink} from "react-router-dom";
const Navbar = () => {
    return (
        <div className={c.nav}>
            <div className={c.course}>
                <NavLink to={'/first-course'}>Перший курс</NavLink>
            </div>
            <div className={c.course}>
                <NavLink to={'/second-course'}>Другий курс</NavLink>
            </div>
            <div className={c.course}>
                <NavLink to={'/third-course'}>Третій курс</NavLink>
            </div>
            <div className={c.course}>
                <NavLink to={'/fourth-course'}>Четвертий курс</NavLink>
            </div>
        </div>
    )
}
export default Navbar;