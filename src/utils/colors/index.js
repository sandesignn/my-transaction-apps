const mainColors = {
  blue1: '#07689F',
  dark1: '#393939',
  gray1: '#5C5C5C',
  gray2: '#BDBDBD',
};

export const colors = {
  primary: mainColors.blue1,
  secondary: mainColors.dark1,
  white: 'white',
  button: {
    primary: {
      text: 'white',
      background: mainColors.blue1,
    },
    secondary: {
      text: mainColors.blue1,
      background: 'white',
    },
  },
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.gray1,
  },
  border: {
    primary: mainColors.gray2,
    secondary: mainColors.blue1,
  },
};
