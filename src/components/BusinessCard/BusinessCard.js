import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/Card';
import { Title, JobTitle } from './look';

import Contacts from 'components/ContactFactory';

export default function BusinessCard({ personalInfo }) {
  const { name, jobTitle, location, contacts } = personalInfo;
  const { firstName, lastName } = name;

  return (
    <Card tagName="Header">
      <Title>
        {firstName}
        <strong> {lastName}</strong>
      </Title>
      <JobTitle>
        {jobTitle}
        <div>
          <small>{location}</small>
        </div>
      </JobTitle>
      <Contacts contactInfo={contacts} />
    </Card>
  );
}

BusinessCard.propTypes = {
  name: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
  jobTitle: PropTypes.string,
  contacts: PropTypes.array,
};
