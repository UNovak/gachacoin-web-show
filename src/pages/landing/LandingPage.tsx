import useSpeedLines from '../../hooks/useSpeedLines';
import Button from '../../components/Button/Button';
import SpinPopUp from '../../components/SpinPopUp/SpinPopUp';
import { AppSymbol, spinPopupStatusAtom, symbolAtom } from '../../state';
import { useRecoilState, useRecoilValue } from 'recoil';
import { GachaPon } from '../../assets/images';

const LandingPage = () => {
  const Canvas = useSpeedLines();
  const symbol = useRecoilValue(symbolAtom);
  const [popupStatus, setPopupStatus] = useRecoilState(spinPopupStatusAtom);

  const displayPopup = () => {
    setPopupStatus(true);
  };

  const character = symbol === AppSymbol.Heart ? AppSymbol.Heart : '!';

  return (
    <div className="LandingPage">
      <div className="LandingPage__background">{Canvas}</div>
      <img className='LandingPage__gachapon' src={GachaPon.Image} />
      <div className="LandingPage__textOverlay">
        <div className="LandingPage__textOverlay__text">ウィンビッグ{Array(1).fill(character)}</div>
        <div className="LandingPage__textOverlay__text">{`スピン${Array(3).fill(character).join('')}`}</div>
      </div>
      <div className="LandingPage__about">
        <div className="LandingPage__about__fold" />
      </div>
      <Button
        style="primary"
        label="SPIN"
        borderWidth={8}
        onClick={() => displayPopup()}
      />
      <SpinPopUp isVisible={popupStatus} />
    </div>
  );
};

export default LandingPage;

// FIXME: Scroll across the entire app is funky
// FIXME: Button positioning is not constant when resizing