
import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react';
import './ContactDetails.scss'
import editIcon from '../../imgs/edit.png'
import backIcon from '../../imgs/back.png'


@inject('store')
@observer
class ContactDetails extends Component {
    state = {
        selectedContact: null
    }

    async componentDidMount() {
        this.props.store.contactStore.getContactById(this.props.match.params)
    }

    backToList() {
        this.state.selectedContact = null
    }

    @observer
    render() {
        const selectedContact = this.props.store.contactStore.selectedContact
        return (
            selectedContact && <section className="details-container">
                <div className="btns-details-container">
                    <Link to="/Contact">
                        <img src={backIcon} />
                    </Link>
                    <Link to={`/contact/Edit/${selectedContact._id}`} props={selectedContact}>
                        <img src={editIcon} />
                    </Link>
                </div>
                <h1 className="details-title">User Details</h1>
                <img className="details-img" src={`https://robohash.org/${selectedContact.name}.png`}></img>
                <p>Name: {selectedContact.name}</p>
                <p>Phone number: {selectedContact.phone}</p>
                <p>Email: {selectedContact.email}</p>
            </section>
        )
    }
}
export default ContactDetails