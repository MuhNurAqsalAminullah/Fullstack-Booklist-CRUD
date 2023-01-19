import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import * as AiIcons from "react-icons/ai";
import axios from "axios";

const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/book/findAll"
        );
        const data = response.data;
        setData(data.value);
        console.log(data.value);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    const deleteBook = async () => {
      try {
        await axios.delete(`http://localhost:5000/api/book/delete/${id}`);
        alert("Book deleted successfully");
        window.location.reload();
      } catch (error) {
        alert(error.message);
      }
    };
    deleteBook();
  };

  return (
    <div>
      <Navbar />
      <div className="sm:px-5 lg:px-[100px] py-[100px] font-['Merriweather']">
        <div
          className="md:flex md:justify-between md:items-center"
          style={{
            backgroundImage: `url("https://user-images.githubusercontent.com/85085929/210692328-4dee004e-5600-4932-8001-bcf437a3ebbb.jpg")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="sm:pt-10 sm:px-5 md:pt-0 lg:pl-10">
            <h1 className="font-bold text-[#463C74] sm:text-3xl md:text-4xl lg:text-5xl sm:mb-5 lg:leading-tight">
              Book is a <br /> window to the world
            </h1>
            <p className="sm:text-sm md:text-base">
              wake up your dream by reading a book every day
            </p>
            <button className="bg-[#B4D51E] text-white sm:text-sm sm:py-2 sm:px-4 md:text-base rounded-md sm:mt-5">
              Read Now
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={require("../assets/image/ilustration.png")}
              className="sm:w-[300px] lg:w-full"
              alt=""
            />
          </div>
        </div>
        <div className="sm:py-10 lg:py-14">
          <div className="sm:flex sm:justify-between sm:items-center mb-10">
            <h3 className="text-[#463C74] font-bold sm:text-2xl">All Book</h3>
            <Link to={"/add"}>
              <button className="border border-[#463C74] text-[#463C74] rounded sm:px-6 sm:py-1 hover:bg-[#463C74] hover:text-white duration-300">
                Add
              </button>
            </Link>
          </div>
          <div className="lg:flex lg:flex-wrap lg:justify-between">
            {data.map((item) => (
              <div
                key={item.id}
                className="sm:w-full sm:mb-5 md:flex md:gap-x-5 md:mb-10 lg:w-[48%]"
              >
                <img
                  src={`http://localhost:5000/${item.imageBook}`}
                  className="sm:w-full md:w-[200px]"
                  alt=""
                />
                <div className="sm:py-5 md:py-0">
                  <div className="flex justify-between">
                    <div>
                      <h4 className="sm:mb-2 sm:text-xl lg:text-2xl text-[#463C74] font-bold">
                        {item.judul}
                      </h4>
                      <p className="sm:mb-2 text-[#828282] sm:text-sm">
                        {item.penulis}
                      </p>
                    </div>
                    <div className="flex gap-x-5">
                      <AiIcons.AiOutlineEdit
                        onClick={() => handleUpdate(item.id)}
                        className="sm:text-2xl cursor-pointer"
                        color="green"
                      />
                      <AiIcons.AiOutlineDelete
                        onClick={() => handleDelete(item.id)}
                        // onClick={(e) => handleDelete(item.id, e)}
                        className="sm:text-2xl cursor-pointer"
                        color="red"
                      />
                    </div>
                  </div>
                  <div className="h-[200px] overflow-y-auto border-t border-[#463C74]/[.5]">
                    <p>{item.deskripsi}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#FBF4E2] sm:px-5 lg:px-[100px] py-[50px] md:flex md:justify-between">
        <div>
          <h1 className="text-4xl font-['McLaren'] text-[#463C74]">
            Book<span className="text-[#B4D51E]">List</span>
          </h1>
          <p className="text-[#828282] mt-10">
            Dibuat oleh Muh Nur Aqsal Aminullah tahun 2023
          </p>
        </div>

        <div className="sm:mt-10 md:mt-0">
          <h5 className="font-bold sm:text-xl">Contact & Portofolio </h5>
          <a
            className="text-[#828282] hover:text-[#463C74]"
            href="http://muhnuraqsalaminullah.me"
            target={"_blank"}
          >
            http://muhnuraqsalaminullah.me
          </a>
          <p className="text-[#828282]">muhnuraqsalaminullah@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
