/* eslint-disable react/prop-types */
import ContactItemImage from "./ContactItemImage";
import ContactItemBody from "./ContactItemBody";

const ContactItem = (props) => {
  const { imageUrl, name, tag } = props;
  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl}></ContactItemImage>
      <ContactItemBody name={name} tag={tag}></ContactItemBody>
    </div>
  );
};
export default ContactItem;
