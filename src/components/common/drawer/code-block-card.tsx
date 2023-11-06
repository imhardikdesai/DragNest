import { useState } from 'react';
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// components
import Image from 'src/components/image';
import { Icon } from '@iconify/react';
import { useDispatch } from 'react-redux';
import { handlePushBlock } from 'src/redux/slices/template';
import { v4 as uuidv4 } from 'uuid';

type ItemProps = {
  bars: string;
  name: string;
  blockId: string;
  previewImageUrl: string;
  category: string;
  defaultData: Record<string, any>;
  config: Record<string, any>;
};

type Props = {
  type: string;
  item: ItemProps;
};

export default function CodeBlockCard({ type, item }: Props) {
  const theme = useTheme();
  const [isHovered, setIsHovered] = useState(false);
  const { bars, previewImageUrl, defaultData, blockId, config } = item;
  const dispatch = useDispatch();

  return (
    <Card
      sx={{
        textAlign: 'center',
        marginBlock: '15px',
        border: '1px solid white',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Box
        sx={{
          width: '100%',
          height: '230px',
          backgroundColor: isHovered ? '#121212a6' : 'transparent',
          position: 'absolute',
          zIndex: 10,
          transition: 'background-color 0.2s ease-in-out',
        }}
      />
      <Box sx={{ position: 'relative' }}>
        <Icon
          icon="gridicons:add"
          fontSize="3rem"
          style={{
            zIndex: 11,
            left: 0,
            right: 0,
            top: isHovered ? '37%' : '100%',
            position: 'absolute',
            margin: 'auto',
            transition: 'top 0.2s ease-in-out', // Add a smooth transition
          }}
          className="add-icon"
          onClick={() =>
            dispatch(
              handlePushBlock({
                uuid: uuidv4(),
                blockId,
                blockType: type,
                config,
                defaultData,
                bars,
              })
            )
          }
        />
        <Image
          src={previewImageUrl}
          alt={previewImageUrl}
          ratio="21/9"
          overlay={alpha(theme.palette.grey[900], 0.1)}
          sx={{
            img: {
              objectFit: 'contain',
            },
          }}
        />
      </Box>
    </Card>
  );
}
