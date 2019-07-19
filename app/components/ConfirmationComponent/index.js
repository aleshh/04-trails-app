/**
 *
 * ConfirmationComponent
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import Links from './Links';
import messages from './messages';

const Confirmation = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
const Text = styled.div`
  text-align: center;
`;
const Title = styled.div`
  background-color: rgb(200, 210, 256);
  border-radius: 20px;
  justify-content: center;
  width: 90%;
  height: 100%;
`;

function ConfirmationComponent() {
  return (
    <Confirmation>
      <Title>
        <Text>
          {/* <h1>Confirmation Page</h1> */}
          <h3>Thank you for your Submission!</h3>
          <Links />
        </Text>
      </Title>
      <FormattedMessage {...messages.header} />
    </Confirmation>
  );
}

ConfirmationComponent.propTypes = {};

export default ConfirmationComponent;
