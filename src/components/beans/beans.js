import './beans.scss'

const Beans = (props) => {

    const {black} = props;
    const className = black ? 'black' : '';
    return (
        <span className={"beans " + className}><i className="fa-solid fa-mug-hot"></i></span>
    );
}

export default Beans;