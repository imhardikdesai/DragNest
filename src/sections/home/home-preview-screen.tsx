'use client';

// components
import { Button, ButtonGroup } from '@mui/material';
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { screenTypes, setPreviewScreen } from 'src/redux/slices/screen';

const HomePreviewScreen = () => {
  const [activeButton, setActiveButton] = useState<'tv' | 'laptop' | 'tablet' | 'phone'>('tv');
  const dispatch = useDispatch();

  const handleButtonClick = (buttonName: 'tv' | 'laptop' | 'tablet' | 'phone') => {
    setActiveButton(buttonName);
    dispatch(
      setPreviewScreen({
        type: buttonName,
        width: screenTypes.find((ele) => ele.type === buttonName)?.width,
      })
    );
  };

  return (
    <ButtonGroup variant="outlined" aria-label="outlined button group">
      <Button
        onClick={() => handleButtonClick('tv')}
        variant={activeButton === 'tv' ? 'contained' : 'outlined'}
      >
        <Icon icon="ph:devices-bold" fontSize="1.5rem" />
      </Button>
      <Button
        onClick={() => handleButtonClick('laptop')}
        variant={activeButton === 'laptop' ? 'contained' : 'outlined'}
      >
        <Icon icon="ic:round-tv" fontSize="1.5rem" />
      </Button>
      <Button
        onClick={() => handleButtonClick('tablet')}
        variant={activeButton === 'tablet' ? 'contained' : 'outlined'}
      >
        <Icon icon="mdi:tablet" fontSize="1.5rem" />
      </Button>
      <Button
        onClick={() => handleButtonClick('phone')}
        variant={activeButton === 'phone' ? 'contained' : 'outlined'}
      >
        <Icon icon="bi:phone" fontSize="1.5rem" />
      </Button>
    </ButtonGroup>
  );
};

export default HomePreviewScreen;
