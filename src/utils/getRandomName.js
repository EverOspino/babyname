
export const getRandomName = (names) => {
    if ( names.length > 0 ) {
      const randomNumber = Math.floor(Math.random() * names.length);
      return names[randomNumber];
    }
  }