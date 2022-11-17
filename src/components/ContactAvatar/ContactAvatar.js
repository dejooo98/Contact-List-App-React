import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import md5 from 'md5';

function stringToColor(string) {
  return '#' + md5(string).slice(0, 6);
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function BackgroundLetterAvatars({ name, className }) {
  return <Avatar {...stringAvatar(name)} className={className} />;
}
