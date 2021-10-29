import Menu from '../menu/menu'

import './about-header.scss'

const AboutHeader = () => {
    const style = {
        background: 'url(/images/about-header-bg.png)',
        backgroundSize: '100%',
    }
    return (
        <header style={style}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <Menu/>
                    </div>
                    <div className="col-lg-12">
                        <h1>Our Coffee</h1>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default AboutHeader;