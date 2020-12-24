

import Styled from "./Footer.module.css"
const Footer = () => (
    <div>
        <div className="div1">
            <h1>Div 1 Without Styled component</h1>
        </div>
        <div className={Styled.div2}>
            <h1>Div 2 With Styled component</h1>
        </div>
        <h1>Footer</h1>
    </div>
)

export default Footer;
