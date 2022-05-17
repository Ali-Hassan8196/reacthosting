import './productcard.css';
import web5 from '../../image/web5.jpg';

function Productcardssss(img,link){
    return(
        <div className='p'>
            <div className="pbrowser">
                <div className="pcircle"></div>
                <div className="pcircle"></div>
                <div className="pcircle"></div>
            </div>
            <a href={link} target="_blank" 
            rel='noreferrer' >
                <img src={web5} alt="image" 
                className='pimage' />

            </a>
        </div>
    )
}
export default Productcardssss;