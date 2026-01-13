import { useState, useEffect } from "react";
import { type TrackDetailsResource, getTrack } from "../dal/api";
type Props = {
  trackID: string | null;
};

export function useSelectedTrackDetail(props:Props) {
  const [selectedTrack, setSelectedTrack] = useState<TrackDetailsResource | null>(null);
  useEffect(() => {
    if (!props.trackID) {
      return;
    }

    getTrack(props.trackID)
      .then((json) => setSelectedTrack(json.data));
  }, [props.trackID]);
  return { selectedTrack };
}
