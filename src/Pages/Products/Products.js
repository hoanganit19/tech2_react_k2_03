import React, { Component } from "react";
import withRouter from "../../Helpers/withRouter";

export class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: "",
      status: "all",
    };
  }

  handleSearch = (e) => {
    e.preventDefault();
    const { keyword, status } = this.state;

    const [searchParams, setSearchParams] = this.props.search;

    const search = {};

    if (keyword !== "") {
      search.keyword = keyword;
    }

    if (status !== "all") {
      search.status = status;
    }

    setSearchParams(search);
  };

  handleChangeValue = (e) => {
    const filters = { ...this.state };

    filters[e.target.name] = e.target.value;

    this.setState(filters);
  };

  componentDidMount = () => {
    const [searchParams] = this.props.search;
    this.setState({
      keyword: searchParams.get("keyword") ? searchParams.get("keyword") : "",
      status: searchParams.get("status"),
    });
  };

  render() {
    const { keyword, status } = this.state;

    return (
      <>
        <form onSubmit={this.handleSearch}>
          <select
            name="status"
            value={status}
            onChange={this.handleChangeValue}
          >
            <option value={"all"}>Tất cả trạng thái</option>
            <option value={"active"}>Kích hoạt</option>
            <option value={"inactive"}>Chưa kích hoạt</option>
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
