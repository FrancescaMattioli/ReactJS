import React from "react";
import Card from "./Card";

function ItemListContainer() {
    return (
        <div>
            <Card 
                title="Producto 1" 
                detail="Lorem Ipsum" 
                price="100"  
            />
            <Card 
                title="Producto 2" 
                detail="Lorem Ipsum" 
                price="150"  
            />
            <Card
                title="Producto 3" 
                detail="Lorem Ipsum" 
                price="200" 
            />
        </div>
    );
}

export default ItemListContainer;