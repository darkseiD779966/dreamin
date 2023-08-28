import React from 'react';
import { BsWhatsapp } from 'react-icons/bs';

const WhatsAppIcon = () => {
  // Add your WhatsApp link here
  const whatsappLink = 'https://web.whatsapp.com/'; // Replace with your actual link

  return (
    <a href={whatsappLink} className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
      <BsWhatsapp size={30} color="green" />
    </a>
  );
};

export default WhatsAppIcon;
