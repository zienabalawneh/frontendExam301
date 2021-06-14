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


{/* 
                        {this.state.showDigimonsFav &&

                            this.state.digimons.map((digimon, idx) => {
                            
                                    <Card style={{ width: '400px',height:'400px' }} key={idx}>
                                        <Card.Img variant="top" src={digimon.img} />
                                        <Card.Body>
                                            <Card.Title>{digimon.name}</Card.Title>
                                            <Card.Text>
                                                {digimon.level}
                                            </Card.Text>
                                             <Button variant="primary" onClick={() => this.deleteFavFun(idx)}> delete </Button>
                                            

                                        </Card.Body>
                                    </Card>
                             
                            })

 





                        }*/}

              
            </>
        )
    }
}
export default FavoriteDigimons;

