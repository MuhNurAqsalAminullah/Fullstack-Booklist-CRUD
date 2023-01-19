import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState({});
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/book/findOne/${id}`
        );
        const data = response.data;
        setDatas(data.value);
        console.log(data.value);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/api/book/update/${id}`, data)
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div className="w-[600px] mx-auto my-20">
      <p className="text-center border-b border-[skyblue] py-2 ">Edit Book</p>
      {datas.map((item) => (
        <form onSubmit={handleUpdate} key={item.id} className="p-10">
          <label>- Judul -</label>
          <br />
          <input
            onChange={(e) => setData({ ...data, judul: e.target.value })}
            type="text"
            placeholder={item.judul}
            className="outline-none bg-[#f2f2f2] focus:border-b focus:border-[skyblue] focus:bg-white w-full pl-3 py-3 rounded-lg mt-2"
          />
          <br />
          <br />
          <label>- Penulis -</label>
          <br />
          <input
            onChange={(e) => setData({ ...data, penulis: e.target.value })}
            type="text"
            placeholder={item.penulis}
            className="outline-none bg-[#f2f2f2] focus:border-b focus:border-[skyblue] focus:bg-white w-full pl-3 py-3 rounded-lg mt-2"
          />
          <br />
          <br />
          <label>- Deskripsi -</label>
          <br />
          <input
            onChange={(e) => setData({ ...data, deskripsi: e.target.value })}
            type="text"
            placeholder={item.deskripsi}
            className="outline-none bg-[#f2f2f2] focus:border-b focus:border-[skyblue] focus:bg-white w-full pl-3 py-3 rounded-lg mt-2"
          />
          <br />
          <br />
          <button
            type="submit"
            className="bg-[skyblue] text-white py-2 w-full rounded-lg"
          >
            Save
          </button>
        </form>
      ))}
    </div>
  );
};

export default Update;
