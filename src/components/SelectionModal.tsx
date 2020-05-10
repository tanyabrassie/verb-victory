import React from 'react';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import SelectionForm from './SelectionForm';
import { MySelections } from '../data/types';

const VerbModal = styled(Modal)`
  border: 1px solid red;
  height: 500px;
  width: 500px;
  background-color: #fff;
`;

const Background = styled.div`
  background-color: #333;
  opacity: .6;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const ModalBackground = () => <Background/>;

interface Props {
  updateSelections: (s: MySelections) => void; //todo
}

const SelectionModal: React.FC<Props> = (props) => {
  return (
    <VerbModal 
      show
      renderBackdrop={ModalBackground}
    >
      <div>
        Verb Selection Modal
        <SelectionForm updateSelections={props.updateSelections} />
      </div>
    </VerbModal>
  );
};

export default SelectionModal;