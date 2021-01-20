import React, { useState, useEffect, useContext } from 'react'
import { useQuery } from '@apollo/client';
import { Caption, Subheading, TextContainer, Button, Stack, Modal } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import Form from './Form'
import useCustomForm from '../../hooks/useCustomForm';
import validationRule from '../../utils/validate';
import { monthOptions, reportingYear } from '../Mock/mockData'
import { GET_USERS } from './queries';
import { MarketOptionsContext } from '../../contexts/marketOptions';

const CreateData = (props) => {
  const [userRequest, setUserRequest] = useState([]);
  const { loading, error, data } = useQuery(GET_USERS);
  const { cmsData, market, isModalOpen, handleModal, addRequest } = props;
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const initialValues = {
    localMarket: market,
    name: '',
    briefing: '',
    reportingYear: '',
    actualData: '',
    forecastData: '',
    dueDate: '',
    assignTo: '',
  };
  const { handleChange, values, forecastOptions,
    handleSelectField, handleSubmit,
    errors, handleCancel } = useCustomForm({ initialValues, validate: validationRule });

  useEffect(() => {
    const isAnyValidationError = errors && !!(errors.localMarket || errors.name
      || errors.briefing || errors.dueDate || errors.assignTo || errors.forecastData
      || errors.forecastData || errors.reportingYear);
    const isAllValuesFilled = values.localMarket && values.name && values.assignTo
      && values.dueDate && values.forecastData && values.actualData && values.briefing && values.reportingYear;
    setIsReadyToSubmit(isAllValuesFilled && !isAnyValidationError);
  }, [errors, values]);

  useEffect(() => {
    handleChange({ target: { name: 'localMarket', value: market } });
  }, [market]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (loading) {
      setLoading(false)
    }
    if (error) return `Error! ${error}`;
    if (data) {
      setUserRequest(data)
    }
  }, [data, loading, error]);
  const closeModalHandler = () => {
    handleModal(false)
    handleCancel();
  }
  const onSubmit = async () => {
    handleSubmit();
    if (isReadyToSubmit) {
      setLoading(true);
      // mutation will be done here
      setTimeout(() => {
        setLoading(false);
        closeModalHandler();
        addRequest(values)
      }, 1000);
    }
  }
  const handleCreateData = () => {
    handleModal(true);
  };

  const marketOptions = useContext(MarketOptionsContext);
  const formMarketOption = marketOptions.filter(item => item.value !== '');

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
        <Modal.Header hasCloseButton title={cmsData.createNewDataRequest} />
        <Modal.Body>
          <Form
            values={values}
            handleChange={handleChange}
            handleSelectField={handleSelectField}
            errors={errors}
            cmsData={cmsData}
            options={formMarketOption}
            monthOptions={monthOptions}
            reportingYear={reportingYear}
            forecastOptions={forecastOptions}
            userList={userRequest.getUsers}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalHandler}>
            {cmsData.cancel}
          </Button>
          <Button isLoading={isLoading} onClick={onSubmit}>{cmsData.create}</Button>
        </Modal.Footer>
      </Modal>
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack>
          <TextContainer>
            <Subheading>{cmsData.productivityDatarequestHeading}</Subheading>
            <Caption isAssistive>
              {cmsData.productivityDatarequestCaption}
            </Caption>
          </TextContainer>
        </Stack>
        <Button variant="secondary" iconLeft="add" onClick={handleCreateData}>
          {cmsData.createNewDataRequest}
        </Button>
      </Stack>
    </>
  )
};
CreateData.propTypes = {
  cmsData: PropTypes.object,
  market: PropTypes.object,
  isModalOpen: PropTypes.bool,
  handleModal: PropTypes.func,
  addRequest: PropTypes.func,
}
CreateData.defaultProps = {
  cmsData: {},
  market: 'UK',
  isModalOpen: false,
  handleModal: () => { },
  addRequest: () => { },
}

export default CreateData;
