import './product.css';
import Productcard from './productcard';
import { dataproduct } from './data';
import Productcards from './im1';
import Productcardss from './im2.js';
import Productcardsss from './im3';
import Productcardssss from './im4';
import Productcardsssss from './im5';

function Product(){
    return(
        <div className='productdiv'>
            <div className="producttext">
            <h2>About Me</h2>
             <p className="ppara">
             I create websites that are totally 
             according to the customers requirements. 
             I usually love to create websites that are
             responsive and mobile friendly.
             I also try to provide the customer with 
             the new ideas relating to the requirements and 
             required design. 
             </p>
                </div>
                <div className='carddivs'> 
                {/* {dataproduct.map((item)=>(
                   <Productcard key={item.id}
                   img={item.img} link={item.link}/>
                ))} */}
            
            <Productcard/>
            <Productcards/>
            <Productcardss/>
            <Productcardsss/>
            <Productcardssss/>
            <Productcardsssss/>            
            
            </div>
        </div>
    )
} export default Product;
