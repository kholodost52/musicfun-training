import { createRoot } from "react-dom/client";
import "./index.css";

import { TrackList } from "./ui/TrackList.tsx";
import { TrackDetail } from "./ui/TrackDetail.tsx";
import { useTrackID } from "./bll/useTrackID.tsx";

const rootEl = document.getElementById("root");

const reactRoot = createRoot(rootEl!);
reactRoot.render(<MainPage />);

export function MainPage() {
  const {trackID, handleTrackSelect} = useTrackID()
  return (
    <div>
      <div style={{ display: "flex" }}>
        <TrackList
          selectedTrackID={trackID}
          onTrackSelected={handleTrackSelect}
        />
        <TrackDetail trackID={trackID} />
      </div>
    </div>
  );
}
