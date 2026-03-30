"use client";

import type { PedigreeNode } from "@/types/horse";

interface PedigreeTreeProps {
  pedigree: PedigreeNode;
}

function PedigreeColumn({ nodes, isSire }: { nodes: PedigreeNode[]; isSire: boolean[] }) {
  return (
    <div className="flex flex-col justify-between p-2.5">
      {nodes.map((node, i) => (
        <p
          key={node.name}
          className={`text-sm tracking-[0.36px] uppercase md:text-lg ${isSire[i] ? "text-sa-dark font-medium" : "text-sa-gold"}`}
        >
          {node.name}
        </p>
      ))}
    </div>
  );
}

export function PedigreeTree({ pedigree }: PedigreeTreeProps) {
  const sire = pedigree.sire;
  const dam = pedigree.dam;
  if (!sire || !dam) return null;

  // Parents column
  const parents = [sire, dam];
  const parentsIsSire = [true, false];

  // Grandparents column
  const grandparents = [sire.sire, sire.dam, dam.sire, dam.dam].filter(Boolean) as PedigreeNode[];
  const grandparentsIsSire = [true, false, true, false];

  // Great-grandparents column
  const greatGrandparents: PedigreeNode[] = [];
  const greatIsSire: boolean[] = [];
  for (const gp of [sire.sire, sire.dam, dam.sire, dam.dam]) {
    if (gp?.sire) {
      greatGrandparents.push(gp.sire);
      greatIsSire.push(true);
    }
    if (gp?.dam) {
      greatGrandparents.push(gp.dam);
      greatIsSire.push(false);
    }
  }

  return (
    <div className="flex min-h-[400px] w-full overflow-x-auto lg:min-h-[600px]">
      <PedigreeColumn nodes={parents} isSire={parentsIsSire} />
      <PedigreeColumn nodes={grandparents} isSire={grandparentsIsSire} />
      <PedigreeColumn nodes={greatGrandparents} isSire={greatIsSire} />
    </div>
  );
}
