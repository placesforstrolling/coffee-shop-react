import { Component } from 'react';

import './about-search.scss';

class AboutSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }
    onSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearch(term);
    }
    render() {
        return (
            <div className="row justify-content-center">
                <div className="col-lg-4">
                    <span className="search">
                    <label htmlFor="search">Looking for</label>
                    <input
                          onChange={this.onSearch}
                          value={this.state.term}
                          type="text"
                          placeholder="start typing here..."
                          name="search"
                          className="form-control" />
                    </span>
                
                </div>
                <div className="col-lg-4">
                    <span className="filter">
                        <label htmlFor="Or filter">Or filter</label>
                        <button onClick={() => this.props.onFilterSelect('Brazil')} className="btn">Brazil</button>
                        <button onClick={() => this.props.onFilterSelect('Africa')} className="btn">Kenya</button>
                        <button onClick={() => this.props.onFilterSelect('Cuba')} className="btn">Columbia</button>
                    </span>
                    
                </div>
            </div>
            
        );
    }

}

export default AboutSearch;