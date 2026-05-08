import Logo from "./Logo"
import Button from "./Button"

function Header() {

    return (
        <>
            <Logo className="rojo" /> 
            <Button className="rojo">Tiempo</Button>
            <Button className="verde">Polen</Button>
            <Button>Aire</Button>
        </>)

}

export default Header;