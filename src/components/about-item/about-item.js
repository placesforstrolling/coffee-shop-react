

import './about-item.scss';

const AboutItem = (props) => {

    const {image, title, type, price} = props;

    return (
        <div className="col-lg-4">
            <div className="item">
            <img src={image} alt="" />
                <h4>{title}</h4>
                <h4 className="type">{type}</h4>
                <p>${price}</p>
            </div>
        </div>
    );
}

export default AboutItem;