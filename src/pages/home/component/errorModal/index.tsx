import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ErrorDialog({ isOpen, setIsOpen }: Props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={isOpen}
      onClose={handleClose}
      aria-labelledby='responsive-dialog-title'
    >
      <DialogTitle id='responsive-dialog-title'>{'Sorry!'}</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Unfortunately, the site is currently facing a temporary problem.
          Please come back later
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
