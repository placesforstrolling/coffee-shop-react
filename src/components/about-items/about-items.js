import AboutSearch from '../../about-search/about-search';
import AboutItem from '../about-item/about-item';

import './about-items.scss';

const AboutItems = ({data, onFilterSelect, onSearch}) => {

    const items = data.map((item) => {
        const {id, ...itemProps} = item;
        return (
            <AboutItem 
            key={id}
            {...itemProps}
            />
        )
    });

    return (
        <section className="items">
            <div className="container">
            <AboutSearch onFilterSelect={onFilterSelect} onSearch={onSearch}/>
            <div className="row justify-content-center">
                <div className="col-lg-9">
                    <div className="row">
                        {items}
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default AboutItems;