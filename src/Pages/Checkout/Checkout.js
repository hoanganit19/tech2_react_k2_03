import React, { Component } from "react";
import withRouter from "../../Helpers/withRouter";

export class Checkout extends Component {
    constructor(props){
        super(props);
    }
  handleCheckout = (e) => {
    e.preventDefault();
    const {navigate} = this.props;
    navigate('/cam-on');
   // window.location.href = '/cam-on';
   //window.open('/cam-on', '', 'width=200,height=200');
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleCheckout}>
          <input type="text" name="name" placeholder="Tên..." />
          <button type="submit">Thanh toán</button>
        </form>
      </div>
    );
  }
}

export default withRouter(Checkout);
