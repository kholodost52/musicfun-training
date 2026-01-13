import { useState } from "react";


export function useTrackID() {
  const [trackID, setTrackID] = useState<string | null>(null);
  const handleTrackSelect = (id: string | null): void => {
    setTrackID?.(id);
  };

  return { trackID, handleTrackSelect };
}
