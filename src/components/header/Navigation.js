import React from 'react'
import {Navbar,NavbarBrand} from "reactstrap"
export default function Navigation() {
  return (
    <div>
        <Navbar  dark color="dark">
            <div className="container">
                <div className="row">
                    <NavbarBrand>Burger Resturant</NavbarBrand>
                </div>
            </div>
        </Navbar>
    </div>
  )
}
