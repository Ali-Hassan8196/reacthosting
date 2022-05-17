import './contact.css'
import phone from '../../image/call.png';
import email from '../../image/emaill.png';
import address from '../../image/adres.jpg';
import { useRef, useState,useContext } from 'react';
import { ThemeContext } from '../../context';

const Contact=()=>{

      const [userData,setuserData]=useState({
          name:'',
          email:'',
          subject:'',
          comment:''
      });

      let name, value ;
      const Postuserdata= (event) => {
   name = event.target.name;
   value = event.target.value;       

   setuserData({ ...userData, [name]: value });
  
      };

      const submitdata= async (event)=>{
         event.preventDefault();
         const { name,email,subject,comment }= userData;
          
        const res= fetch('https://alihassan-81d30-default-rtdb.firebaseio.com/userDataRecords.json',
        {
            method:'POST',
            headers:{
           'Content-Type':'application/json',
        },
        body: JSON.stringify({
            name,email,subject,comment    
        }),
    }
        );

        if (res) {
            setuserData({
                name:'',
                email:'',
                subject:'',
                comment:'',
            });
            alert('data submitted successfully');
        }  else {
            alert('data not submitted');
        }

         };

    const formref=useRef()
    const [done,setDone]=useState(false)
    const theme= useContext(ThemeContext);
    const darkMode =theme.state.darkMode;

    const handlesubmit=(e)=>{
     e.preventDefault()
     
    }

    return(
        <div className="c">
            <div className='cbg'> </div>
            <div className="crap">
                <div className="cleft">
                 <h1 className='ctitle'>Let's discuss your project</h1>
                <div className='cinfo'>
                    
                    <div className="cinfoitem">

                        <img src={phone} alt="" 
                        className='cicon' />
                         +92 3418426044
                    </div>

                    <div className="cinfoitem">
                        <img src={email} alt="" 
                        className='cicon' />
                         alihassan30714@gmail.com
                    </div>

                    <div className="cinfoitem">
                        <img src={address} alt="" 
                        className='cicon' />
                         Lahore, Pakistan
                    </div>

                   
                    

                </div>
                </div>
                <div className="cright">
                  <p className="cdes">
                      <b>What's your story? </b>
                      Get in touch. Always available for
                       freelancing if the right project comes 
                       along me.
                  </p>
                  <form method='POST' 
                   ref={formref} 
                   onSubmit={handlesubmit} >
                  
                  <input type="text" placeholder='Name'
  
  onChange={Postuserdata}
  name='name' value={userData.name} style={{
                      backgroundColor: darkMode && '#333'
                  }} />
                
                  <input type="text" placeholder='Subject'
onChange={Postuserdata}  value={userData.subject}

                  name='subject' style={{
                    backgroundColor: darkMode && '#333'
                }} />
                
                  <input type="text" placeholder='Email'
 
 onChange={Postuserdata} value={userData.email}
 name='email' style={{
                    backgroundColor: darkMode && '#333'
                }} />
                
                  <textarea name="comment" placeholder='Message'
                  onChange={Postuserdata} value={userData.comment}
                  
                   rows="5" style={{
                    backgroundColor: darkMode && '#333'
                }}/>
                   <button type='submit'
                   onClick={submitdata}
                   >
                       Submit</button>
                  </form>
                </div>
            </div>
        </div>
    )
}
export default Contact;