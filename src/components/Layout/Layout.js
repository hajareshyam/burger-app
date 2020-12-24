import classes from './Layout.module.css'
import Aux from "../../hoc/Aux";
import Footer from "../Footer/Footer"
import Header from "../Header/Header"

const layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, Sidebar, Backdrop</div>
            <main className={classes.Content}>
                {props.children}
            </main>
        </Aux>
    )
}

export default layout;