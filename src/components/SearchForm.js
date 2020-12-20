import '../css/Gnt.css';
import {useState, useEffect, useContext} from "react";

function SearchForm(props){
    console.log('SearchForm props : ', props);
    return (
        <section className="top_menu">
            <div className="wrap">
                <div className="search_box">
                    <input type="text" className="form-control" id="" placeholder="라이언" />
                    <input className="btn_sch" type="button" value="검색"/>
                </div>
                <button type="button" className="btn btn-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                         className="bi bi-sliders" viewBox="0 0 16 16">{/*bi-plus-square*/}
                        <path fill-rule="evenodd"
                              d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"></path>
                    </svg>
                    <span className="visually-hidden">Button</span>
                </button>

                <input className="btn_pop" id="popBtn" type="button" value="조건" onClick={()=> {
                    props.onChangeEvent("schPop");
                }}/>
                <input className="btn_add" id="addBtn" type="button" value="등록" onClick={()=> {
                    props.onChangeEvent("add");
                }}/>
            </div>
        </section>
    );
}

export default SearchForm;
