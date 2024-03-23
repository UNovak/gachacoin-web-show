import React, { useEffect } from 'react';
import Button from '../Button/Button';
import Icons from '../../assets/icons';
import RainbowBorder from '../RainbowBorder/RainbowBorder';
import { useSetRecoilState } from 'recoil';
import { WalletPopupStatusAtom } from '../../state';

export type WalletPopUpProps = {
  isVisible: boolean;
};

const WalletPopUp = ({ isVisible }: WalletPopUpProps) => {
  const setWalletPopUpStatus = useSetRecoilState(WalletPopupStatusAtom);

  const closePopUp = () => {
    setWalletPopUpStatus(false);
    document.body.style.overflow = 'unset'; // makes the page scrollable
  };

  // removes scroll for the page while the pop-up is open
  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = 'hidden';
    }
  }, [isVisible]);

  return isVisible ? (
    <>
      <div className="WalletPopUp">
        <RainbowBorder background={'#ffffff'} borderRadius={25} width={10} />
        <h1>Select the wallet to connect</h1>
        <div className="WalletPopUp__icons">
          <Icons.PhantomIcon width={169} height={141} />
          <Icons.MetaMaskIcon width={153} height={141} />
        </div>

        <Button style="primary" label="Use Phantom" borderWidth={6} />
        <Button style="primary" label="Use MetaMask" borderWidth={6} />
      </div>

      <div className="shader" onClick={closePopUp} />
    </>
  ) : null;
};

export default WalletPopUp;