import './toggle.css';
import sun from '../../image/sun.png';
import moon from '../../image/moon.jpg'
import { useContext } from 'react';
import { ThemeContext } from '../../context';

function Toggle(){
    const theme=useContext(ThemeContext)

    const handleClick=()=>{
        theme.dispatch({type:'toggle'})
    }
    return(
        <div className='t'>
        <img src={sun} alt=""   className='ticon' />
        <img src={moon} alt=""  className='ticon' />
        <div className="tbutton" onClick={handleClick}
        style={{left: theme.state.darkMode ? 0 : 55}}></div>
        </div>
    )
}
export default Toggle;