function translateRNA() {
  const codonTable = {
    'AUA': 'I', 'AUC': 'I', 'AUU': 'I', 'AUG': 'M',
    'ACA': 'T', 'ACC': 'T', 'ACG': 'T', 'ACU': 'T',
    'AAC': 'N', 'AAU': 'N', 'AAA': 'K', 'AAG': 'K',
    'AGC': 'S', 'AGU': 'S', 'AGA': 'R', 'AGG': 'R',
    'CUA': 'L', 'CUC': 'L', 'CUG': 'L', 'CUU': 'L',
    'CCA': 'P', 'CCC': 'P', 'CCG': 'P', 'CCU': 'P',
    'CAC': 'H', 'CAU': 'H', 'CAA': 'Q', 'CAG': 'Q',
    'CGA': 'R', 'CGC': 'R', 'CGG': 'R', 'CGU': 'R',
    'GUA': 'V', 'GUC': 'V', 'GUG': 'V', 'GUU': 'V',
    'GCA': 'A', 'GCC': 'A', 'GCG': 'A', 'GCU': 'A',
    'GAC': 'D', 'GAU': 'D', 'GAA': 'E', 'GAG': 'E',
    'GGA': 'G', 'GGC': 'G', 'GGG': 'G', 'GGU': 'G',
    'UCA': 'S', 'UCC': 'S', 'UCG': 'S', 'UCU': 'S',
    'UUC': 'F', 'UUU': 'F', 'UUA': 'L', 'UUG': 'L',
    'UAC': 'Y', 'UAU': 'Y', 'UAA': '_', 'UAG': '_',
    'UGC': 'C', 'UGU': 'C', 'UGA': '_', 'UGG': 'W',
  };

  let input = document.getElementById("rna-input").value;

  // Clean input: remove headers (lines starting with '>'), whitespace, invalid chars
  let rna = input
    .toUpperCase()
    .split('\n')                         // Split by lines
    .filter(line => !line.startsWith('>')) // Remove FASTA headers
    .join('')                             // Join lines
    .replace(/[^AUCG]/g, '');             // Remove invalid characters

  let protein = "";

  for (let i = 0; i < rna.length - 2; i += 3) {
    const codon = rna.substring(i, i + 3);
    protein += codonTable[codon] || '?';
  }

  document.getElementById("protein-output").textContent = protein;
}