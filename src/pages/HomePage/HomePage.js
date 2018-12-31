import React, { Component } from 'react';
import BitcoinService from '../../services/BitcoinService.js'
import { Link } from 'react-router-dom'
import '../HomePage/HomePage.scss'
import { inject, observer } from 'mobx-react';



@inject('store')
@observer
class HomePage extends Component {
    state = {
        BTC: null,
        rate: null,
    }

    componentDidMount() {
        const rate = BitcoinService.getRate();
        this.setState({ rate })
    }

    render() {
        const rate = this.state.rate
        const logedUser = this.props.store.UserStore.logedUser
        
        return (
            <div>
                {
                    logedUser && <header className="home-header">
                        <ul>
                            <h1>Hello: {logedUser.name}</h1>
                            <li>Coins:{logedUser.coins}</li>
                            <li>BTC: {rate}</li>
                        </ul>


                        <div>
                            <h2>Your last 3 moves</h2>
                            <div className="moves-sep"></div>
                            <div>
                                <p>To: Dominic Soto</p>
                                <p>At: 8/12/2018, 11:37 AM</p>
                                <p>Amount: 3 coins</p>
                            </div>
                            <div className="moves-sep"></div>
                            <div>
                                <p>To: Glena Santana</p>
                                <p>At: 6/12/2018, 5:05 PM</p>
                                <p>Amount: 10 coins</p>
                            </div>
                            <div className="moves-sep"></div>
                            <div>
                                <p>To: Grce James</p>
                                <p>At: 3/12/2018, 6:50 PM</p>
                                <p>Amount: 5 coins</p>
                            </div>
                        </div>
                     
                    </header>
                }
            </div>
        );
    }
}
export default HomePage