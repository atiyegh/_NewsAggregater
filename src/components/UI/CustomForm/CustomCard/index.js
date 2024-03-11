import React from 'react';
import {Link} from "react-router-dom";
import {Card} from "antd";
import Meta from "antd/es/card/Meta";

function CustomCard(props) {
    const {
        linkProps,
        cardProps,
        metaProps,
        type,
        cardContent,
        ...rest
    }=props;

    return (
        linkProps ? <Link {...linkProps}>
            <Card {...cardProps} {...rest}>
                {type==="meta" && <Meta {...metaProps}/>}
                {cardContent}
            </Card>
        </Link>: <Card>
            {type==="meta" && <Meta {...metaProps}/>}
            {cardContent}
        </Card>
    );
}

export default CustomCard;