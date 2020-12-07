import '../css/Gnt.css';
import {useState} from "react";

function ListPage() {
    const [pageInfo, setPageInfo] = useState({
        mode: 'read',
    });

    return (
        <div className="List_page">
            <header>리스트{pageInfo.mode}</header>
            <input type="button" onClick={() => setPageInfo({mode : 'write'})}/>
            <TopMenu pageInfo={pageInfo}/>
            <List />
        </div>
    );
}

function TopMenu({pageInfo}){
    console.log(pageInfo);
    return (
        <div className="top_menu">
            <div className="search_box">
                <input type="text"/>
                <button>검색</button>
            </div>
            <input className="btn_pop" type="button" value="조건검색"/>
            <input className="btn_add" type="button" value="등록" />
        </div>
    );
}

function List(){
    return (
        <div>
            <p className="year">---------- 2020 ----------</p>
            <ul className="list">
                <li>
                    <div className="left">
                        <span>12.12</span>
                        <span>라이언 결혼 <br/> 강남 카카오웨딩홀</span>
                    </div>
                    <div className="right">
                        <span>현금</span>
                        <span>100,000</span>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default ListPage;
