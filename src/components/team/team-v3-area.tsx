import React from "react";
import team_data from "@/data/team-data";
import TeamSingle from "./team-single";
import TeamVideoSingle from "./team-video-single";

const TeamThreeArea = () => {
  const teams = team_data.filter((t) => t.page === "home" || t.page === "team");
  return (
    <div className="team-section-one service-details mt-80 lg-mt-80 mb-100 lg-mb-40">
      <div className="container details-meta">
        <div className="position-relative">
        <div className="title-one wow fadeInUp details-meta text-center mb-60">
            <h2>Hear a Doctor&#39;s Perspective</h2>
          </div>
          {/* <p className="text-lg text-dark mb-30 lg-mb-10 text-center px-5 py-3">
            Our Team at CGB Solutions is a dynamic ensemble of individuals dedicated to excellence and innovation in workplace solutions.  United by a shared commitment to pushing boundaries and delivering exceptional results, our team fosters a culture of collaboration, continuous learning, and growth. Together, we are shaping the future of work and redefining possibilities in workplace innovation.
          </p> */}
          <div className="row">
            {teams.map((t, i) => (
              <div
                key={i}
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-delay={`0.${i}s`}
              >
                {/* <TeamSingle team={t} spacing="mb-50 lg-mb-40" /> */}
                <TeamVideoSingle  team={t} spacing="mb-50 lg-mb-40" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamThreeArea;
