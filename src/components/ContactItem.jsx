/* eslint-disable react/prop-types */
import ContactItemImage from "./ContactItemImage";
import ContactItemBody from "./ContactItemBody";
import DeleteButton from "./DeleteButton";

const ContactItem = (props) => {
  const { imageUrl, name, tag, id, onDelete } = props;
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl}></ContactItemImage>
      <ContactItemBody name={name} tag={tag}></ContactItemBody>
      <DeleteButton id={id} onDelete={onDelete}></DeleteButton>
    </div>
  );
};
export default ContactItem;
