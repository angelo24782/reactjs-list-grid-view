import React from "react";
import '../style/App.css';

const LayoutListProfiles = ({ picture, name, email, registered }) => {


    return (
        <>
            <div className="col-12 col-sm-8 col-lg-5 mb-3">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        <img className="img-fluid imgList" src={picture.large} alt="profile" />
                        <div className="card-body">
                            <h5 className="card-text"><i className="fa fa-user mr-3" aria-hidden="true"></i> {name.first} {name.last}</h5>
                            <h5 className="card-text"><i className="fa fa-envelope mr-3" aria-hidden="true"></i> {email} </h5>
                            <h5 className="card-text"><i className="fa fa-calendar mr-3" aria-hidden="true"></i> {new Date(registered.date).toLocaleDateString("it-IT")}</h5>
                        </div>
                    </li>
                </ul>
            </div>
        </>


    );
};

export default LayoutListProfiles;