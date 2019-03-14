import React from 'react';
import './Contact.css';
import 'bootstrap/dist/css/bootstrap.css';
import { MdDelete } from "react-icons/md";


const contact = (props) => {
    return (
        <div>
            <div className="row">
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{props.FirstName}</h5>
                            <p className="card-text">
                                Last Name: {props.LastName} <br/>
                                Birthday: {props.Birthday} <br/>
                                Telephone: {props.Telephone}
                            </p>
                            <button onClick={props.delete}><MdDelete /> Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default contact;