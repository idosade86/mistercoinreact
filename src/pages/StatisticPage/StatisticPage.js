
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import {Link} from 'react-router-dom'
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

    getSpan(ev) {
        this.componentDidMount(this.input.value)
        ev.preventDefault()
    }

    render() {
        const { chart } = this.state
        const { fetchData } = this.state
        const { slotsToChart } = this.state
        return slotsToChart && (
            <div>
                <form action="submit.prevent" onSubmit={this.getSpan}>
                    <input type="number" ref={(input) => this.input = input} />
                    {/* <input list="timespan" ref={(input) => this.input= input}/>
                    <datalist id="timespan">
                        <option value="Days" />
                        <option value="Months" />
                        <option value="Years" />
                    </datalist> */}
                    <button>Get rates</button>
                </form>
                {/* todo change chart by click months */}
                <ul className="months-container">
                    <li>1M</li> |
                    <li>2M</li> |
                    <li>6M</li> |
                    <li>12M</li> |
                    <li>24M</li>
                </ul>

                <h1>Statistcs</h1>
                <h2>{fetchData.data.name}</h2>
                <Sparklines data={slotsToChart}>
                    <SparklinesLine style={{ fill: "none" }} />
                    <SparklinesSpots />
                </Sparklines>
                <Link to="/Contact">
                <button>Bit a friend</button>
                </Link>
            </div>


        )
    }

}