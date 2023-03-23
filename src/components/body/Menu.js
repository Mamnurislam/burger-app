import React, { Component } from 'react'
import DISHES from '../../data/Dishes'
import MenuItem from './MenuItem'
import DishDetail from './DishDetail'
export default class Menu extends Component {
    state={
        dishes:DISHES,
        selectDish:null
    }

     onDishSelection = dish=>{
        this.setState({
            selectDish:dish
        })
     }

  render() {
    const menu = this.state.dishes.map((item)=>{
            return <MenuItem dishes={item} 
            key={item.id} 
            dishselect={this.onDishSelection.bind(this,item)}
            />
    })

   let selectdish = null;
    if(this.state.selectDish !=null){
        selectdish = <DishDetail dishselect={this.state.selectDish}/>
    }

    return (
       
      <div>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-6">
                    <div className="menu">
                        {menu}
                    </div>   
                </div>
                <div className="col-md-6">
                    {selectdish}
                </div>
            </div>
        </div>
        
      </div>
    )
  }
}
