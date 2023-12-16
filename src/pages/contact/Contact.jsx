import React from "react";
import { Helmet } from "react-helmet-async";
import ContactInfoCard from "./ContactInfo/ContactInfoCard";

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Alif Hasan Shah | Contact</title>
      </Helmet>
      <div>
        <div>
          <ContactInfoCard />
        </div>
      </div>
    </>
  );
};

export default Contact;
