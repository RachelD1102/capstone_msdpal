import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Users/PostTable.css";

const URL = "/api/query/news/";
const Delete_URL = "/api/news";

const NewsTable = () => {
  const [news, setNews] = useState([]);
  const [password, setPassword] = useState("bigbrotheriswatchingyou");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(URL);
    setNews(response.data);
  };

  // const onDeleteData = async (event) => {
  //     event.preventDefault();
  //     await axios
  //       .post("/api/admin/new_user", {
  //         adminPassword: password,
  //         uid: uID,
  //       })
  //       .then(function (response) {
  //         console.log(response);
  //         setResponseCode(response.data.code);
  //       })
  //       .catch(function (error) {
  //         console.log(error.response.data);
  //       });
  //   };

  const removeData = (id) => {
    axios.delete(`/api/news/${id}`, {
        adminPassword: password,
    }).
    then(function (response){
      const del = news.filter((news) => id !== news.id);
      setNews(del);
      console.log(response);
    }).catch(function (error) {
        console.log(error.response.data);
    });
  };

  const renderHeader = () => {
    let headerElement = [
      "News Id",
      "News Title",
      "News Contents",
      "Category",
      "Img Url",
      "Date",
      "Operation",
    ];

    return headerElement.map((key, index) => {
      return <th key={index}>{key}</th>;
    });
  };

  const renderBody = () => {
    return (
      news &&
      news.map(({ id, title, contents, category, img, date }) => {
        return (
          <tr key={id}>
            <td>{id}</td>
            <td>{title}</td>
            <td>{contents}</td>
            <td>{category}</td>
            <td>{img}</td>
            <td>{date}</td>
            <td className="opration">
              <input
                className="form-input"
                type="password"
                // name="email"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="button" onClick={() => removeData(id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      })
    );
  };

  return (
    <>
      <div className="table-container">
        <table id="News">
          <thead>
            <tr>{renderHeader()}</tr>
          </thead>
          <tbody>{renderBody()}</tbody>
        </table>
      </div>
    </>
  );
};

export default NewsTable;
