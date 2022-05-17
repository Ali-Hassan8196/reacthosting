import './productcard.css';
import web4 from '../../image/web4.jpeg';

function Productcardsss(img,link){
    return(
        <div className='p'>
            <div className="pbrowser">
                <div className="pcircle"></div>
                <div className="pcircle"></div>
                <div className="pcircle"></div>
            </div>
            <a href={link} target="_blank" 
            rel='noreferrer' >
                <img src={web4} alt="image" 
                className='pimage' />

            </a>
        </div>
    )
}
export default Productcardsss;