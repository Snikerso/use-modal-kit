import React from 'react';
export declare const useModal: () => {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    Modal: ({ Overlay, Main }: any) => JSX.Element;
};
