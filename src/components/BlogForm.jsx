// src/components/BlogForm.jsx
import React, { useState, useEffect } from "react";

const BlogForm = ({ onSubmit, initialData, isEditing }) => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    meta_title: "",
    meta_desc: "",
    banner: "",
    published: false,
  });

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="title"
        value={formData.title}
        placeholder="Title"
        onChange={handleChange}
        className="w-full border p-2"
        required
      />
      <textarea
        name="content"
        value={formData.content}
        placeholder="Content"
        onChange={handleChange}
        className="w-full border p-2"
        rows="4"
        required
      />
      <input
        type="text"
        name="meta_title"
        value={formData.meta_title}
        placeholder="Meta Title"
        onChange={handleChange}
        className="w-full border p-2"
      />
      <input
        type="text"
        name="meta_desc"
        value={formData.meta_desc}
        placeholder="Meta Description"
        onChange={handleChange}
        className="w-full border p-2"
      />
      <input
        type="text"
        name="banner"
        value={formData.banner}
        placeholder="Banner URL"
        onChange={handleChange}
        className="w-full border p-2"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="published"
          checked={formData.published}
          onChange={handleChange}
        />
        <span>Published</span>
      </label>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">
        {isEditing ? "Update Blog" : "Create Blog"}
      </button>
    </form>
  );
};

export default BlogForm;
