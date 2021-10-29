import './product-item.scss';

const ProductItem = (props) => {

    const {image, title, price} = props;

    return (
        <div className="col-lg-4">
            <div className="item h-100">
                <img src={image} alt="" />
                <h4>{title}</h4>
                <p>${price}</p>
            </div>
        </div>
        
    );
}

export default ProductItem;