'use client'
import React, { useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from '@material-tailwind/react';
import { ExclamationCircleIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { MESSAGE } from '../constant/index.constants';

interface PropTypes {
  errorMessage: boolean | null;
}

const styles = {
  icon: `w-6 h-6`
}

export const MessageDialog: React.FC<PropTypes> = ({ errorMessage }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    setOpen(true);
  }, [errorMessage]);

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        size='xs'
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
      >
        <DialogHeader>
          {errorMessage ? <ExclamationCircleIcon className={styles.icon} /> : <CheckCircleIcon className={styles.icon} />}
          {errorMessage ? 'Error' : 'Success'}
        </DialogHeader>
        <DialogBody divider>
          {errorMessage ? MESSAGE.error : MESSAGE.success}
        </DialogBody>
        <DialogFooter>
          <Button variant='gradient' color='gray' onClick={handleOpen}>
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
