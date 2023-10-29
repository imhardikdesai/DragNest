// @mui
import { alpha, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
// utils
import { fShortenNumber } from 'src/utils/format-number';
// types
import { IUserCard } from 'src/types/user';
// _mock
import { _socials } from 'src/_mock';
// assets
import { AvatarShape } from 'src/assets/illustrations';
// components
import Image from 'src/components/image';
import Iconify from 'src/components/iconify';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

type Props = {
  block?: any;
};

export default function CodeBlockCard({ block }: Props) {
  const theme = useTheme();

  // const {
  //   name = 'Nav',
  //   coverUrl = 'https://i.imgur.com/IXz7LZ5.png',
  //   avatarUrl = 'https://avatars.githubusercontent.com/u/87645745?v=4',
  // } = block;

  const name = 'Nav';
  const coverUrl = 'https://i.imgur.com/IXz7LZ5.png';

  return (
    <Card
      sx={{
        textAlign: 'center',
        minHeight: '236px',
        marginBlock: '15px',
        border: '1px solid white',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
      }}
    >
      <Box sx={{ position: 'relative' }}>
        <AvatarShape
          sx={{
            left: 0,
            right: 0,
            zIndex: 10,
            mx: 'auto',
            bottom: -26,
            position: 'absolute',
          }}
        />
        <Icon
          icon="gridicons:add"
          fontSize="3rem"
          style={{
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -15,
            position: 'absolute',
            margin: 'auto',
          }}
          className="add-icon"
        />
        {/* <Avatar
          alt={name}
          src={avatarUrl}
          sx={{
            width: 64,
            height: 64,
            zIndex: 11,
            left: 0,
            right: 0,
            bottom: -32,
            mx: 'auto',
            position: 'absolute',
          }}
        /> */}

        <Image
          src={coverUrl}
          alt={coverUrl}
          ratio="16/9"
          overlay={alpha(theme.palette.grey[900], 0.48)}
          sx={{ objectFit: 'contain' }}
        />
      </Box>
    </Card>
  );
}
