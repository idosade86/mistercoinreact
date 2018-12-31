
import React, { Component } from 'react';
import '../ContactPage/ContactPage.scss'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react';
import addButton from '../../imgs/add.png'

@inject('store')
@observer
class ContactPage extends Component {

    state = {
        filterByName: ''
    }

    async componentDidMount() {
        this.props.store.contactStore.fetchContacts();
    }

    constructor(props) {
        super(props);
        this.handleFilter = this.handleFilter.bind(this);
    }

    async handleFilter() {
        this.props.store.contactStore.fetchContacts(this.input.value);
    }

    onClose(filterByName) {
        this.setState({ filterByName })
    }

    render() {
        const { contacts } = this.props.store.contactStore

        return (
            <div className="contact-header">
                <input className="search-input" type="text" placeholder="Search" ref={(input) => this.input = input} onChange={this.handleFilter} />
                {
                    < section className="contact-container">
                        {
                            contacts.map(user => (
                                <Link className="user-link" key={user._id} to={`/Contact/${user._id}`}>
                                    <div className="user-item">
                                        <img src={`https://robohash.org/${user.name}.png`}></img>
                                        <p>{user.name}</p>
                                    </div>
                                </Link>
                            ))
                        }
                        <Link to='Contact/Edit'>
                            <img className="btn-add-contact" src={addButton}/>
                        </Link>
                    </section>
                }
            </div >
        );
    }
}
export default ContactPage