import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container-fluid d-flex" style={{alignItems:"center",justifyContent:"center"}}>
                        <a class="navbar-brand" style={{fontSize:"2rem"}} href="#">Climate Canvas</a>
                    </div>
                </nav>
            </div>
        )
    }
}
