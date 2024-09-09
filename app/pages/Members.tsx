import { Divider } from "@mui/material";
import MembersData from "../data/MembersData.json";
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
function Members() {
  return (
    <div>
      <div className="memberContainer">
        <div className="memberContainerHeader"></div>
        <div className="memberContainerBody">
          <span className="memberContainerHeaderText" style={{ fontSize: "1.5rem" }}>Members</span>
          {MembersData.membersData.map((data: any) => (
            <div key={data.id}>
              <div className="memberRow">
                <span className="memberName">
                    <AccountCircleRoundedIcon style={{fontSize:"3rem"}}/>
                  <span className="memberNameSegment">
                  <span style={{fontSize:"1rem", fontWeight: 600}}>{data.mName}</span>
                  <span>{data.mAffiliation}</span>
                  </span>
                </span>
                <span className="memberMailSegment"><span style={{fontWeight:600}}>{data.mType}</span><span>{data.mEmail}</span></span>
                
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Members;
