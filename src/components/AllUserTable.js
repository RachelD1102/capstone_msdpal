import React, { Component } from "react";
import axios from "axios";
import ReactTable from "react-table-6";
import "./PostTable.css"
import "react-table-6/react-table.css";

export default class AllUserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }
  async getUsersData() {
    const res = await axios.get("/api/users/all");
    console.log(res.data);
    this.setState({ loading: false, users: res.data });
  }

  componentDidMount() {
    this.getUsersData();
  }

  render() {
    const columns = [
      {
        Header: "Username",
        accessor: "username",
      },
      // {
      //   Header: "ID",
      //   accessor: "id",
      // },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "First Name",
        accessor: "firstName",
      },
      {
        Header: "Last Name",
        accessor: "lastName",
      },
      {
        Header: "uNID",
        accessor: "uid",
      },
      // {
      //   Header: "Invitation Code",
      //   accessor: "code",
      // },
      {
        Header: "Grad Year",
        accessor: "gradYear",
      },
      {
        Header: "Introduction",
        accessor: "intro",
      },
      {
        Header: "Placement",
        accessor: "placement",
      }
      // {
      //   Header: "Avatar",
      //   accessor: "avatar",
      // },

    ];
    return <ReactTable data={this.state.users} columns={columns} />;
  }
}
