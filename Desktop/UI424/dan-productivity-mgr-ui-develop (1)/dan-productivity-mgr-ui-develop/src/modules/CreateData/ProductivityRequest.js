/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import {
  Caption,
  Subheading,
  TextContainer,
  Stack,
  Button,
} from '@dentsu-ui/components';
import { FlagIt } from '../../contexts/marketOptions';

const ProductivityRequest = (props) => {
  const { cmsData, handleModal } = props;

  const userPermissionInfo = useContext(FlagIt);

  let userCreatePermission = false;
  userPermissionInfo.forEach(item => {
    if (item.resource === 'PDR') {
      userCreatePermission = true;
    }
  })
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
      {
        userCreatePermission === true
        && (
        <Button variant="secondary" iconLeft="add" onClick={handleModal}>
          {cmsData.createNewDataRequest}
        </Button>
        )
      }

    </Stack>
  );
};

export default ProductivityRequest;
