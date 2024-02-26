import React, {Component} from 'react';

class addItem extends Component {
    state = {
        product: '',
        price: '',
        quantity:''
    }

    handleChange = (e) => {
        console.log(e.target.id + ": " + e.target.value)
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleClickAdd = (e) => {
        console.log(e.target.innerHTML === "+")
        e.preventDefault()
            this.setState({
                quantity:Number(this.state.quantity)+1
            })
    }

    handleClickSub = (e) => {
        console.log(e.target.innerHTML === "-")
        e.preventDefault()
        if(this.state.quantity > 1){
            this.setState({
                quantity:Number(this.state.quantity)-1
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.add(this.state)
        this.setState({
            product: '',
            price: '',
            quantity:''
        })
    }

    render(){
        return(
            <div className="item">
                <form onSubmit={this.handleSubmit}>
                    <input type="text" value={this.state.product} placeholder="Enter Product" id="product" onChange={this.handleChange} required/>
                    <input type="number" value={this.state.price} placeholder="Enter Price" id="price" onChange={this.handleChange} required/>
                    <div className='input--quantity'>
                        <input type="number" value={this.state.quantity} placeholder="Quantity" id="quantity" onChange={this.handleChange} required/>
                        <button className='btn--quantity' onClick={this.handleClickAdd}>+</button>
                        <button className='btn--quantity' onClick={this.handleClickSub}>-</button>
                    </div>
                    <input type="submit" value="Add"/>
                </form>
            </div>
        )
    }
}

export default addItem;