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

export const getTrack = (trackID: string) => {
  const promise: Promise<GetTrackDetailsOutput> = fetch(
      "https://musicfun.it-incubator.app/api/1.0/playlists/tracks/" +
        trackID,
      {
        headers: {
          // "api-key": "4724e58f-f010-47dd-80a6-200de67fe668",
        },
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
      headers: {
        // "api-key": "4724e58f-f010-47dd-80a6-200de67fe668",
      },
    })
      .then((res) => res.json())
      return promise
}