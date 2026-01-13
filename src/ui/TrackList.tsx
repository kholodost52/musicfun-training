import { TrackItem } from "./TrackItem";
import { useTracks } from "../bll/useTracks";
import styles from '../ui/tracks.module.css'


type Props = {
  selectedTrackID: string | null,
  onTrackSelected: (id: string | null) => void
}

export function TrackList(props:Props) {
  const { tracks } = useTracks()

  if (tracks === null) {
    return (
      <div>
        <h4>Loading../</h4>
      </div>
    );
  }

  if (tracks.length === 0) {
    return (
      <div>
        <h4>Треков нет</h4>;
      </div>
    );
  }
  const resetHandleClick = () => {
    props.onTrackSelected?.(null);
  };
  const handleClick = (trackId:string) => {
    props.onTrackSelected?.(trackId);
  };

  return (
    <div>
      <button onClick={resetHandleClick}>reset</button>
      <ul className={styles.tracks}>
        {tracks.map((track) => {
          return (
            <TrackItem
              key={track.id}
              track={track}
              isSelected={track.id === props.selectedTrackID}
              onSelect={handleClick}
            />
          );
        })}
      </ul>
    </div>
  );
}
