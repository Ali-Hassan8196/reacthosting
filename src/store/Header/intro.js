import './intro.css'
import Me from "../../image/aliimage.png"

function Intro(){
    return(
        <div className="intromaindiv">
            <div className="leftdiv">
                <div className="ldivraper">

                    <h2 className="introhello">Hello, My name is
                    <br/> <h1>Ali Hassan</h1></h2>
                    {/* <h1 className="iname">Ali Hassan</h1> */}
                    <div className="introtitle">
                        <div className="ititleraper">
                            <div className="introitem">Web Developer</div>
                            <div className="introitem">HTML CSS JS</div>
                            <div className="introitem">React.js</div>
                            <div className="introitem">Responsive</div>
                            <div className="introitem">Mobile Friendly</div>

                        </div>
                    </div>
                    <div className="introdes">
                        <p className="aboutdata">
                    Welcome!!!!! Are you looking for a front-end web developer? Yes, You are at the right place.
                    I am a creative artist who takes a lot of pride in creating responsive and
                      impressive websites. Being a self-taught Web Developer, I've worked with 
                    many small to medium-sized businesses and helped them in creating their websites.
                    </p>
                    </div>
                </div>
                </div>
                
            <div className="rightdiv">
            <div className="imgbgdiv"></div>
                <img src={Me} alt="" className="image" />

            </div>            
        </div>
    )
}
export default Intro;