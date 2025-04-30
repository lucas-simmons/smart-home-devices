import Echo from './cards/Echo.jsx';
import Fire from './cards/Fire.jsx';
import Home from './cards/Home';
import Ring from './cards/Ring.jsx';
import NestWifi from './cards/NestWifi.jsx';
import NestCam from './cards/NestCam.jsx';
import Ecobee from './cards/Ecobee.jsx';
import August from './cards/August.jsx';
import Phillips from './cards/Phillips.jsx';
import EchoDot from './cards/EchoDot.jsx';
import './Cards.css'


const security = [August, NestCam, Ring];
const convenience = [Fire, NestWifi, Ecobee, Phillips];
const assistant = [Echo, EchoDot, Home]

export default function Cards() {

    return (
        <section className="cards">
            <h1 className="Title-a">Security</h1>
            <section className="amazon col">
                    {security.map((Device, idx) => (
                            <Device key={idx} />                        
                    ))}    
            </section>
            <h1 className='Title-g' >Service</h1>
            <section className="google col">
            {convenience.map((Device, idx) => (
                            <Device key={idx} />                        
                    ))}  
            </section>
            <h1 className='Title-o' >Assistant</h1>
            <section className="other col">
            {assistant.map((Device, idx) => (
                            <Device key={idx} />                        
                    ))}
                
            </section>
        </section>
    )
}