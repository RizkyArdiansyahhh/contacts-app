import ContactList from "./ContactList";
import { getData } from "../utils/data";

const ContactApp = () => {
  const contact = getData();
  return (
    <div className="contact-app">
      <h1>Contact App</h1>
      <ContactList contacts={contact}></ContactList>
    </div>
  );
};

export default ContactApp;
