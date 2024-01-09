import step1 from '@/assets/tree/step1.png';
import step2 from '@/assets/tree/step2.png';
import step3 from '@/assets/tree/step3.png';
import step4 from '@/assets/tree/step4.png';
import step5 from '@/assets/tree/step5.png';
import step6 from '@/assets/tree/step6.png';
import step7 from '@/assets/tree/step7.png';
import step8 from '@/assets/tree/step8.png';
import step9 from '@/assets/tree/step9.png';

function TreeInfo({num, name}) {
  return (
    <fieldset>
      <img
        src={
          num <= 1
            ? step1
            : num <= 5
            ? step2
            : num <= 10
            ? step3
            : num <= 20
            ? step4
            : num <= 30
            ? step5
            : num <= 40
            ? step6
            : num <= 60
            ? step7
            : num <= 80
            ? step8
            : step9
        }
        alt={`${name}의 나무`}
      />
      <figcaption>{name}</figcaption>
    </fieldset>
  );
}

export default TreeInfo;
