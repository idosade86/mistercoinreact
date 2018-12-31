import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ContactService from '../../services/ContactService';
import './ContactEdit.scss'
import { inject, observer } from 'mobx-react';
import { observable } from 'mobx';
import deleteIcon from '../../imgs/delete.png'
import backIcon from '../../imgs/back.png'
import saveIcon from '../../imgs/save.png'

@inject('store')
@observer
class ContactEdit extends Component {

    @observable
    selectedContact;

    async componentDidMount() {
        this.selectedContact = this.props.store.contactStore.selectedContact
        if (!this.props.match.params.contactId) this.selectedContact = ContactService.getEmptyContact()
        if (!this.selectedContact) {
            this.selectedContact = ContactService.getEmptyContact()
        }
    }

    handleChange = ev => {
        let userPref = ev.target.name
        this.selectedContact[userPref] = ev.target.value
        // this.contactToEdit = { cntactToEdit: { ...this.cntactToEdit, [userPref]: ev.target.value } }
        // this.ContactEdit[userPref] = ev.target.value
    }

    handleSubmit = async ev => {
        ev.preventDefault();
        var updateUser = await this.props.store.contactStore.saveContact(this.selectedContact);
        this.props.history.push(`/contact/${updateUser._id}`)
    }

    // todo
    handleDelete = ev => {
        this.props.store.contactStore.deleteContact(this.selectedContact._id)
        this.props.history.push('/contact')
    }

    render() {
        const contactToEdit = this.selectedContact
        return (
            <section>
                {contactToEdit && <div class="edit-container">
                    {contactToEdit.name !== '' && <div className="img-delete-wraper"> <img onClick={this.handleDelete} src={deleteIcon} /></div>}
                    <h1>{(this.props.match.params.contactId) ? 'Edit user' : 'Add user'}</h1>
                    <form onSubmit={this.handleSubmit} className="edit-container-inputs">
                        {contactToEdit._id && <img src={`https://robohash.org/${contactToEdit.name}.png`}></img>}
                        <p classNAme="input-title">Name:</p>
                        <input type="text" className="edit-input-item" name="name" placeholder="name" value={contactToEdit.name} onChange={this.handleChange} />
                        <p classNAme="input-title">Phone:</p>
                        <input type="text" className="edit-input-item" name="phone" placeholder="Phone" value={contactToEdit.phone} onChange={this.handleChange} />
                        <p classNAme="input-title">Email:</p>
                        <input type="text" className="edit-input-item" name="email" placeholder="Email" value={contactToEdit.email} onChange={this.handleChange} />
                        <div className="btn-edit-container">
                            {contactToEdit.name !== '' && <Link to={`/contact/${contactToEdit._id}`}>
                                <img src={backIcon} />
                            </Link>}
                            {contactToEdit.name === '' && <Link to={`/contact`}>
                                <img src={backIcon} />
                            </Link>}
                            <img src={saveIcon} />
                        </div>
                    </form>
                </div>}
            </section>
        )
    }
}
export default ContactEdit