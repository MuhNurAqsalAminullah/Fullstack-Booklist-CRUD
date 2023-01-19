import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("judul", data.judul);
    formData.append("penulis", data.penulis);
    formData.append("deskripsi", data.deskripsi);
    formData.append("imageBook", data.imageBook);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/book/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      alert("Berhasil tambah data");
      navigate("/");
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleFileChange = (e) => {
    setData({ ...data, imageBook: e.target.files[0] });
  };

  return (
    <div className="w-[600px] mx-auto my-20">
      <p className="text-center border-b border-[skyblue] py-2 ">Add Book</p>
      <form onSubmit={handleSubmit} className="p-10">
        <label>- Judul -</label>
        <br />
        <input
          onChange={(e) => setData({ ...data, judul: e.target.value })}
          type="text"
          placeholder="judul..."
          className="outline-none bg-[#f2f2f2] focus:border-b focus:border-[skyblue] focus:bg-white w-full pl-3 py-3 rounded-lg mt-2"
        />
        <br />
        <br />
        <label>- Penulis -</label>
        <br />
        <input
          onChange={(e) => setData({ ...data, penulis: e.target.value })}
          type="text"
          placeholder="penulis..."
          className="outline-none bg-[#f2f2f2] focus:border-b focus:border-[skyblue] focus:bg-white w-full pl-3 py-3 rounded-lg mt-2"
        />
        <br />
        <br />
        <label>- Deskripsi -</label>
        <br />
        <input
          onChange={(e) => setData({ ...data, deskripsi: e.target.value })}
          type="text"
          placeholder="deskripsi..."
          className="outline-none bg-[#f2f2f2] focus:border-b focus:border-[skyblue] focus:bg-white w-full pl-3 py-3 rounded-lg mt-2"
        />
        <br />
        <br />
        <label>- Image -</label>
        <br />
        <input
          type="file"
          onChange={handleFileChange}
          className="outline-none bg-[#f2f2f2] focus:border-b focus:border-[skyblue] focus:bg-white w-full pl-3 py-3 rounded-lg mt-2"
        />
        {/* <input
          onChange={(e) => setData({ ...data, deskripsi: e.target.value })}
          type="text"
          placeholder="deskripsi..."
          className="outline-none bg-[#f2f2f2] focus:border-b focus:border-[skyblue] focus:bg-white w-full pl-3 py-3 rounded-lg mt-2"
        /> */}
        <br />
        <br />
        <button
          type="submit"
          className="bg-[skyblue] text-white py-2 w-full rounded-lg"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Add;
