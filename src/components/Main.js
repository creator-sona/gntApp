import '../css/Gnt.css';
import React, {useState, useEffect, useContext} from "react";
import SearchForm from "./SearchForm";
import AnnivList from "./AnnivList";
import SearchPop from "./SearchPop";

function Main() {
    const [mode, setMode] = useState("read"); // read, add, modify, schPop
    const [title, setTitle] = useState("리스트");
    const [list, setList] = useState ({
        contents : [
            {id:"1", type:"give", date:"2020.12.01", target:"라이언", anniv:"결혼", item:"현금", price:"50000", memo:"강남 웨딩홀"},
            {id:"2", type:"take", date:"2020.12.05", target:"어피치", anniv:"생일", item:"기프티콘", price:"15000", memo:""},
            {id:"3", type:"give", date:"2020.12.12", target:"하므토리바므토일", anniv:"생일", item:"현금", price:"70000", memo:""},
        ]
    });

    var _tit, _mode = null;
    if(mode === 'read'){
        _tit = "리스트";
        _mode = "read";
    } else if(mode === 'add'){
        _tit = "등록하기"
        _mode = "add";
    } else if(mode === 'modify'){
        _tit = "수정하기"
        _mode = "modify";
    } else if(mode === 'schPop'){
        _tit = "조건 검색"
        _mode = "schPop";
    }
    //17.2. compontent event making
    return (
        <div>
            <header>{_tit} / {_mode}</header>
            <main id="view">
                <SearchForm onChangeEvent={function(btn){
                    btn === "add" ? setMode("add") : setMode("schPop");
                    if(btn === "schPop"){
                        document.getElementById("schPop").style.display="block";
                    }
                }}/>
                <AnnivList mode="read" title="리스트" list={list.contents}/>
            </main>
            <SearchPop />
        </div>
    );
}

export default Main;
