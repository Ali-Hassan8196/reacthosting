import './productcard.css';
import web6 from '../../image/web6.jpeg';

function Productcardsssss(img,link){
    return(
        <div className='p'>
            <div className="pbrowser">
                <div className="pcircle"></div>
                <div className="pcircle"></div>
                <div className="pcircle"></div>
            </div>
            <a href={link} target="_blank" 
            rel='noreferrer' >
                <img src={web6} alt="image" 
                className='pimage' />

            </a>
        </div>
    )
}
export default Productcardsssss;