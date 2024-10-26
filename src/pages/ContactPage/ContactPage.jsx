import React from 'react'
import SecondBanner from '../../components/SecondBanner/secondbanner'
import PurchaseBanner from "../../assets/images/purchase-banner.jpeg"
import ContactUsForm from '../../components/ContactUsForm/ContactUsForm'
import { useTranslation } from 'react-i18next'
const ContactPage = () => {
  const [t] = useTranslation("global")
  return (
    <div>
      <SecondBanner
      image= {PurchaseBanner}
      page={t("ContactUs.title")}
      pagedesc= {t("ContactUs.text")}
      />
      <ContactUsForm/>
    </div>
  )
}

export default ContactPage
