import React from 'react';
import { useTranslation } from 'react-i18next';
import facebookIcon from '../../assets/icons/facebook.png'; // Replace with actual path to your Facebook icon
import instagramIcon from '../../assets/icons/instagram.png'; // Replace with actual path to your Instagram icon
import locationIcon from "../../assets/icons/location (2).png";
import phoneIcon from "../../assets/icons/phone-2.png";
import mailIcon from "../../assets/icons/email (1).png";

const ContactUsPage = () => {
  const { t } = useTranslation("global");

  return (
    <div className="flex flex-col md:flex-row justify-between items-center md:items-start bg-black text-white p-10 my-20 rounded-md shadow-lg">
      {/* Contact Details Section */}
      <div className="md:w-1/2 flex flex-col items-center md:items-end pr-8 md:mr-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-10" style={{ fontFamily: 'Comfortaa' }}>{t('ContactUs.key')}</h2>
        <div className="mb-6 flex flex-col items-center md:items-end">
          <h3 className="flex items-center text-2xl md:text-4xl mb-3">
            <img src={locationIcon} alt='Location Icon' className="w-8 h-8 mr-3"/>
            {t('ContactUs.Location.location')}
          </h3>
          <p className="text-xl">{t('ContactUs.Location.address')}</p>
        </div>
        <div className="mb-6 flex flex-col items-center md:items-end">
          <h3 className="flex items-center text-2xl md:text-4xl mb-3">
            <img src={phoneIcon} alt='Phone Icon' className="w-8 h-8 mr-3"/>
            {t('ContactUs.Contact.phone')}
          </h3>
          <a href="tel:+38971123123" className="text-xl hover:text-primaryYellow">+38971255244</a>
        </div>
        <div className="mb-6 flex flex-col items-center md:items-end">
          <h3 className="flex items-center text-2xl md:text-4xl mb-3">
            <img src={mailIcon} alt='Mail Icon' className="w-8 h-8 mr-3"/>
            {t('ContactUs.Contact.email')}
          </h3>
          <a href="mailto:info@californiafitnescenter.net" className="text-xl hover:text-primaryYellow">info@californiafitnescenter.net</a>
        </div>
        <p className="text-lg text-center">{t('ContactUs.socialMedia')}</p>
        <div className="flex space-x-4 mt-4">
          <a href="https://www.facebook.com/californiafitnesscenter1" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" className="w-12 h-12" />
          </a>
          <a href="https://www.instagram.com/californiafitnescenter/" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="w-12 h-12" />
          </a>
        </div>
      </div>

      {/* Location Section */}
      <div className="md:w-1/2 mt-24 md:mt-0 flex flex-col items-center md:items-start md:ml-4">
        <h2 className="text-4xl md:text-6xl font-bold mb-10" style={{ fontFamily: 'Comfortaa' }}>{t('Location.key')}</h2>
        <iframe
          className="border-0 w-full h-96 rounded-2xl outline-0"
          title="Google Maps Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677.561843032807!2d21.710561375573892!3d42.13311859940979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13544fcd305121a7%3A0x1ab9dcd1d0cb283c!2sPazar%2C%20Hristijan%20Todorovski%20Karposh%2C%20Kumanovo%2C%20North%20Macedonia!5e1!3m2!1sen!2s!4v1715014299341!5m2!1sen!2s"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUsPage;
