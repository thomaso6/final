import React from "react";
import { useState, useEffect } from 'react';
import Post from "./Post";

export default function Feed(){
    const [posts, setPosts] = useState([]);
    const [postContent, setPostContent] = useState('');
    const [author, setAuthor] = useState('');
    useEffect(() =>{
        getPosts();
    }, []);
    async function submitPost(){
        if(postContent.length === 0 || author.length === 0){
            return;
        }
        fetch('http://localhost:8000/posts', {
            method: "POST",
            body: JSON.stringify({title: postContent, author: author}),
            headers: {"Content-Type": "application/json"},
        });
        setAuthor("");
        setPostContent("");
        getPosts();
    }
    async function getPosts(){
        const response = await fetch('http://localhost:8000/posts');
        const posts = await response.json();
        setPosts(posts);
    }
    async function updatePost(id, newContent){
        await fetch(`http://localhost:8000/posts/${id}`, {
            method: "PATCH",
            body: JSON.stringify({title: newContent}),
            headers: {"Content-Type": "application/json"},
        });
        getPosts();
    }
    async function deletePost(id){
        await fetch(`http://localhost:8000/posts/${id}`, {
            method: "DELETE",
        });
        getPosts();
    }
    function handlePostContentChange(event){
        setPostContent(event.target.value);
    }
    function handleAuthorChange(event){
        setAuthor(event.target.value);
    }
    return (
        <div id="form">
            <h2>Post about bears here:</h2>
            <input value={postContent}placeholder="What do you have to say about bears?" onChange={handlePostContentChange} id="post-box"></input>
            <input value={author}placeholder="Your Name"onChange={handleAuthorChange} id="name-box"></input>
            <button onClick={submitPost} id="btn">Submit</button>
            {posts.map((post) => {
                return <Post title={post.title} author={post.author} id={post.id} updatePost={updatePost} deletePost={deletePost}></Post>
            })}
        </div>
    );
  }