import React from "react";
import ModalVideo from "react-modal-video";

// prop type
type IPropType = {
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoId: string;
  videoPath?: string; // For local video file path
};

const VideoPopup = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = "DPjYyCcw4Po",
  videoPath,
}: IPropType) => {
  return (
    <>
    {/* For YouTube Video */}
    {videoId && (
      <ModalVideo
        channel="youtube"
        isOpen={isVideoOpen}
        videoId={videoId}
        onClose={() => setIsVideoOpen(false)}
      />
    )}

    {/* For Local Video */}
    {videoPath && !videoId && (
      <div className={`modal ${isVideoOpen ? "show" : ""}`} style={{ display: isVideoOpen ? "block" : "none" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" onClick={() => setIsVideoOpen(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <video controls>
                <source src={videoPath} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="modal-footer">
              <a href={videoPath} download className="btn btn-primary">Download Video</a>
              <button type="button" className="btn btn-secondary" onClick={() => setIsVideoOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);
};


export default VideoPopup;
