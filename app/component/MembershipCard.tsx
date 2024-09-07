
"use client";

function MembershipCard(data: any) {
  console.log("howToJoinData", data);
  return (
    <div className="membershipCard">
      <div className="membershipCardTitle">{data.header}</div>

      {data.header != "Membership Fee" ? (
        <div className="membershipCardItem">
          {data.data.map((key: any) => (
            <div className="item-container">
              <span style={{ fontWeight: 700, whiteSpace: "nowrap" }}>
                {key.title}
              </span>
              |{key.description}
            </div>
          ))}
        </div>
      ) : (
        <div className="fee-card">
          {data.data.map((key: any) => (
            <div className="item-container-fee">
              <span className="fees-card"  style={{ fontWeight: 800, whiteSpace: "nowrap" }}>
                <span style={{ fontWeight: 100, fontSize:"1rem", whiteSpace: "nowrap" }}>₹</span>{key.fee}
              </span>
              <div className="membershipType">
              <span>{key.description}</span>
              <span>{key.membershipType}</span>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MembershipCard;
