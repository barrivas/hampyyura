import React, { Component } from "react";

const PRODUCTS_URL = "http://localhost:3000/api/products";
// const PRODUCTS_URL = "/api/products";

export default class ProductsInDb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
        };

        console.log("Evento: Constructor");
    }

    render() {
        if (!this.state.products) {
            return <div class="row">CARGANDO!!!</div>;
        }

        return (
            <div class="row">
                <div class="col-lg-6 mb-4">
                    <div class="card bg-dark text-white shadow">
                        <div class="card-body">Belleza</div>
                    </div>
                    <div class="card bg-dark text-white shadow">
                        <div class="card-body">Higiene</div>
                    </div>
                    <div class="card bg-dark text-white shadow">
                        <div class="card-body">Salud</div>
                    </div>
                </div>
            </div>
        );
    }

    componentDidMount() {
        console.log("Evento: componentDidMount");
        this.fetchProducts();
    }

    async fetchProducts() {
        //Fetch de los generos
        const result = await fetch(PRODUCTS_URL);
        const response = await result.json();
        const products = response.data;
        console.log(products);

        //Setear como un estado
        this.setState({ products: products });
    }
}
