import styled from "styled-components";
import colors from "../../constants/colors";
import { CloseIcon } from "../icons";
import { CreateProductsModal } from "./createProductsModal";
import { CreateWarehouseModal } from "./createWarehouseModal";
import { MoveProductsModal } from "./moveProductsModal";
import { ProceedProductsModal } from "./proceedProductsModal";
import { SaleProductsModal } from "./saleProductsModal";

const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  justify-content: center;
  align-items: center;
  background-color: #1a191991;
  display: ${(props) => (props.isOpen ? "flex" : "none")};
`;

const ModalBody = styled.div`
  width: 500px;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 20px;
  padding: 30px;
`;
export const ContentWrapper = styled.div`
  width: 100%;
  height: 400px;
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
export const CloseButtonWrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const CloseButton = styled.button`
  outline: none;
  right: 10px;
  top: 10px;
  border: none;
  background: inherit;
  svg {
    fill: ${colors.black};
    width: 30px;
    height: 30px;
    stroke-width: 20px;
  }
`;
export const WarehouseModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalBody>
        <CloseButtonWrapper>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </CloseButtonWrapper>
        <ContentWrapper>
          <CreateWarehouseModal />
        </ContentWrapper>
      </ModalBody>
    </Modal>
  );
};
export const ProductsModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalBody>
        <CloseButtonWrapper>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </CloseButtonWrapper>
        <ContentWrapper>
          <CreateProductsModal />
        </ContentWrapper>
      </ModalBody>
    </Modal>
  );
};
export const ProceedModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalBody>
        <CloseButtonWrapper>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </CloseButtonWrapper>
        <ContentWrapper>
          <ProceedProductsModal />
        </ContentWrapper>
      </ModalBody>
    </Modal>
  );
};
export const SaleModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalBody>
        <CloseButtonWrapper>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </CloseButtonWrapper>
        <ContentWrapper>
          <SaleProductsModal />
        </ContentWrapper>
      </ModalBody>
    </Modal>
  );
};
export const MoveModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen}>
      <ModalBody>
        <CloseButtonWrapper>
          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </CloseButtonWrapper>
        <ContentWrapper>
          <MoveProductsModal />
        </ContentWrapper>
      </ModalBody>
    </Modal>
  );
};
