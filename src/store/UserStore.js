import UserService from '../services/UserService.js'
import { observable,action } from 'mobx';

export default class UserStore {
    @observable
    logedUser = null;

    // todo redirect with private routes after check login

    setUser() {
        var logedUser = JSON.parse(localStorage.getItem('loged-user'));
        this.logedUser = logedUser
    }

    @action
    signup(typedUsername) {        
        this.logedUser = UserService.loadeUser(typedUsername)
        localStorage.setItem('loged-user', JSON.stringify(this.logedUser));
        return Promise.resolve(this.logedUser)
    }
}