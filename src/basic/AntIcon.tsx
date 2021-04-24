import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export type AntIcons =
  | 'left'
  | 'right'
  | 'rest'
  | 'close'
  | 'eye'
  | 'eyeo'
  | 'plus'
  | 'user';

type AntIconProps = {
  name: AntIcons;
  color: string;
  size: number;
};

const AntIcon = ({name, color, size}: AntIconProps) => (
  <Icon name={name} color={color} size={size} />
);

export default AntIcon;
