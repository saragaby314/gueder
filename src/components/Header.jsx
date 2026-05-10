import { useState } from "react";
import Logo from "./Logo"
import Button from "./Button";


function Header() {

const [isDark, setIsDark] = useState(false);

const handleToggle = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('dark-mode');
    }

    return (
        <div className={isDark ? 'dark-mode' : ''}>
            <Logo />
            <label className="checkbox-container">
                <input 
                    type="checkbox" 
                    onChange={handleToggle}
                    checked={isDark}
                />
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default Header;