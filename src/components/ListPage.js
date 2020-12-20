import '../css/Gnt.css';
import {useState, useEffect, useContext} from "react";

function ListPage() {
    const [state, setState] = useState({
       //여기에 객체
    });
    const [mode, setMode] = useState("read");
    const [title, setTitle] = useState("리스트");
    const list = {
        contents : [
            {id:"1", type:"give", date:"2020.12.01", target:"라이언", anniv:"결혼", item:"현금", price:"50000", memo:"강남 웨딩홀"},
            {id:"2", type:"take", date:"2020.12.05", target:"어피치", anniv:"생일", item:"기프티콘", price:"15000", memo:""},
            {id:"3", type:"give", date:"2020.12.12", target:"하므토리바므토일", anniv:"생일", item:"현금", price:"70000", memo:""},
        ]
    };
    return (
        <div>
            <header>{title} / {mode}</header>
            <View mode="read" title="리스트" list={list.contents}/>
        </div>
    );
}


function addFromOpen(props){
    console.log("addFromOpen props : ", props);
    document.getElementById("view").style.display = "none";
    document.getElementById("writeForm").style.display = "block";
}

export default ListPage;
