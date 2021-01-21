import React, { useState, useEffect, useContext } from 'react'
import { Button, Modal } from '@dentsu-ui/components';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Toast from '@dentsu-ui/components/dist/cjs/components/Toast';
import Form from './Form'
import useCustomForm from '../../hooks/useCustomForm';
import validationRule from '../../utils/validate';
import { options, monthOptions, reportingYear, data, userList } from '../Mock/mockData'
import { dataFieldCms as PageContent } from '../../cms';
import { MetaDataContext } from '../../contexts/marketOptions'


const EditData = (props) => {
  const { cmsData, isModalOpen, handleModal, requestId, handleEditData, prodRequest } = props;
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const filterCompleteList = data.data.filter(
    (item) => item.id === requestId,
  );
  console.log("prodrequest", prodRequest)
  const initialValues = {
    localMarket: prodRequest.localMarket,
    name: prodRequest.name,
    briefing: prodRequest.briefing,
    reportingYear: prodRequest.reportingYear,
    actualData: prodRequest.actualData,
    forecastData: prodRequest.forecastData,
    dueDate: new Date(),
    assignTo: prodRequest.owners,
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
  const closeModalHandler = () => {
    handleModal(false)
    handleCancel();
  }
  const onSubmit = () => {
    handleSubmit();
    if (isReadyToSubmit) {
      setLoading(true);
      handleEditData(values)
      setTimeout(() => {
        setLoading(false);
        closeModalHandler()
        const toast = new Toast();

        return toast({
          title: '',
          content: PageContent.toastRequestEdited,
          status: 'success',
        });
        // updateData(values)
      }, 1000);
    }
  }
  const { marketOptions } = useContext(MetaDataContext);
  const formMarketOption = marketOptions.filter((item) => item.value !== 'All');
  console.log("value", values)
  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
        <Modal.Header hasCloseButton title={cmsData.editDataRequest} />
        <Modal.Body>
          <Form
            values={values}
            handleChange={handleChange}
            handleSelectField={handleSelectField}
            errors={errors}
            cmsData={cmsData}
            options={formMarketOption}
            monthOptions={monthOptions}
            forecastOptions={forecastOptions}
            userList={userList}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalHandler}>
            {cmsData.cancel}
          </Button>
          <Button isLoading={loading} onClick={onSubmit}>{cmsData.save}</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
};
EditData.propTypes = {
  cmsData: PropTypes.object,
  isModalOpen: PropTypes.bool,
  handleModal: PropTypes.func,
  requestId: PropTypes.string,
  handleEditData: PropTypes.func,
}
EditData.defaultProps = {
  cmsData: {},
  isModalOpen: false,
  handleModal: () => { },
  requestId: PropTypes.string,
  handleEditData: PropTypes.func,
}
export default withRouter(EditData);
