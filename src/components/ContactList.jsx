/* eslint-disable react/prop-types */
import ContactItem from "./ContactItem";

const ContactList = (props) => {
  const { contacts } = props;
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          imageUrl={contact.imageUrl}
          name={contact.name}
          tag={contact.tag}
        />
      ))}
    </div>
  );
};

export default ContactList;
