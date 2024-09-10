import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import PublicIcon from "@mui/icons-material/Public";
import ImageCarousel from "../component/ImageCarousel";
import ContactCarousel from "../data/ContactImageData.json";
function ContactUs() {
  return (
    <div className="container">

      <ImageCarousel data={ContactCarousel.eventImageGallery} tab={"contact"}/>
  
      {/* <div className="contactContainer">
        <div className="contactContainerSegment">
          <HomeRoundedIcon style={{fontSize:"3rem"}} />
          213/A/1 East Kodalia, New Brrackpore<br></br>Kolkata-700131, West
          Bengal, Inida
        </div>
        <div className="contactContainerSegment">
          <LocalPhoneIcon style={{fontSize:"3rem"}} />
         +91 8013901318
        </div>
        <div className="contactContainerSegment">
          <AlternateEmailIcon style={{fontSize:"3rem"}}  />
          midasociety@gmail.com
        </div>
        <div className="contactContainerSegment">
          <PublicIcon style={{fontSize:"3rem"}} />
         midasoc.org
        </div>
      </div> */}
    </div>
  );
}

export default ContactUs;
