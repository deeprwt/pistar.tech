import React from "react";
import ModalVideo from "react-modal-video";

// prop type
type IPropType = {
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
//   videoId: string;
  url: string;
};

const VideoPopupLocal = ({
  isVideoOpen,
  setIsVideoOpen,
//   videoId = "DPjYyCcw4Po",
  url="",
}: IPropType) => {
  return (
    <ModalVideo
      channel="custom"
      isOpen={isVideoOpen}
      url={url}
      onClose={() => setIsVideoOpen(false)}
    />
  );
};

export default VideoPopupLocal;