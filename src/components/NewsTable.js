import React, { useState, useEffect } from 'react'
import axios from 'axios'
import "./PostTable.css"


const URL = '/api/query/news/'

const NewsTable = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const response = await axios.get(URL)
        setUser(response.data)
    }

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
        let headerElement = ['News Id', 'News Title', 'News Contents', 'Category', 'Img Url','Date', 'Operation']

        return headerElement.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    const renderBody = () => {
        return user && user.map(({ id, title, contents, category,img, date }) => {
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{title}</td>
                    <td>{contents}</td>
                    <td>{category}</td>
                    <td>{img}</td>
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


export default NewsTable