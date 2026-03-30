export interface Horse {
  id: string;
  name: string;
  slug: string;
  sex: "mare" | "stallion" | "gelding";
  birthYear: number;
  image: string;
  pedigree?: PedigreeNode;
}

export interface PedigreeNode {
  name: string;
  sire?: PedigreeNode;
  dam?: PedigreeNode;
}
