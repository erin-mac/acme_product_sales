import React, { Component } from 'react'
import axios from 'axios';

export default class CreateProduct extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            price: 0,
            discount: 0,
            availability: ''
        }
    }

    onChange = (evt) => {
        console.log(evt.target.name + ': ' + evt.target.value)
        this.setState({ [evt.target.name]: evt.target.value })
    }

    onSubmit = async (submit) => {
        try {
            //submit.preventDefault()
            const res = await axios.post('/api/products',
                {
                    name: this.state.name,
                    price: this.state.price,
                    discount: this.state.discount,
                    availability: this.state.availability
                }
            )

        } catch (error) { console.log(error) }
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} >
                <div className='form-group'>
                    <label htmlFor='name'>Name:</label>
                    <input name='name' className="form-control" type='text' onChange={this.onChange} />
                    <label htmlFor='price'>Price:</label>
                    <input name='price' className="form-control" type='text' onChange={this.onChange} />
                    <label htmlFor='discount'>Discount:</label>
                    <input name='discount' className="form-control" type='text' onChange={this.onChange} />
                    <label htmlFor='availability'>Availability:</label>
                    <select name='availability' className="form-control" onChange={this.onChange}>
                        <option>instock</option>
                        <option>backordered</option>
                        <option>discontinued</option>
                    </select>

                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}