"use client";
import React, { useEffect, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Header from "./component/Header";
import Banner from "../app/assets/banner.svg";
import Bouquet from "../app/assets/bouquet02.jpg";
import MissionData from "../app/data/MissionData.json";
import MembershipData from "../app/data/MembershipData.json";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import ContactUs from "./pages/ContactUs";

import ArrowCircleRightRoundedIcon from "@mui/icons-material/ArrowCircleRightRounded";
import DownloadForOfflineRoundedIcon from "@mui/icons-material/DownloadForOfflineRounded";
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import MissionCard from "./component/MissionCard";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
import MembershipCard from "./component/MembershipCard";
import DefaultView from "./component/DefaultView";

type TabName = 'Home'|'Members'| 'Events'| 'Contact Us'| 'Became a member';
export default function Home() {
  // const count = useSelector((state:RootState)=> state.tab.value);
  // const dispatch = useDispatch();
  const [tabRender, setTabRender] = useState("")

  // const tabData = useSelector((state:any) => state.tabData);
  // const activeTab = tabData.find((tab:any) => tab.isActive);

  const [isJoinUs, setIsJoinUs] = useState(false);
 const [activeTab, setActiveTab] = useState<TabName>('Home');

  const renderTabContent = () => {

    if(activeTab == "Became a member" && isJoinUs == false){
      joinUsButton();
    }
    else{
      switch (activeTab) {
        case "Home":
          return    "Home"
        case "Contact Us":
          return   <ContactUs/>
       
        default:
          return <DefaultView data={activeTab}/>
      }

    }
    }

  const joinUsButton = () => {
    setIsJoinUs((data) => !data);
    if(activeTab == "Became a member" && isJoinUs==false){

     setActiveTab('Home')
     setIsJoinUs(true);
    }
    console.log("joinUsButtonClick", isJoinUs);
  };

  const downloadWordFile = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/Membership_Form_MIDA_Final_blank.docx'; // File location in the 'public' folder
    link.download = 'Membership_Form_MIDA_Final_blank.docx'; // The name of the file to download
  
    // Append the link to the document and trigger a click
    document.body.appendChild(link);
    link.click();
  
    // Remove the link from the document after the download
    document.body.removeChild(link);
  };

  useEffect(() => {
    const header = document.querySelector(".component-header");
    const body = document.querySelector(".component-body");
    const historyBody = document.querySelector(".component-body01");
    const historyHeader = document.querySelector(".component-header01");
    const visionHeader = document.querySelector(".component-header02");
    const visionBody = document.querySelector(".component-body03");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active"); // Add class when in view
          }
        });
      },
      { threshold: 0.1 } // Adjust threshold as needed (0.5 means 50% of element is visible)
    );

    if (header) {
      observer.observe(header);
    }
    if (body) {
      observer.observe(body);
    }
    if (historyBody) {
      observer.observe(historyBody);
    }
    if (historyHeader) {
      observer.observe(historyHeader);
    }
    if (visionHeader) {
      observer.observe(visionHeader);
    }
    if (visionBody) {
      observer.observe(visionBody);
    }

    return () => {
      if (header) observer.unobserve(header);
      if (body) observer.unobserve(body);
      if (historyBody) observer.unobserve(historyBody);
      if (visionHeader) observer.unobserve(visionHeader);
    };
  }, [activeTab]);
  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
{/* 
      <button onClick={()=>dispatch(tabChange())}>redux</button>
      <span>count</span> */}
      {/* <h1>Current Active Tab: {activeTab ? activeTab.tabName : 'None'}</h1> */}

     { activeTab === 'Home' ? ( <><div className="landing-container "><div className="landing-container-background"><div className="font-view">
        <div className="text-view">
          New Barrackpore Society of Machine{" "}
          <span style={{ color: "#E02D66" }}>Intelligence</span> and Data
          Analytics
        </div>
        <div className="join-more-button" onClick={joinUsButton}>
          Join us
          <ArrowCircleRightRoundedIcon style={{ fontSize: "2.5rem" }} />
        </div>
        {/* <div className="banner">
          <Image src={Banner} alt="" width={500} />
        </div> */}
      </div></div></div><div className="history" style={{height: "100vh"}}>
          <div className="component-header">Welcome to MIDA</div>
          <div className="component-body">
            We are thrilled to welcome you to the Machine Intelligence and Data
            Analytics Society (MIDA)! Our society is dedicated to advancing the
            fields of machine intelligence, data science, and analytics by
            fostering collaboration, innovation, and knowledge sharing among
            students, researchers, and professionals.
            <br />
            <br />
            At MIDA, we believe in the transformative power of data-driven
            solutions and intelligent systems. Whether you're a seasoned expert or
            a passionate learner, our community offers a platform for you to
            explore cutting-edge technologies, engage in impactful research, and
            connect with like-minded individuals.
            <br />
            <br />
            Join us in shaping the future of machine intelligence and data
            analytics. Together, we can unlock new possibilities and drive
            meaningful change in our world. Welcome to the MIDA family!
          </div>
        
        </div><div
          className="history"
          style={{ backgroundColor: "#EEEEEE", height: "50vh" }}
        >
          {" "}
          <div className="component-header01">History of MIDA</div>
          <div className="component-body01">
            The Machine Intelligence and Data Analytics Society (MIDA) was
            established in 2023 with a vision to create a dynamic community
            focused on the rapidly evolving fields of machine intelligence and
            data analytics. Founded by a group of passionate students,
            researchers, and professionals, MIDA was born out of the shared belief
            that collaboration and knowledge exchange are key to driving
            innovation and solving complex challenges in these cutting-edge
            domains.
          </div>
        </div><div className="history" style={{ height: "50vh" }}>
          <div className="component-header02">Vision</div>
          <div className="component-body03">
            {" "}
            Our vision is to be a leading hub for innovation, research, and
            collaboration in the fields of machine intelligence and data
            analytics. We aspire to empower individuals and organizations to
            harness the full potential of data-driven technologies, ultimately
            driving positive societal and technological advancements. Through
            fostering a community of passionate learners, researchers, and
            professionals, we aim to shape the future of AI and data science,
            making impactful contributions to both academia and industry.
          </div>
        </div><div
          className="history"
          style={{ backgroundColor: "#EEEEEE", height: "100vh" }}
        >
          <div className="component-header01">Mission</div>
          <MissionCard data={MissionData} />
        </div></>) : renderTabContent()}

      <footer />
      <div
        className="membershipModal"
        style={{
          right: isJoinUs ? 0 : "50%",
          bottom: isJoinUs ? 0 : "50%",
          top: isJoinUs ? 0 : "50%",
          left: isJoinUs ? 0 : "50%",
          opacity: isJoinUs ? 1 : 0,
        }}
      >
        <div className="membershipModal-content">
          <div className="membershipModal-content-header">
            Membership at MIDA{" "}
            <CancelRoundedIcon
              style={{ fontSize: "2rem" }}
              onClick={joinUsButton}
            />
          </div>
          <div className="membershipModal-content-body">
            <div className="membershipDescriptionContainer">
              <div className="image-label">
                <GroupsRoundedIcon style={{ fontSize: "3rem" }} />
              </div>
              Becoming a member of MIDA opens the door to a world of
              opportunities in the fields of machine intelligence and data
              analytics. Whether you’re a student eager to learn, a researcher
              looking to collaborate, or a professional seeking to stay ahead of
              industry trends, MIDA offers a supportive and dynamic community to
              help you achieve your goals.
            </div>
            <MembershipCard
              data={MembershipData.membershipData.howToJoin}
              header={"How to Join"}
            />
            <MembershipCard
              data={MembershipData.membershipData["MembershipBenefits:"]}
              header={"Membership Benefits"}
            />
            <MembershipCard
              data={MembershipData.membershipData.WhoCanJoin}
              header={"Who Can Join"}
            />
            <MembershipCard
              data={MembershipData.membershipData.membershipFee}
              header={"Membership Fee"}
            />
          </div>
          <div className="membershipModal-content-footer">
            <div className="downloadButton" onClick={downloadWordFile}>Download Application<DownloadForOfflineRoundedIcon style={{fontSize: "1.9rem"}}/></div>
            {/* <div className="downloadButton">Go Online <PublicRoundedIcon style={{fontSize: "1.9rem"}}/></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
