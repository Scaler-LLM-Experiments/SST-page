import { Heading, Text } from '@kishanscaler/ssx-ui';

import { peerCompanies } from '@/content/alumni';
import { resolveLogos } from '@/lib/logos';
import { PeersFlip } from './PeersFlip';
import '@/sections/hero/shared/hero.css';
import './alumni.css';

/** "Your peers come from": the logos in a grid of cells that flip one at a time (PeersFlip; it was the hero's ticker). Server-only (reads the files). */
export async function PeersTicker() {
  const logos = await resolveLogos(peerCompanies);
  return (
    <div className="flex flex-col gap-5" data-enter="block">
      {/* ssx-ui's Heading at the card-and-panel size (3), as Placements' "Companies that have visited"
          line, with a quiet line under it (Text, secondary): no longer the small grey caps (2026-10-09) */}
      <div className="flex flex-col gap-1">
        <Heading as="h3" size="3" className="peers-title">
          Scaler’s alumni work across 1200+ companies
        </Heading>
        <Text size="md" tone="secondary">
          Hiring partners including MAANG companies and AI startups.
        </Text>
      </div>
      <PeersFlip logos={logos} label="Companies where Scaler’s alumni work" />
    </div>
  );
}
