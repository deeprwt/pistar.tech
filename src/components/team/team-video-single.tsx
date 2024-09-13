"use client";
import React, { useState }  from "react";
import Image from "next/image";
import { ITeam } from "@/types/team-d-t";
import Link from "next/link";
import icon_1 from "@/assets/images/icon/icon_27.svg";
import icon_2 from "@/assets/images/icon/icon_29.svg";
import VideoPopup from "../common/video-popup";

const TeamVideoSingle = ({
  team,
  spacing,
}: {
  team: ITeam;
  spacing?: string;
}) => {
    const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  return (
    <div className={`card-style-four ${spacing ? spacing : "mt-35"}`}>
      <div className="media d-flex align-items-center justify-content-center position-relative overflow-hidden">
        <Image
          src={team.img}
          alt="team-img"
          className="lazy-img w-100"
          style={{ height: "auto" }}
        />
        <a
          className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
          style={{cursor:"pointer"}}
          onClick={() => setIsVideoOpen(true)}
        >
          <Image src={icon_2} alt="icon" className="lazy-img pointer" width={20} height={20} />
        </a>
        {/* <Link
          href="/team-details"
          className="round-btn rounded-circle d-flex align-items-center justify-content-center tran3s"
        >
          <i className="bi bi-arrow-up-right"></i>
          <i className="bi bi-play-circle"></i>
        </Link> */}
      </div>
      <h4 className="fw-500 pt-20 m0">{team.name}</h4>
      <div className="fs-6">{team.designation}</div>
         {/* video modal start */}
         <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"7PIji8OubXU"}
      />
      {/* video modal end */}
    </div>
  );
};

export default TeamVideoSingle;
