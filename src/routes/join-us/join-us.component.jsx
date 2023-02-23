import './join-us.styles.scss';
import {AiOutlineRead} from 'react-icons/ai';
import {VscOpenPreview} from 'react-icons/vsc';
import {TfiWrite} from 'react-icons/tfi';
import { Link } from 'react-router-dom';

const JoinUs = () => 
   <section className='join-us'>
      <h1>Join as</h1>
      <div className='card-container'>
         <Link to='/'>
            <div className='card'>
               <AiOutlineRead />
               <h2>Reader</h2>
            </div>
         </Link>
         <Link to='/authorForm'>
            <div className='card'>
                  <TfiWrite />
                  <h2>Author</h2>
               </div>
         </Link>
         <Link to='/'>
         <div className='card'>
               <VscOpenPreview />
               <h2>Reviewer</h2>
            </div>
         </Link>
      </div>
   </section>

export default JoinUs;