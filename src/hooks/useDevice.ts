import { useEffect, useState } from 'react';
import { Devices } from '../interfaces';

// Define breakpoints for mobile and tablet
const MOBILE_BREAKPOINT = 600; // You can adjust this value as needed
const TABLET_BREAKPOINT = 1200; // You can adjust this value as needed

function getDeviceType(width: number): Devices {
  if (width < MOBILE_BREAKPOINT) {
    return Devices.MOBILE;
  } else if (width < TABLET_BREAKPOINT) {
    return Devices.TABLET;
  } else {
    return Devices.LAPTOP;
  }
}

export function useDevice(): Devices {
  const [device, setDevice] = useState<Devices>(
    getDeviceType(window.innerWidth)
  );

  useEffect(() => {
    function handleResize() {
      const newDevice = getDeviceType(window.innerWidth);
      setDevice(newDevice);
    }

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return device;
}
