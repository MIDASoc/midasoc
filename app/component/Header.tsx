
"use client";
import React, { useEffect, useState } from "react";
import TabData from "../data/TabData.json";
import Image from "next/image";
import HeaderImage from "../assets/mida.svg";
import MidaLogo from '../assets/midaLogo.svg'
import { useDispatch, useSelector } from 'react-redux';
import { changeTab } from '../GlobalRdux/actions';

type TabName = 'Home'|'Members'| 'Events'| 'Contact Us'| 'Became a member'; // Define valid tab names

// Define the props for the TabSelector component
interface TabSelectorProps {
  activeTab: TabName;
  setActiveTab: (tab: TabName) => void; // Function type for setting the active tab
}

const Header: React.FC<TabSelectorProps> = ({ activeTab, setActiveTab }) => {

  const tabs: TabName[] = ['Home','Members', 'Events', 'Contact Us', 'Became a member'];
  const [isVisible, setIsVisible] = useState(true); // State to track header visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  // const dispatch = useDispatch();
  // const tabData = useSelector((state:any) => state.tabData);
  const [isClient, setIsClient] = useState(false);

  // Ensure the component is only mounted on the client side
  useEffect(() => {
    setIsClient(true);
  }, []);
  const handleTabClick = (tabName: TabName) => {
    setActiveTab(tabName); // Update the active tab
  };

  // Handle scroll event
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setIsVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup the event listener
    };
  }, [prevScrollPos]);
  return (
    <div
      className="component"
      style={{
        opacity: isVisible ? 1 : 0,
        scale: prevScrollPos!=0 ? 1.02:1,
        backgroundColor: prevScrollPos!=0  ? "#51008b50" :"#51008b00",
        backdropFilter : prevScrollPos!=0 ? "blur(40px)": "blur(0px)",
        boxShadow:
          prevScrollPos != 0 ? "0px 4px 8px rgba(0, 0, 0, 0.2)" : "none",
      }}
    >
      <div className="component-card">
        <div className="midaLogoContainer">
        <Image
            src={MidaLogo} // Path to the image
            alt="Example Image" // Alt text for accessibility
            width={30} 
            color="#ffffff"// Desired width in pixels
            // Desired height in pixels
          />
          <Image
            src={HeaderImage} // Path to the image
            alt="Example Image" // Alt text for accessibility
            width={100} // Desired width in pixels
            // Desired height in pixels
          />
        </div>
        <div className="tab-card">
        {tabs.map((data:any) => (
          data != "Became a member" ? (<div key={data}  
          className="tab"
          style={{fontSize:activeTab === data ? "1.2rem": "1rem" }}
           onClick={() => handleTabClick(data)}
          >{data}</div>) : <div className="becameAMemberContainer" onClick={() => handleTabClick(data)}>{data}</div>
        ))} <div></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
