import React from "react";
import '../style/App.css';

const BtnGroup = ({ handleList, handleGrid, buttonListActive, buttonGridActive }) => {
    return (
        <div className="btnMl-15">
            <button type="button" onClick={handleList} id="list" className={`btn ml-3 cursor-pointer ${buttonListActive === true ? "btn-primary" : "btn-secondary"}`}>
                <i className="fa fa-list" aria-hidden="true"></i> List
            </button>
            <button type="button" onClick={handleGrid} id="grid" className={`btn btn-primary ml-3 cursor-pointer ${buttonGridActive === true ? "btn-primary" : "btn-secondary"}`}>
                <i className="fa fa-th" aria-hidden="true"></i> Grid
            </button>
        </div>
    );
};


export default BtnGroup;
