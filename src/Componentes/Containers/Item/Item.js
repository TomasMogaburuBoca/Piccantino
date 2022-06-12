import { Card, Button } from 'react-bootstrap';

const Item = ({producto}) => {
    return (
            <>
                <Card className='card' style={{ width: '18rem' }}>
                            <Card.Body className="cardBody">
                                <Card.Img className="cardImg" variant="top" src={producto.img} />
                                <Card.Title>{producto.name}</Card.Title>
                                    <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                    </Card.Text>
                                    <Card.Text>
                                        $ {producto.price}
                                    </Card.Text>
                                <Button variant="primary">Agregar</Button>
                            </Card.Body>
                </Card>
            </>    
    )
}
export default Item;
