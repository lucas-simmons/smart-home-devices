import SmartHome from "./assets/smarthome2.jpg";
import './Mid.css';
import SmartHomeDef from "./assets/smarthome.png";

export default function Mid() {

    return (
        <>
        <main class="mid_main">
            <section className="mid">
                <section class="mid_section">
                    <img class="" src={SmartHomeDef} 
                    alt="image from investopedia.com/terms/s/smart-home.asp" />
                    <section className="mid_right">
                        <p className="mid_p">Makes your home smarter, but do they make your home less or more secure?</p>
                        <p className="mid_p">Are you willing to trade security for convenience?</p>
                        <p className="mid_p">We'll give you the stats to decide.</p>
                    </section>
                </section>
                {/* <section class="mid_section">
                    <img class="mid_image" src={SmartHome} 
                    alt="image of a smart home from  https://www.security.org/smart-home/" />
                </section> */}
            </section>
        </main>
        </>
    )
}