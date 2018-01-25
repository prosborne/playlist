import React, { Component } from 'react'
import firebase from 'firebase'


class List extends Component {
    constructor(props){
        super(props);

        this.state = {
            lType: {lType},
            lDateStart: {lDateStart},
            lDateEnd: {lDateEnd},
            lvalues: {}
        };
    }

    listSubmit() {
        firebase.database().ref('list'+this.state.uid).set({
            lType: this.state.lType,
            lDateStart: this.state.lDateStart,
            lDateEnd: this.state.lDateEnd,
            lvalues: this.state.values
        })
    }
    render () {
        return (
            <div>
                <h1>List Management</h1>
            </div>
        )
    }
}

export default List;
