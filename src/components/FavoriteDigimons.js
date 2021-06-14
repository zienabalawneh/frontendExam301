import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


class FavoriteDigimons extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            serverLink: process.env.SERVER_APP_REACT,
            showDigimonsFav: false,
            digimons: []
        }
    }


    render() {
        return (
            <>

              
            </>
        )
    }
}
export default FavoriteDigimons;

