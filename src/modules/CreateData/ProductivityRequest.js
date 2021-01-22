/* eslint-disable react/prop-types */
import React from 'react';
import {
  Caption,
  Subheading,
  TextContainer,
  Stack,
  Button,
} from '@dentsu-ui/components';

const ProductivityRequest = (props) => {
  const { cmsData, handleModal } = props;
  return (
    <Stack flexDirection="row" justifyContent="space-between">
      <Stack>
        <TextContainer>
          <Subheading>{cmsData.productivityDatarequestHeading}</Subheading>
          <Caption isAssistive>
            {cmsData.productivityDatarequestCaption}
          </Caption>
        </TextContainer>
      </Stack>
      <Button variant="secondary" iconLeft="add" onClick={handleModal}>
        {cmsData.createNewDataRequest}
      </Button>
    </Stack>
  );
};

export default ProductivityRequest;
