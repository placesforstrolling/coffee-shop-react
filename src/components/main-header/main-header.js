// import bg from '/images/main-header-bg.png'
import './main-header.scss'
import Menu from '../menu/menu';



const MainHeader = () => {
    const style = {
        background: 'url(/images/main-header-bg.png)',
    }
    return (
        <header style={style}>
            <div className="container">
            <div className="row">
            <div className="col-lg-12">
                <Menu/>
                <h1>Everything You Love About Coffee</h1>
                <h2>We makes every day full of energy and taste</h2>
                <h2>Want to try our beans?</h2>
            </div>
            </div>
        </div>
        </header>
     
    );
}

export default MainHeader;