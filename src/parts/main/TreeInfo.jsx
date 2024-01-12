import step1 from '@/assets/tree/step1.png';
import step2 from '@/assets/tree/step2.png';
import step3 from '@/assets/tree/step3.png';
import step4 from '@/assets/tree/step4.png';
import step5 from '@/assets/tree/step5.png';
import step6 from '@/assets/tree/step6.png';
import step7 from '@/assets/tree/step7.png';
import step8 from '@/assets/tree/step8.png';
import step9 from '@/assets/tree/step9.png';
import { number, string } from 'prop-types';

function TreeInfo({waterNum, name}) {
  return (
    <figure>
      <img
        src={
          waterNum <= 1
            ? step1
            : waterNum <= 5
            ? step2
            : waterNum <= 10
            ? step3
            : waterNum <= 20
            ? step4
            : waterNum <= 30
            ? step5
            : waterNum <= 40
            ? step6
            : waterNum <= 60
            ? step7
            : waterNum <= 80
            ? step8
            : step9
        }
        alt={`${name}의 나무`}
      />
      <figcaption>
        <h3>{name}</h3>
      </figcaption>
    </figure>
  );
}

TreeInfo.propTypes = {
  waterNum: number,
  name: string,
};

export default TreeInfo;
