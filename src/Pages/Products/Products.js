import React, { Component } from "react";
import withRouter from "../../Helpers/withRouter";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    const { keyword } = this.state;

    const [searchParams, setSearchParams] = this.props.search;
    setSearchParams({
      keyword: keyword,
    });
  };

  handleChangeValue = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  componentDidMount = () => {
    const [searchParams] = this.props.search;
    this.setState({
      keyword: searchParams.get("keyword") ? searchParams.get("keyword") : "",
    });
  };

  render() {
    const { keyword } = this.state;

    return (
      <>
        <form onSubmit={this.handleSearch}>
          <select name="status">
            <option value={'all'}>Tất cả trạng thái</option>
            <option value={'active'}>Kích hoạt</option>
            <option value={'inactive'}>Chưa kích hoạt</option>
          </select>
          <input
            type="search"
            name="keyword"
            placeholder="Nhập từ khoá tìm kiếm..."
            onChange={this.handleChangeValue}
            value={keyword}
          />
          <button type="submit">Tìm</button>
        </form>
        <h1>Products</h1>
      </>
    );
  }
}

export default withRouter(Products);
