import React, { Component } from 'react'
import 'react-table-6/react-table.css'
import Navbar from '../navBar'
import NewsTable from '../NewsTable'



export default function AdminManageNews() {
  return (
    <>
    <Navbar />
    <NewsTable />
    </>
  );
  
}
