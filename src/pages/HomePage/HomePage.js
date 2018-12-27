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
                        <div className="btns-container">
                            <Link to="/contact">
                                <button>Money transfer</button>
                            </Link>
                            <Link to="/Statistics">
                                <button>Statistics</button>
                            </Link>
                        </div>
                    </header>
                }
            </div>
        );
    }
}
export default HomePage