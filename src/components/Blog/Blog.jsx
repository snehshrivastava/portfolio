
import { useEffect, useState } from "react";

import "animate.css";
import './Blog.css';
import './Blog.css'
import axios from "axios";

function Blog() {
  /**
   * todos
   *  on click blog open that blog
   * page for single blog to be seen
   */
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/api/v1/blogs').then(data => {
      if (data.data.message == 'success')
        setBlogs(data.data.data);
      console.log(data.data.data)
    });
  }, []);
  return (
    <div className="blog-text">
      <div>Blog me</div>
      <ul>
        {blogs.length && blogs.map(b => {
          return <div>
            <li>{b.article}</li>
            <li>{b.topic}</li>
            <br />
          </div>
        })
        }
      </ul>
    </div>
  );
}

export default Blog;
