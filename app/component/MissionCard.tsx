"use client";
import React, { useEffect, useState } from "react";

function MissionCard(data: any) {
 
  return (
    <div className="component-body02">
      {data.data.MissionData.map((key: any, index: number) => (
        <div key={key.id} className="missionCard">
          <div className="missionCard-body">{key.description}</div>
          <div className="missionCard-footer">
            {index + 1} |{key.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default MissionCard;
