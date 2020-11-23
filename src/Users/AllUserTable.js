import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllUserTable.css"

const AllUserTable = () => {
  const [users, setUsers] = useState([]);
  //let author_Id = sessionStorage.getItem("userId");

  useEffect(() => {
    async function getUsers() {
      await axios
        .get("/api/users/all", {})
        .then(function (response) {
          console.log(response);
          setUsers(response.data);
        })
        .catch((error) => console.log(error.response.data));
    }
    getUsers();
  }, []);

  const renderHeader = () => {
    let headerElement = [
      "Username",
      "Email",
      "Name",
      "uNID",
      "Grad Year",
      "Introduction",
      "Placement",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  const renderBody = () => {
    return (
      users &&
      users.map(({ username, email, firstName, lastName, uid, gradYear, intro, placement }) => {
        return (
          <tr key={uid}>
            <td>{username}</td>
            <td>{email}</td>
            <td>{firstName + " " + lastName}</td>
            <td>{uid}</td>
            <td>{gradYear}</td>
            <td>{intro}</td>
            <td>{placement}</td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <div className="table-container">
        <table className="post-table-body">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </div>
      <div>
      </div>
      <h2 className="h2-alert">{alert}</h2>
    </>
  );
};

export default AllUserTable;
// ------------------------------------------------------------
// export default class AllUserTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: [],
//       loading: true,
//     };
//   }
//   async getUsersData() {
//     const res = await axios.get("/api/users/all");
//     console.log(res.data);
//     this.setState({ loading: false, users: res.data });
//   }

//   componentDidMount() {
//     this.getUsersData();
//   }

//   render() {
//     const columns = [
//       {
//         Header: "Username",
//         accessor: "username",
//       },
//       // {
//       //   Header: "ID",
//       //   accessor: "id",
//       // },
//       {
//         Header: "Email",
//         accessor: "email",
//       },
//       {
//         Header: "First Name",
//         accessor: "firstName",
//       },
//       {
//         Header: "Last Name",
//         accessor: "lastName",
//       },
//       {
//         Header: "uNID",
//         accessor: "uid",
//       },
//       // {
//       //   Header: "Invitation Code",
//       //   accessor: "code",
//       // },
//       {
//         Header: "Grad Year",
//         accessor: "gradYear",
//       },
//       {
//         Header: "Introduction",
//         accessor: "intro",
//       },
//       {
//         Header: "Placement",
//         accessor: "placement",
//       }
//       // {
//       //   Header: "Avatar",
//       //   accessor: "avatar",
//       // },

//     ];
//     return <ReactTable data={this.state.users} columns={columns} />;
//   }
// }
