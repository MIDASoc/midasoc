"use client";
export const CHANGE_TAB = 'CHANGE_TAB';

export const changeTab = (tabName) => ({
  type: CHANGE_TAB,
  payload: tabName,
});