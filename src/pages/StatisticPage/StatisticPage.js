
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { Link } from 'react-router-dom'
import BitcoinService from '../../services/BitcoinService';
import './StatisticPage.scss'

export default class StatisticPage extends Component {

    state = {
        chart: true,
        slotsToChart: null,
        fetchData: null,
        numberInput: '',
        spanInput: ''

    }

    async  componentDidMount(value) {
        var slotsToChart = []
        var fetchData = await BitcoinService.getMarketPrice(value)
        this.setState({ fetchData })
        fetchData.data.values.forEach(slot => {
            slotsToChart.push(slot.y)
        })
        this.setState({ slotsToChart })
    }

    constructor(props) {
        super(props);
        this.getSpan = this.getSpan.bind(this);
    }

    getSpan(num) {
        this.componentDidMount(num)
    }

    render() {
        const { chart } = this.state
        const { fetchData } = this.state
        const { slotsToChart } = this.state
        return slotsToChart && (
            <div className="stat-container">
                <h1>Statistcs</h1>
                <ul className="months-container">
                    <li onClick={(e) => { this.getSpan(1) }}>1M</li> |
                        <li onClick={(e) => { this.getSpan(2) }}>2M</li> |
                        <li onClick={(e) => { this.getSpan(6) }}>6M</li> |
                        <li onClick={(e) => { this.getSpan(12) }}>12M</li> |
                        <li onClick={(e) => { this.getSpan(24) }}>24M</li>

                </ul>
                <h2>{fetchData.data.name}</h2>
                <Sparklines data={slotsToChart}>
                    <SparklinesLine style={{ fill: "none" }} />
                    <SparklinesSpots />
                </Sparklines>

            </div>


        )
    }

}