
export const reverseString = ([...charset]) => 
  charset.reduce((above, current) => current + above, '');