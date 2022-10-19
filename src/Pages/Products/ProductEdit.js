import React, { Component } from 'react'
import withRouter from '../../Helpers/withRouter'

class ProductEdit extends Component {
  constructor(props){
    super(props);
  }
  render() {
    const {params, search} = this.props;
    
    // const {, slug} = params;
    // console.log(id);
    // console.log(slug);
    //console.log(params);
    // const keyword = search.get('keyword');
    // const type = search.get('type');
    // console.log(keyword);
    // console.log(type);

    //console.log(Object.fromEntries(new URLSearchParams(search.toString())));

    return (
      <div>ProductEdit</div>
    )
  }
}

export default withRouter(ProductEdit);