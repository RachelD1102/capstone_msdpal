import React from "react";
import PostCard from "../PostCard";
import UserNavbar from "../UserNavbar";
import ButtonBar from "../ButtonBar";
import UserMainPagination from "../Pagination";


export default function UserMainpage() {
  return (
    <>
    <UserNavbar />
    <div>
      <ButtonBar />
    </div>
    <div>
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    </div>
    <div>
      <UserMainPagination />
    </div>
    </>
  );
  
}