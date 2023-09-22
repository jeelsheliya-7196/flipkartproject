import axios from 'axios'
import React from 'react'
import { Button, Card, Container, Row } from 'react-bootstrap'
import { base_url } from '../../Api/Api'
import { useDispatch } from 'react-redux'
// import { anyncproductview } from '../../services/Action/action'
import { useNavigate } from 'react-router'




function ViewProduct() {


    const filterdata = () => {
        axios.get(base_url + "/products").then((res) => {
            let filter_data = res.data;
            // console.log(filter_data, "res");
            const newfilterdata = filter_data.map((filter) => {
                // console.log("filter",filter);
                return filter.category;
            })
            // console.log(newfilterdata,"newfilterdata");


            const Filter_data = newfilterdata.filter((filter, index) => {
                return newfilterdata.indexOf(filter) == index;
            })
            // console.log("Filter_data", Filter_data);
            return Filter_data;

        }).catch((err) => {
            console.log("err", err);
        })





    }
    
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const productclick = async ()=>{

        // await dispatch(anyncproductview()); 
        navigate('/viewalldata')
        
    }
    // filterdata();

    const phoneclick = async () =>{
        navigate('/phone')
    }

    const glassclick = async () =>{
        navigate('/glasses')
    }
    return (
        <>
            <Container>
                <Row>
                    <div className='d-flex mt-5'>
                        <Card className='card-1'>
                            <Card.Body>
                                <Card.Title>Jewellery's</Card.Title>
                                <Button variant="primary"  onClick={productclick}>VIEW ALL</Button>
                            </Card.Body>
                        </Card>
                        {/* {
                            filterdata().map((fd)=>{
                                console.log(fd,"fd");
                            })
                        } */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/76/1.jpg"/>
                            <Card.Body>
                                <Card.Title>Silver Ring Set Women</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/79/1.jpg"/>
                            <Card.Body>
                                <Card.Title>Elegant Female Pearl Earrings</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src= "https://i.dummyjson.com/data/products/80/1.jpg"/>
                            <Card.Body>
                                <Card.Title>Chain Pin Tassel Earrings</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='d-flex mt-5'>
                        <Card className='card-2'>
                            <Card.Body>
                                <Card.Title>Phone's</Card.Title>
                                <Button variant="primary" onClick={phoneclick}>VIEW ALL</Button>
                            </Card.Body>
                        </Card>
                        {/* {
                            filterdata().map((fd)=>{
                                console.log(fd,"fd");
                            })
                        } */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/2/thumbnail.jpg" />
                            <Card.Body>
                                <Card.Title>iPhone X</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/4/thumbnail.jpg" />
                            <Card.Body>
                                <Card.Title>oppov50</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/6/thumbnail.png" />
                            <Card.Body>
                                <Card.Title>Mac book</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className='d-flex mt-5'>
                        <Card className='card-3'>
                            <Card.Body>
                                <Card.Title>Men's Sunglasses</Card.Title>
                                <Button variant="primary" onClick={glassclick}>VIEW ALL</Button>
                            </Card.Body>
                        </Card>
                        {/* {
                            filterdata().map((fd)=>{
                                console.log(fd,"fd");
                            })
                        } */}
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src= "https://i.dummyjson.com/data/products/84/1.jpg"/>
                            <Card.Body>
                                <Card.Title>Square Sunglasses</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src=  "https://i.dummyjson.com/data/products/89/1.jpg" />
                            <Card.Body>
                                <Card.Title>car charger</Card.Title>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://i.dummyjson.com/data/products/83/1.jpg" />
                            <Card.Body>
                                <Card.Title>Wiley X Night Vision Yellow Glasses</Card.Title>
                            </Card.Body>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default ViewProduct
