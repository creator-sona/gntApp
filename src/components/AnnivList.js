import '../css/Gnt.css';
import {useState, useEffect, useContext} from "react";

function AnnivList(props){
    console.log('AnnivList props : ', props);

    let lists = [];
    let data = props.list;
    for(let i= 0; i < data.length; i++){
        lists.push(
            <li className={data[i].type === "give" ? "give_ico" : "take_ico"} key={data[i].id}>
                <div className="left">
                    <span>{data[i].date}</span>
                    <span className="desc">{data[i].target} {data[i].anniv} <br/> <small>{data[i].memo}</small></span>
                </div>
                <div className="right">
                    <span>{data[i].item}</span>
                    <span className="price">{data[i].price}</span>
                </div>
            </li>
        )
    }
    return (
        <section>
            <p className="year_line"><span>2020</span></p>
            <ul className="list">
                {lists}
            </ul>
        </section>
    );
}

export default AnnivList;
