import React, { Component } from 'react'
import axios from 'axios'

export default class Products extends Component {
    constructor() {
        super()
        this.state = {
            products: []
        }
    }

    async removeProduct(productId) {
        await axios.delete(`/api/products/${productId}`)
        this.setState({
            products: this.state.products.filter(product => product.id != productId)
        })
        console.log(this.state)
    }

    async componentDidMount() {
        const res = await axios.get('/api/products')
        this.setState({ products: res.data })
    }

    render() {
        return (
            <div className='card'>
                {this.state.products.map(product =>
                    <div className='card-body' key={product.id}>
                        <span>{product.name}</span> <br></br>
                        <span className="badge badge-success">${product.price}</span><br></br>
                        <span>${product.discount > 0 ? ((product.discount / 100) * product.price) : ''}</span><br></br>
                        <span className="badge badge-success">{product.availability}</span><br></br>
                        <button className="btn btn-danger btn-sm" onClick={() => this.removeProduct(product.id)}>Delete</button>
                    </div>)}
            </div>
        )
    }
}