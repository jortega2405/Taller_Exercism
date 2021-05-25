const pair = {G:'C',C:'G',T:'A',A:'U'};
export const toRna = (dna) => {
  dna = dna.toUpperCase();
  const dnaString = dna.split('');
  const array = dnaString.map(strand => pair[strand]);
   const rna = array.join('');
  return  rna;
   }