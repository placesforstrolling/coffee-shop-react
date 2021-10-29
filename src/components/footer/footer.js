import './footer.scss'

import Menu from '../menu/menu';
import Beans from '../beans/beans';

const Footer = () => {

    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Menu/>
                        <Beans black={true}/>
                    </div>
                </div>
            </div>
            
        </footer>
        
    );
}

export default Footer;