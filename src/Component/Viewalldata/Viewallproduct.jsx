import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { base_url } from '../../Api/Api';

// ++++Jewellery
const Jewellery = axios.get(base_url + "/products").then((res) => {
    let prod = res.data;
    let newpro = prod.filter((spro) => {
        // console.log(spro);
        if (spro.category == "womens-jewellery") {
            return spro
        }

    })
    return newpro;
    // console.log(newpro);
    // dispatch(allproduct(newpro))

}).catch((err)=>{
    console.log("err",err);
})



function Viewalldata() {
    console.log(Jewellery,"Jewellery");

    const [Jewellery_pro, setJewellery_pro] = useState([]);

    Jewellery.then((res)=>{
        // console.log("res",res);
        setJewellery_pro(res);

    }).catch((err)=>{
        console.log("err",err);
    })

    return (
        <>

            <div className='electronic_pro'>
                <div className='electronic'>Best of Electronics</div>
                <p>{Jewellery_pro.length} items</p>
            </div>
            <hr />

            <Container>
                <Row>
                    <div className='product-show'>
                        {
                            Jewellery_pro.map((jew) => {
                                return (
                                    // console.log("jew",jew)
                                    <>

                                        <Card style={{ width: '18rem', margin: "20px" }}>
                                            <Card.Img variant="top" src={jew.thumbnail} />
                                            <Card.Body>
                                                <Card.Title>{jew.title}</Card.Title>
                                                <ListGroup.Item>$ {jew.price}</ListGroup.Item>
                                                <Card.Text>
                                                    {jew.brand}
                                                </Card.Text>
                                                <Button onClick={() => handleClick(jew)} variant="primary">Add to Cart</Button>
                                            </Card.Body>
                                        </Card>


                                    </>
                                )
                            })
                        }

                    </div>
                </Row>
            </Container>


        </>
    )
}


export default Viewalldata
