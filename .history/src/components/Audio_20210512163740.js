import React from "react";
import Sound from "react-sound";

const Audio = ({ url }) => {
  return (
    <div>
      <Sound
        url={url}
        playStatus={Sound.status.PLAYING}
        playFromPosition={300}
      />
    </div>
  );
};

export default Audio;
