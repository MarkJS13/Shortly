import Nav from "./Hero/Nav";
import Display from "./Hero/Display";

const Hero = (props) => {
    
    return(
        <div className="hero">
            <Nav setToggle={props.setToggle}/>
            <Display/>
        </div>
    )
}

export default Hero;