"use client";
import { CHANGE_TAB } from './actions';

const initialState = {
  tabData: [
    {
      tabName: 'Home',
      tabAccess: true,
      isActive: true,
      subTab: [
        {
          tabName: 'Home',
          tabAccess: true,
        },
      ],
    },
    {
      tabName: 'Contact Us',
      tabAccess: true,
      isActive: false,
      subTab: [
        {
          tabName: 'Home',
          tabAccess: true,
        },
      ],
    },
  ],
};

const tabReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        tabData: state.tabData.map((tab) =>
          tab.tabName === action.payload
            ? { ...tab, isActive: true }
            : { ...tab, isActive: false }
        ),
      };
    default:
      return state;
  }
};

export default tabReducer;