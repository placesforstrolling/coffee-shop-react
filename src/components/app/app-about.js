import { Component } from 'react';

import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';


import AboutHeader from '../about-header/about-header';
import AboutAbout from '../about-about/about-about';
import AboutItems from '../about-items/about-items';
import Footer from '../footer/footer'


class AppAbout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {image: '/images/product1.png', title: 'Brazil Coffee Beans 2 kg', type: 'Brazil', price: 10.73, id: 1},
        {image: '/images/product2.png', title: 'Africa Coffee Beans 1 kg', type: 'Africa', price: 15.99, id: 2},
        {image: '/images/product3.png', title: 'Cuba Coffee 1 kg', type: 'Cuba', price: 6.99, id: 3},
        {image: '/images/product1.png', title: 'Brazil Coffee Beans 2 kg', type: 'Brazil', price: 10.73, id: 4},
        {image: '/images/product2.png', title: 'Africa Coffee Beans 1 kg', type: 'Africa', price: 15.99, id: 5},
        {image: '/images/product3.png', title: 'Cuba Coffee 1 kg', type: 'Cuba', price: 6.99, id: 6},
      ],
      type: 'all',
      term: ''
    }
  }
  onSearch = (term) => {
    this.setState({term});
  }
  searched = (items, term) => {
    if (term.length === 0) {
      return items;
      
    }
    return items.filter(item => {
      // if (!(item.title.indexOf(term))) {
      //   return item;
      // }
      return item.title.indexOf(term) > -1
    })
  }

  onFilterSelect = (type) => {
    this.setState({type});
  }

  filterItems = (items, type) => {
    switch (type) {
      case 'Brazil':
        return items.filter(item => item.type === 'Brazil');
      case 'Africa':
        return items.filter(item => item.type === 'Africa');
      case 'Cuba':
        return items.filter(item => item.type === 'Cuba');
      default:
        return items
  }
  }



  render () {
    const {data, type, term} = this.state;
    const visebleData = this.filterItems(this.searched(data, term), type);
    return (
    <>
      <AboutHeader/>
      <AboutAbout/>
      <AboutItems 
                 data={visebleData}
                 onFilterSelect={this.onFilterSelect}
                 type={type}
                 onSearch={this.onSearch}/>
      <Footer/>
    </>
    )
  }
}




export default AppAbout;
