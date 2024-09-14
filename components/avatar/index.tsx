import * as React from 'react';
import { Avatar as Av } from 'react-native-paper';

interface AvatarProps {
  source?: any;
  label?: string;
  bgColor?: string;
  color?: string;
  style?: object;
  icon?: string;
  size?: number;
}

const Avatar: React.FC<AvatarProps> = ({
  source = null,
  label = 'XD',
  bgColor = "#fff",
  color = "#333",
  style = {},
  icon,
  size = 48
}) => {
    const detectTypeAvatar = () => {
        if (source) {
            return <Av.Image
                style={{ ...style, backgroundColor: bgColor }}
                source={source}
                size={size}
            />;
        } else if (icon) {
            return <Av.Icon
                style={{ ...style, backgroundColor: bgColor }}
                icon={icon}
                color={color}
                size={size}
            />;
        } else {
            return <Av.Text
                style={{ ...style, backgroundColor: bgColor }}
                label={label}
                color={color}
                size={size}
            />;
        }
    };

    return detectTypeAvatar();
};

export default Avatar;
