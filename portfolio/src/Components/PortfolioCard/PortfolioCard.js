import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const PortfolioCard = (props) => {
    return (
        <Card className="m-2 col-lg-3 col-md-4 col-sm-12 col-12">
            <CardImg top width="100%" className="mt-3" src="https://www.wolflair.com/wp-content/uploads/2017/01/placeholder.jpg" alt="Card image cap" />
            <CardBody>
                <CardTitle>{props.title}</CardTitle>
                <CardSubtitle className="text-muted" >{props.subtitle}</CardSubtitle>
                <CardText className="text-muted">{props.description}</CardText>
                <a href={props.link}><Button className="w-100">View</Button></a>
            </CardBody>
        </Card>
    );
};

export default PortfolioCard;
