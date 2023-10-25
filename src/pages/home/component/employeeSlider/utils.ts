import { Devices } from '../../../../interfaces';

export function getSlidesNumber(device: Devices): number {
  if (device === Devices.LAPTOP) return 3;
  if (device === Devices.TABLET) return 2;
  return 1;
}
