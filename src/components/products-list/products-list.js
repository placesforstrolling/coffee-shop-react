import ProductItem from '../product-item/product-item';
import './products-list.scss';

const ProductsList = (data) => {
    const style = {
        background: 'url(/images/paper.png)',
    },
    elements = data.data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <ProductItem key={id} {...itemProps}/>
        )
    })
    return (
        <section style={style} className="products">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h2>Our Best</h2>
                    </div>
                </div>
                <div className="row flex-row">
                    {elements}
                </div>
            </div>
         
           
        </section>
    )
}

export default ProductsList;