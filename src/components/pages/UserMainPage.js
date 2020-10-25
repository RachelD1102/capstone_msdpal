import React from "react";
import PostCard from "../PostCard";
import UserNavbar from "../UserNavbar";


export default function UserMainpage() {
  return (
    <>
    <UserNavbar />
    <div>
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    <PostCard />
    </div>
    </>
  );
  
}