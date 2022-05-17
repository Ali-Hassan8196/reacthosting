import './productcard.css';
import web3 from '../../image/web3.jpg';

function Productcardss(img,link){
    return(
        <div className='p'>
            <div className="pbrowser">
                <div className="pcircle"></div>
                <div className="pcircle"></div>
                <div className="pcircle"></div>
            </div>
            <a href={link} target="_blank" 
            rel='noreferrer' >
                <img src={web3} alt="image" 
                className='pimage' />

            </a>
        </div>
    )
}
export default Productcardss;