import clsx from "clsx";
import type { TrackListItemResource } from "../dal/api";
import styles from '../ui/tracks.module.css'

type Props = {
  onSelect: (trackID: string) => void;
  isSelected: boolean;
  track: TrackListItemResource;
};

export function TrackItem(props: Props) {
  const handleClick = () => props.onSelect?.(props.track.id);
  const className = clsx({
    [styles.track]: true,
    [styles.selected]: props.isSelected
  }) 
  return (
    <li
    className={className}
      key={props.track.id}
    >
      <div onClick={handleClick}>{props.track.attributes.title}</div>
      <audio controls src={props.track.attributes.attachments[0].url}></audio>
    </li>
  );
}
