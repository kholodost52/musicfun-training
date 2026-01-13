import { useSelectedTrackDetail } from "../bll/useSelectedTrackDetail";
import styles from '../ui/track-detail.module.css'

type Props = {
  trackID: string | null;
};

export function TrackDetail(props: Props) {
  
  const { selectedTrack } = useSelectedTrackDetail(props)

  return (
    <div className={styles.track}>
      <h2>Details</h2>
      {props.trackID && !selectedTrack && <div>loading...</div>}
      {!props.trackID && !selectedTrack && <div>Track is not selected</div>}
      {props.trackID && selectedTrack && props.trackID !== selectedTrack.id && (
        <div>loading ...</div>
      )}
      {props.trackID && selectedTrack && props.trackID === selectedTrack.id && (
        <div>
          
          <h3>{selectedTrack.attributes.title}</h3>
          <p>{selectedTrack.attributes.lyrics ?? "no lyryics"}</p>
        </div>
      )}
    </div>
  );
}
