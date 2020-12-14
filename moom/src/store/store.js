import React, { createContext, useState } from "react";

// ContextAPI를 이용한 전역변수 store
// hooks useState를 사용하여 state변화
// 전달 value로 객체 actions, state를 전달하여 찾는다
// NoLoginMain.js 에서 Provider 사용
//(변수들을 전달할 최상위 컴퍼넌트, 가장 최상위 컴퍼넌트에 선언시 모든 곳에서 사용가능)
export const User = React.createContext({
  state: {
    weightL: "",
    weightR: "",
    body_fatL: "",
    body_fatR: "",
    shoulderL: "",
    shoulderR: "",
    chestL: "",
    chestR: "",
    waistL: "",
    waistR: "",
    hipL: "",
    hipR: "",
    thighL: "",
    thighR: "",
    goal1: "",
    goal2: "",
    goal3: "",
    goal4: "",
    goal5: "",
    goal6: "",
    goal7: "",
    goal_1: "",
    goal_2: "",
    goal_3: "",
    goal_4: "",
    goal_5: "",
    goal_6: "",
    goal_7: "",
  },
  actions: {
    setWeightL: () => {},
    setWeightR: () => {},
    setBody_fatL: () => {},
    setBody_fatR: () => {},
    setShoulderL: () => {},
    setShoulderR: () => {},
    setChestL: () => {},
    setChestR: () => {},
    setWaistL: () => {},
    setWaistR: () => {},
    setHipL: () => {},
    setHipR: () => {},
    setThighL: () => {},
    setThighR: () => {},
    setClick: () => {},
    setGoal1: () => {},
    setGoal2: () => {},
    setGoal3: () => {},
    setGoal4: () => {},
    setGoal5: () => {},
    setGoal6: () => {},
    setGoal7: () => {},
    setGoal_1: () => {},
    setGoal_2: () => {},
    setGoal_3: () => {},
    setGoal_4: () => {},
    setGoal_5: () => {},
    setGoal_6: () => {},
    setGoal_7: () => {},
  },
});
const UserStore = (props) => {
  const [weightL, setWeightL] = useState();
  const [weightR, setWeightR] = useState();
  const [body_fatL, setBody_fatL] = useState();
  const [body_fatR, setBody_fatR] = useState();
  const [shoulderL, setShoulderL] = useState();
  const [shoulderR, setShoulderR] = useState();
  const [chestL, setChestL] = useState();
  const [chestR, setChestR] = useState();
  const [waistL, setWaistL] = useState();
  const [waistR, setWaistR] = useState();
  const [hipL, setHipL] = useState();
  const [hipR, setHipR] = useState();
  const [thighL, setThighL] = useState();
  const [thighR, setThighR] = useState();
  const [isClick, setClick] = useState(false);
  const [goal1, setGoal1] = useState();
  const [goal2, setGoal2] = useState();
  const [goal3, setGoal3] = useState();
  const [goal4, setGoal4] = useState();
  const [goal5, setGoal5] = useState();
  const [goal6, setGoal6] = useState();
  const [goal7, setGoal7] = useState();
  const [goal_1, setGoal_1] = useState();
  const [goal_2, setGoal_2] = useState();
  const [goal_3, setGoal_3] = useState();
  const [goal_4, setGoal_4] = useState();
  const [goal_5, setGoal_5] = useState();
  const [goal_6, setGoal_6] = useState();
  const [goal_7, setGoal_7] = useState();

  const value = {
    state: {
      weightL,
      weightR,
      body_fatL,
      body_fatR,
      shoulderL,
      shoulderR,
      chestL,
      chestR,
      waistL,
      waistR,
      hipL,
      hipR,
      thighL,
      thighR,
      isClick,
      goal1,
      goal2,
      goal3,
      goal4,
      goal5,
      goal6,
      goal7,
      goal_1,
      goal_2,
      goal_3,
      goal_4,
      goal_5,
      goal_6,
      goal_7,
    },
    actions: {
      setWeightL,
      setWeightR,
      setBody_fatL,
      setBody_fatR,
      setShoulderL,
      setShoulderR,
      setChestL,
      setChestR,
      setWaistL,
      setWaistR,
      setHipL,
      setHipR,
      setThighL,
      setThighR,
      setClick,
      setGoal1,
      setGoal2,
      setGoal3,
      setGoal4,
      setGoal5,
      setGoal6,
      setGoal7,
      setGoal_1,
      setGoal_2,
      setGoal_3,
      setGoal_4,
      setGoal_5,
      setGoal_6,
      setGoal_7,
    },
  };

  return <User.Provider value={value}>{props.children}</User.Provider>;
};

export default UserStore;
