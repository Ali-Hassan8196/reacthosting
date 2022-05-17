import './productcard.css';
import web2 from '../../image/web2.jpg';

function Productcards(img,link){
    return(
        <div className='p'>
            <div className="pbrowser">
                <div className="pcircle"></div>
                <div className="pcircle"></div>
                <div className="pcircle"></div>
            </div>
            <a href={link} target="_blank" 
            rel='noreferrer' >
                <img src={web2} alt="image" 
                className='pimage' />

            </a>
        </div>
    )
}
export default Productcards;