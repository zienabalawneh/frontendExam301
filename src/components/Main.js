import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';



class Main extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            serverLink: process.env.SERVER_APP_REACT,
            showDigimons: false,
            digimons: []
        }
    }

    componentDidMount = async () => {

        const digimons = await axios.get(`${this.state.serverLink}/digimons?digimon=Tsunomon`);
        this.setState({

            digimons: digimons.data,
            showDigimons: true,



        })




    }



    // addFavFun = async (digimon) => {


    //     await axios.post(`${this.state.serverLink}/addDigimons`);


    // }





    render() {
        return (
            <>
              
                        {this.state.showDigimons &&

                            this.state.digimons.map((digimon, idx) => {
                          
                                    <Card style={{ width: '400px', height: '400px' }} key={idx}>
                                        <Card.Img variant="top" src={digimon.img} />
                                        <Card.Body>
                                            <Card.Title>{digimon.name}</Card.Title>
                                            <Card.Text>
                                                {digimon.level}
                                            </Card.Text>
                                            {/* <Button variant="primary" onClick={() => this.addFavFun(digimon)}> add Favorite Digimons </Button> */}
                                        </Card.Body>
                                    </Card>
                         
                            })






                        }






            </>
        )
    }
}
export default Main;