import React, { Component } from 'react'
import Table from '../table';
import Link from 'react-dom'

const FullName = 'Peter Riley Osborne';


const headers = [{class: 'check-all', body: 'Check All Items'}, {class: 'description', body: ''}, {class: 'link', body: 'link'}, {class: 'time', body: 'time'},  {class: 'rank', body: 'rank'} ];
const items = [
        {body: 'This is the first entry in my list of fun things to be listing', link: 'http:www.link.com', time: '1:20', rank: '4'},
        {body: 'This is the first entry in my list of fun things to be listing', link: 'http:www.link.com', time: '1:20', rank: '4'},
        {body: 'This is the first entry in my list of fun things to be listing', link: 'http:www.link.com', time: '1:20', rank: '4'},
        {body: 'This is the first entry in my list of fun things to be listing', link: 'http:www.link.com', time: '1:20', rank: '4'},
        {body: 'This is the first entry in my list of fun things to be listing', link: 'http:www.link.com', time: '1:20', rank: '4'},
        {body: 'This is the first entry in my list of fun things to be listing', link: 'http:www.link.com', time: '1:20', rank: '4'},
        {body: 'This is the first entry in my list of fun things to be listing', link: 'http:www.link.com', time: '1:20', rank: '4'}
    ];

class Dashboard extends Component {
    render () {
        console.log(FullName, {FullName});
        return (
            <div className="dashboard">
                <section className="dash-data">
                    <article className="userName">
                        <h1>Your Current Lists</h1>
                        <p><span></span><a href='/user'>{FullName}</a></p>
                    </article>
                    <article className="lifetime">
                        <span>74%</span>
                        <p>Lifetime Completion Percentage</p>
                    </article>
                    <article className="year">
                        <span>48%</span>
                        <p>This Year</p>
                    </article>
                    <article className="month">
                        <span>76%</span>
                        <p>This Month</p>
                    </article>
                    <article className="day-week">
                        <div className="item">
                            <span>24%</span>
                            <p>Today</p>
                        </div>
                        <div className="item">
                            <span>13%</span>
                            <p>Week</p>
                        </div>
                    </article>
                </section>
                <section className="list-results">
                    <article className="header">
                        <div className="active">Today</div>
                        <div>Week</div>
                        <div>Month</div>
                        <div>Year</div>
                    </article>
                    <article className="list-table">
                        <Table headers={{headers}} items={{items}} />
                        <button>Submit List</button>
                    </article>
                </section>
            </div>
        )
    }
}

export default Dashboard
