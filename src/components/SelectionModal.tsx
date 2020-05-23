import React from 'react';
import Modal from 'react-overlays/Modal';
import styled from 'styled-components';
import SelectionForm from './SelectionForm';
import { SelectedVerbs } from '../data/types';

const VerbModal = styled(Modal)`
  border: 2px solid ${props => props.theme.colors.black};
  background-color: ${props => props.theme.colors.lightRed};
  padding: ${props => props.theme.space[3]}px;
  box-shadow: 10px 10px 1px ${props => props.theme.colors.black};

  height: 500px;
  width: 500px;
  
  z-index: 1;
  position: fixed;
  top: 160px;
  left: 0;
  right: 0;
  margin: auto;
`;

const Background = styled.div`
  background-color: ${props => props.theme.colors.lightRed};
  background-color: '#d1d1d1b8';
  opacity: .2;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const ModalBackground = () => <Background/>;

interface Props {
  updateSelections: (s: SelectedVerbs) => void; //todo
  selectedVerbs: SelectedVerbs;
}

const SelectionModal: React.FC<Props> = (props) => {
  return (
    <VerbModal 
      show
      renderBackdrop={ModalBackground}
    >
      <SelectionForm 
        updateSelections={props.updateSelections}
        selectedVerbs={props.selectedVerbs}
      />
    </VerbModal>
  );
};

export default SelectionModal;