import { STATES } from '../../game/constants';
import waldo from '../../images/waldo.jpg';
import beach from '../../images/beach.jpg';
import concert from '../../images/concert.png';
import marchaVenezuela from '../../images/marcha_vzla.jpg';
import marchaVenezuelaPeroConUnPuentexD from '../../images/marcha_vzla_puente.jpg';


export const LEVEL_MAPS = {
  [STATES.STAGE1]: concert,
  [STATES.STAGE2]: marchaVenezuela,
  [STATES.STAGE3]: waldo,
  [STATES.STAGE4]: beach,
  [STATES.STAGE5]: marchaVenezuelaPeroConUnPuentexD,
}
