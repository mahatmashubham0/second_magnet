import { MdClose } from "react-icons/md";
import "./Search.scss";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {useFetch} from '../../../hooks/useFetch'

const Search = ({ showSearchPanel }) => {
  const baseUrl = 'http://localhost:1337'

  const [query , setQuery] = useState("")
  const naviagte = useNavigate()

  const handleOnChange = (e) => {
    setQuery(e.target.value)
  }

  let {data} = useFetch(`/api/products?populate=*&filters[title][$contains]=${query}`)
  console.log(data)

  if(!query.length) {
    data = null
  }

  return (
    <div className="search-model">
      <div className="search-field">
        <input
          type="text"
          name=""
          autoFocus
          placeholder="Search Product"
          id=""
          value={query}
          onChange={handleOnChange}
        />
        <MdClose onClick={() => showSearchPanel(false)} />
      </div>

      <div className="search-results-content">
        <div className="search-result">

           {data?.data?.map((item)=>(
            <div key={item?.id} className="search-result-item" onClick={()=>{
              naviagte('/product/' + item.id)
              showSearchPanel(false)
            }}>

            <div className="img-container">
              <img src={baseUrl + item?.attributes?.img?.data[0]?.attributes?.url} alt="img" />
            </div>

            <div className="prod-details">
              <span className="name">{item?.attributes?.title}</span>
              <span className="description">{item?.attributes?.des}</span>
            </div>

            </div>
           ))}

        </div>
      </div>
    </div>
  );
};

export default Search;
