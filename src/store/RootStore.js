import ContactStore from './ContactStore';
import UserStore from './UserStore';

export default class RootStore {
  showNavBar = true;
  constructor() {
      this.contactStore = new ContactStore(this);
      this.UserStore = new UserStore(this);
  }
}
