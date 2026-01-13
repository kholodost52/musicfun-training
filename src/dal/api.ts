// ===== track detail ====
type TrackDetailsAttributes = {
  title: string;
  lyrics: string | null;
  attachments: Array<TrackAttachments>;
};


export type TrackDetailsResource = {
  id: string;
  attributes: TrackDetailsAttributes;
};

type GetTrackDetailsOutput = {
  data: TrackDetailsResource
}

const prepareHeaders = () => {
  const apikey = import.meta.env.VITE_API_KEY

  if (!apikey) return undefined

  return {
    "api-key": apikey
  } 
}


export const getTrack = (trackID: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
        trackID,
      {
        headers: prepareHeaders(),
      }
    )
      .then((res) => res.json())
    return promise
}

// ===== tracklist/trackitem ====

type TrackAttachments = {
  url: string;
};

export type TrackListItemResource = {
  id: string;
  attributes: TrackDetailsAttributes;
};



type GetTrackListOutput = {
  data: Array<TrackListItemResource>
}

export const getTracks = () => {
  const promise: Promise<GetTrackListOutput> = fetch("https://musicfun.it-incubator.app/api/1.0/playlists/tracks", {
      headers: prepareHeaders(),
    })
      .then((res) => res.json())
      return promise
}