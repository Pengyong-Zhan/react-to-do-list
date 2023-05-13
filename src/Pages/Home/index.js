import { useState, useEffect } from "react";
import Edit from "./components/Edit"; //不需要edit.js
import List from "./components/List";
import "./index.css";

const classNombre = {
  color: "red", //末尾不需要加分号, red需要加引号！！
}; //下方引用变量需要用大花括号> <div style = {classNombre}>
//注意对比<div className="app">

const Home = () => {
  const [data, setData] = useState([]);
    
  useEffect(() => {
    fetch("http://localhost:3000/posts/1")
    .then(res => res.json())
    .then(data => {
      console.log(data);
    })
  },[])

  /*
    useEffect(() => {
    window.alert("新增成功")
  },[data])
  */

  return (
    <div className="app">
      <Edit add={setData} />
      <List listData={data} deleteData={setData} />
    </div>
  );
};

export default Home;

/* useState 有趣 setp1
const Home = () => {
    const [a, setA] = useState(100)

    function plus() {
        setA(200) #只能奏效一次
    }
    
    return <div className="app"> 
        {a}
        <button onClick={plus}>加法</button>
        <Edit />
        <List />
    </div>
}

export default Home;
*/

/*useState 有趣 setp2
const Home = () => {
    const [a, setA] = useState(100)

    function plus() {
        setA(function (prev) {
            return prev+200; //持续奏效，每点一次加200
        })
    }

    return <div className="app"> 
        {a}
        <button onClick={plus}>加法</button>
        <Edit />
        <List />
    </div>
}

export default Home;
*/
