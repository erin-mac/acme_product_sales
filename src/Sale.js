import React, { Component } from 'react'
import axios from 'axios'

export default class Sale extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    async removeProduct(productId) {
        const res = await axios.delete(`/api/products/${productId}`)
        const newState = this.state.products.filter((product) => product.id != res.id)
        setState({ products: newState })
    }

    async componentDidMount() {
        const res = await axios.get('/api/products')
        const saleData = res.data.filter(data => data.discount > 0)
        this.setState({ products: saleData })
    }


    render() {
        return (
            <div className='card'>
                {this.state.products.map(product =>
                    <div className='card-body' key={product.id}>
                        <span>{product.name}</span> <br></br>
                        <span style={{ textDecorationLine: 'line-through' }}>${product.price}</span> <br></br>
                        <span className="badge badge-success" > ${product.discount > 0 ? ((product.discount / 100) * product.price) : ""}</span> <br></br>
                        <span className="badge badge-success">{product.availability}</span> <br></br>
                        <button className="btn btn-danger btn-sm" onClick={() => this.removeProduct(product.id)}>Delete</button>
                    </div>)}
            </div>
        )
    }
}