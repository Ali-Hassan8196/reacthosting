
import './about.css';
import Aimage from '../image/aa.jpg'
import Awardimage from '../image/awards.jpg'
function About(){
    return(
        <div className='a'>
            <div className="aleft">
                <div className="acardbg"></div>
                <div className="acard">
                    <img src={Aimage} alt="" className='aimg' />

                
                </div>
            </div>
            <div className="aright">
         

         <div className="atitle">
             <h2>About Me</h2>
             <p className="apara">
             I am a full time web developer with experience 
             of more than 2 years in the development field.
             <br/>
             What you will get is a <b> Website </b>with
            
                 <ul>
                     <li>Attractive UI</li>
                     <li>Full Responsiveness</li>
                     <li>Mobile Friendly</li>
                     <li>Source Code, etc...</li>
                     
                 </ul>
             </p>
         </div>
              
            </div>
        </div>
    )
} export default About;


