// src/pages/BlogPage.jsx
import React, { useState } from "react";
import BlogForm from "../../components/BlogForm";
import { useDispatch, useSelector } from "react-redux";
import { createBlog, updateBlog } from "../../store/slices/blogsSlice";

const BlogPage = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blogs.items);
  const [editData, setEditData] = useState(null);

  const handleCreate = (data) => {
    dispatch(createBlog(data));
    setEditData(null); // Reset the form
  };

  const handleEdit = (blog) => {
    setEditData(blog); // Populate the form with blog data
  };

  const handleUpdate = (data) => {
    dispatch(updateBlog({ id: editData.id, blogData: data }));
    setEditData(null); // Reset the form
  };

  return (
    <div>
      <h1>Manage Blogs</h1>
      <BlogForm
        onSubmit={editData ? handleUpdate : handleCreate}
        initialData={editData}
        isEditing={!!editData}
      />
      <table className="w-full mt-6 border">
        <thead>
          <tr>
            <th>Title</th>
            <th>Meta Title</th>
            <th>Published</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {blogs.map((blog) => (
            <tr key={blog.id}>
              <td>{blog.title}</td>
              <td>{blog.meta_title}</td>
              <td>{blog.published ? "Yes" : "No"}</td>
              <td>
                <button
                  onClick={() => handleEdit(blog)}
                  className="bg-yellow-500 text-white px-2 py-1"
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1"
                  onClick={() => dispatch(deleteBlog(blog.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogPage;
