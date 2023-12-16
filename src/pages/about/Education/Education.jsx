import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { FaSchool } from "react-icons/fa";
import { RiSchoolFill } from "react-icons/ri";
import { IoSchool } from "react-icons/io5";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-6">
          <div className="pt-24 pb-16">
            <SectionTitle title="Education" />
          </div>
          {/* education vertical timeline */}
          <div>
            <VerticalTimeline lineColor="rgba(169, 214, 229, 0.5)">
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{
                  background: "rgba(11, 37, 69, 1)",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date="2017- 2022"
                iconStyle={{ background: "rgba(11, 37, 69, 1)", color: "#fff" }}
                icon={<IoSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  Independent University, Bangladesh
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Dhaka, Bangladesh
                </h4>
                <p>Bachelor of Science: Computer Science & Engineering</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2014-2016"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<FaSchool />}
              >
                <h3 className="vertical-timeline-element-title">
                  Gaibandha Government College
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Gaibandha, Bangladesh
                </h4>
                <p>Higher Secondary School Certificate</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2009 - 2014"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={<RiSchoolFill />}
              >
                <h3 className="vertical-timeline-element-title">
                  Dariapur Aman Ullah High School
                </h3>
                <h4 className="vertical-timeline-element-subtitle">
                  Dariapur, Gaibandha
                </h4>
                <p>Secondary School Certificate</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
