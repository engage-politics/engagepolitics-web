import React from 'react'
import {useParams } from "react-router-dom";

function BlogPost() {
    let { id } = useParams<{ id: string }>();
  return (
    <div>BlogPost is {id}</div>
  )
}

export default BlogPost