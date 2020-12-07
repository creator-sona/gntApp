import '../css/Gnt.css';
import {useState} from "react";

function ListPage() {
    const [pageInfo, setPageInfo] = useState({
        mode: 'read',
    });

    return (
        <div className="list_page">
            <header>리스트{pageInfo.mode}</header>
            <main>
                <input type="button" value="click" onClick={() => setPageInfo({mode : 'write'})}/>
                <TopMenu pageInfo={pageInfo}/>
                <List />
            </main>
        </div>
    );
}

function TopMenu({pageInfo}){
    console.log(pageInfo);
    return (
        <section className="top_menu">
            <div className="wrap">
                <div className="search_box">
                    <input type="text" placeholder="라이언"/>
                    <input className="btn_sch" type="button" value="검색"/>
                </div>
                <input className="btn_pop" type="button" value="조건"/>
                <input className="btn_add" type="button" value="등록" />
            </div>
        </section>
    );
}

function List(){
    return (
        <section>
            <p className="year_line"><span>2020</span></p>
            <ul className="list">
                <li className="give_ico">
                    <div className="left">
                        <span>12.12</span>
                        <span className="desc">라이언 결혼 <br/> <small>강남 카카오웨딩홀</small></span>
                    </div>
                    <div className="right">
                        <span>현금</span>
                        <span className="price">100,000</span>
                    </div>
                </li>
                <li className="take_ico">
                    <div className="left">
                        <span>12.12</span>
                        <span className="desc">어피치 생일 <br/> <small></small></span>
                    </div>
                    <div className="right">
                        <span>기프티콘</span>
                        <span className="price">15,000</span>
                    </div>
                </li>
                <li className="give_ico">
                    <div className="left">
                        <span>12.12</span>
                        <span className="desc">튜브김튜뷰 돌잔치 <br/> <small>튜브김튜뷰유튜뷰어쩌고저쩌고</small></span>
                    </div>
                    <div className="right">
                        <span>현금</span>
                        <span className="price">50,000</span>
                    </div>
                </li>
            </ul>
        </section>
    );
}

export default ListPage;
