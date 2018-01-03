import React, { Component } from 'react'



class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            headers: this.props.headers.headers,
            items: this.props.items.items
        }
    }

    render () {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            {this.state.headers.map((header, i) => (
                                <th key={header.i} className={ header.class }><span></span></th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.items.map((item, i) => (
                            <tr>
                                <td><input type="checkbox" /></td>
                                <td>{ item.body }</td>
                                <td>{ item.link  ? <a href={item.link} target='_blank'>link</a> : "" }</td>
                                <td>{ item.time }</td>
                                <td>{ item.rank }</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table
