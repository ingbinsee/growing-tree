import step1 from '@/assets/tree/step1.png';
import step2 from '@/assets/tree/step2.png';
import step3 from '@/assets/tree/step3.png';
import step4 from '@/assets/tree/step4.png';
import step5 from '@/assets/tree/step5.png';
import step6 from '@/assets/tree/step6.png';
import step7 from '@/assets/tree/step7.png';
import step8 from '@/assets/tree/step8.png';
import step9 from '@/assets/tree/step9.png';
import {number, string} from 'prop-types';

function TreeInfo({waterNum, name, src, water}) {
  if (waterNum <= 1) {
    water = '1단계';
  } else if (waterNum <= 5) {
    water = '2단계';
  } else if (waterNum <= 10) {
    water = '3단계';
  } else if (waterNum <= 20) {
    water = '4단계';
  } else if (waterNum <= 30) {
    water = '5단계';
  } else if (waterNum <= 40) {
    water = '6단계';
  } else if (waterNum <= 60) {
    water = '7단계';
  } else if (waterNum <= 80) {
    water = '8단계';
  } else if (waterNum > 80) {
    water = '9단계';
  }

  switch (water) {
    case '2단계':
      src = step2;
      break;
    case '3단계':
      src = step3;
      break;
    case '4단계':
      src = step4;
      break;
    case '5단계':
      src = step5;
      break;
    case '6단계':
      src = step6;
      break;
    case '7단계':
      src = step7;
      break;
    case '8단계':
      src = step8;
      break;
    case '9단계':
      src = step9;
      break;
    default:
      src = step1;
      break;
  }

  return (
    <figure>
      <img src={src} alt={`${name}의 나무`} />
      <figcaption>
        <h3>{name}</h3>
      </figcaption>
    </figure>
  );
}

TreeInfo.propTypes = {
  waterNum: number,
  name: string,
  src: string,
  water: string,
};

export default TreeInfo;
