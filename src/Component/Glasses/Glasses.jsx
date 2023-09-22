import axios from 'axios';
import React, { useState } from 'react'
import { Button, Card, Container, ListGroup, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux'
import { base_url } from '../../Api/Api';


const glasses = axios.get(base_url + "/products").then((res) => {
    let prod = res.data;
    let newpro = prod.filter((spro) => {
        console.log(spro);
        if (spro.category == "sunglasses") {
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
    console.log(glasses,"glasses");

    const [Jewellery_pro, setJewellery_pro] = useState([]);

    glasses.then((res)=>{
        // console.log("res",res);
        setJewellery_pro(res);

    }).catch((err)=>{
        console.log("err",err);
    })

    return (
        <>

            <div className='electronic_pro'>
                <div className='electronic'>Best of sunglasses</div>
                <p>{Jewellery_pro.length} items</p>
            </div>
            <hr />

            <Container>
                <Row>
                    <div className='product-show'>
                        {
                            Jewellery_pro.map((p) => {
                                return (
                                    // console.log("jew",jew)
                                    <>

                                        <Card style={{ width: '18rem', margin: "20px" }}>
                                            <Card.Img variant="top" src={p.thumbnail} />
                                            <Card.Body>
                                                <Card.Title>{p.title}</Card.Title>
                                                <ListGroup.Item>$ {p.price}</ListGroup.Item>
                                                <Card.Text>
                                                    {p.brand}
                                                </Card.Text>
                                                <Button onClick={() => handleClick(p)} variant="primary">Add to Cart</Button>
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
