
"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import HeaderImage from "../assets/mida.svg";
import MidaLogo from '../assets/midaLogo.svg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import EventRoundedIcon from '@mui/icons-material/EventRounded';
import PermContactCalendarRoundedIcon from '@mui/icons-material/PermContactCalendarRounded';


type TabName = 'Homes'|'Members'| 'Events'| 'Contact Us'| 'Became a member'; // Define valid tab names

// Define the props for the TabSelector component
interface Tab{
  name:TabName;
  icon:any;
}
interface TabSelectorProps {
  activeTab: TabName;
  setActiveTab: (tab: TabName) => void; // Function type for setting the active tab
}

const Header: React.FC<TabSelectorProps> = ({ activeTab, setActiveTab }) => {

  const tabs: Tab[] = [{ name: 'Homes', icon: <HomeRoundedIcon/> },
    { name: 'Members', icon:<PeopleAltRoundedIcon/> },
    { name: 'Events', icon: <EventRoundedIcon/> },
    { name: 'Contact Us', icon: <PermContactCalendarRoundedIcon/> },
    { name: 'Became a member', icon: <PersonAddAlt1RoundedIcon/> }];
  const [isVisible, setIsVisible] = useState(true); // State to track header visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0); 
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{
      width: 300,
      color: "white"
      // Optional: Add rounded corners
    }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {tabs.map((text, index) => (
          <ListItem  key={index} disablePadding>
            <ListItemButton onClick={() => handleTabClick(text.name)}>
              <ListItemIcon  sx={{
    color: activeTab === text.name ? 'White' : 'gray', // Change color based on activeTab
  }}>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.name}  primaryTypographyProps={{
    sx: {
      fontSize: activeTab === text.name ? '1.2rem' : '1rem',color:activeTab === text.name ? 'White' : 'gray',
    },
  }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      
    </Box>
  );

 
  const handleTabClick = (tabName: TabName) => {
    setActiveTab(tabName); // Update the active tab
  };

  // Handle scroll event
  const [isMobile, setIsMobile] = useState(false);
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos || currentScrollPos < 10;

    setIsVisible(visible);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

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
        backgroundColor: prevScrollPos!=0  ? "#3d52a090" :"#3d52a000",
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
    {!isMobile ? (<div className="tab-card">
    {tabs.map((data:any, index:number) => (
      data.name != "Became a member" ? (<div key={index}  
      className="tab"
      style={{fontSize:activeTab === data.name ? "1.2rem": "1rem" }}
        onClick={() => handleTabClick(data.name)}
      >{data.name}</div>) : <div className="becameAMemberContainer" onClick={() => handleTabClick(data.name)}>{data.name}</div>
    ))} <div></div>
    </div>) : <><MenuRoundedIcon onClick={toggleDrawer(true)}/>   <Drawer PaperProps={{
        sx: {
          backgroundColor: 'rgba(0, 0, 0, 0.1)', // Semi-transparent background
          backdropFilter: 'blur(50px)', // Apply blur effect
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Optional: shadow for visual depth
          width: 300, // Optional: specify drawer width
        },
      }} open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer></>}
      </div>
    </div>
  );
}

export default Header;
