import React from 'react';
import CardPizza from '../CardPizza/CardPizza'; // Ajusta la ruta según tu estructura de archivos
import Header from './Header';

const Home = ({ pizzas }) => {
    console.log(pizzas);

    return (
        <div className="container">
            <div className="row">
                {pizzas.map((pizza) => (
                    <div className="col-md-4" key={pizza.id}>
                        <CardPizza pizza={pizza} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
