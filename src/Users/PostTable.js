import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./PostTable.css"


const PostTable = () => {
    const [authorId, setAuthorId] = useState("");
    const [user, setUser] = useState([])

    // useEffect(() => {
    //     axios
    //       .get("/api/query/news/latest/3", {})
    //       .then(function (response) {
    //         console.log(response);
    //         const fetchNews = response.data[0];
    //         const fetchNews2 = response.data[1];
    //         const fetchNews3 = response.data[2];
    //         console.log(fetchNews);
    //         setNews1(fetchNews);
    //         setNews2(fetchNews2);
    //         setNews3(fetchNews3);
    //       })
    //       .catch(function (error) {
    //         console.log(error);
    //       });
    //   }, []);
    useEffect(() => {
        async function getUserData() {
            await axios.get("/api/users/me",{})
            .then(function (response) {
                console.log(response);
                const author_Id = response.data.id;
                setAuthorId(author_Id);
              })
              .catch((err) => console.log(err));
          }
    
          async function getUserPosts(){
            await axios.get(`/api/query/posts/authorId/${authorId}`,{})
              .then(function (res) {
                console.log(res);
                const user_post = res.data;
                //const author_Id = response.data[0].id;
                setUser(user_post);
              })
              .catch((err) => console.log(err));
          }

          getUserData();
          getUserPosts();
      }, []);

    // useEffect(() => {
    //     axios
    //       .get("/api/users/me", {})
    //       .then(function (response) {
    //         console.log(response);
    //         const author_Id = response.data[0].id;
    //         setAuthorId(author_Id);
    //       })
    //       .then(function (getData) {
    //         console.log(getData);
    //       });
    //   }, []);

    // useEffect(() => {
    //     getData()
    // }, [])

    // const getData = async () => {
    //     const response = await axios.get('/api/query/posts/');
    //     console.log(response.data);
    //     console.log(response.data[0].authorId);
    //     setAuthorId(response.data[0].authorId);
    //     // setUser(response.data)
    //     const res = await axios.get('/api/query/posts/authorId/{authorId}')
    //     setUser(res.data);
    // }

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
        axios.delete(`${URL}/${id}`).then(res => {
            const del = user.filter(user => id !== user.id)
            setUser(del)
        })
    }

    const renderHeader = () => {
        let headerElement = ['Post Id', 'Post Title', 'Post Contents', 'Category', 'Img Url','Author', 'Date', 'Operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return user && user.map(({ id, title, contents,category,img,author,date }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{contents}</td>
                    <td>{category}</td>
                    <td>{img}</td>
                    <td>{author}</td>
                    <td>{date}</td>
                    <td className='opration'>
                        <button className='button' onClick={() => removeData(id)}>Delete</button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
            <div className="table-container">
            <table id='News'>
                <thead>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>
                    {renderBody()}
                </tbody>
            </table>
            </div>
        </>
    )
}


export default PostTable