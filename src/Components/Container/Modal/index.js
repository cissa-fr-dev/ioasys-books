import React from 'react';
import PropTypes from 'prop-types';

import {
    BootstrapModal,
    ModalBody,
    ModalTitle,
} from './styles';



const propTypes = {
    isOpen: PropTypes.bool,
    toggleModal: PropTypes.func.isRequired,
};

const defaultProps = {
    isOpen: false,
};

export default function ReactModal(props) {
    const { isOpen, toggleModal, bookSelected } = props;

    return (
        <>
            <BootstrapModal show={isOpen} onHide={toggleModal} centered>
                <div style={{
                    width: '200px',
                    height: '200px',
                    color: 'red',
                }}>
                    <h1>modal</h1>
                </div>
            </BootstrapModal>
        </>
    );
}

ReactModal.propTypes = propTypes;
ReactModal.defaultProps = defaultProps;
