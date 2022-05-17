import './productcard.css';
import web1 from '../../image/web1.jpg';

function Productcard(img,link){
    return(
        <div className='p'>
            <div className="pbrowser">
                <div className="pcircle"></div>
                <div className="pcircle"></div>
                <div className="pcircle"></div>
            </div>
            <a href={link} target="_blank" 
            rel='noreferrer' >
                <img src={web1} alt="image" 
                className='pimage' />

            </a>
        </div>
    )
}
export default Productcard;



