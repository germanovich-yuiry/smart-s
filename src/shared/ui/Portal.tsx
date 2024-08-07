import type { FC } from "react";
import { useEffect } from "react";

import styled from "styled-components";
import { createPortal } from "react-dom";

type Props = {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
};

const OverlayContainer = styled.div`
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: white;
  opacity: 1;
  z-index: 2;
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  font-size: 48px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  z-index: 3;
  color: blue;

  opacity: 80%;
`;

const PortalModal: FC<Props> = ({ children, open, onClose }) => {
  const element = document.getElementById("modal-root")!;

  const Overlay: FC<{ children: React.ReactNode }> = ({ children }) => {
    useEffect(() => {
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = "auto";
      };
    }, []);

    return (
      <OverlayContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        {children}
      </OverlayContainer>
    );
  };

  if (open) {
    return createPortal(<Overlay>{children}</Overlay>, element);
  }
  return null;
};

export default PortalModal;
