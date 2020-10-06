import React from "react";
import '../style/App.css';

const LayoutGridProfiles = ({ picture, name, email, registered }) => {


    return (
        <>


            <div className="card-deck">
                <div className="card text-center">
                    <img className="card-img-top imgGrid" src={picture.large} alt="profile" />
                    <div className="card-body">
                        <i className="fa fa-user" aria-hidden="true"></i><p className="card-text fs13">{name.first} {name.last}</p>
                        <i className="fa fa-envelope" aria-hidden="true"></i> <p className="card-text fs13">{email} </p>
                        <i className="fa fa-calendar" aria-hidden="true"></i> <p className="card-text fs13">{new Date(registered.date).toLocaleDateString("it-IT")}</p>
                    </div>
                </div>
            </div>


        </>


    );
};

export default LayoutGridProfiles;