import { createSlice } from "@reduxjs/toolkit";

const newParcelObject = {
  id: "",
  mainInfo: {
    size: "S",
    date: "",
    startTime: "",
    endTime: "",
    description: "",
  },
  sender: {
    phone: "",
    name: "",
    address: {},
    email: "",
    comment: "",
  },
  recipient: {
    phone: "",
    name: "",
    address: {},
    comment: "",
  },
  tracking: {
    id: "RR434493",
    currentStage: "Created",
    timeStamps: {
      createdAt: "08:00",
      confirmedAt: "08:30",
      pickedUpAt: "09:00",
      deliveredAt: "10:00",
    },
    stages: {
      created: "Created",
      confirmed: "Confirmed",
      pickedUp: "pickedUp",
      delivered: "Delivered",
    },
  },
};

const newParcelSlice = createSlice({
  name: "newParcel",
  initialState: newParcelObject,
  reducers: {
    updMainInfo: {
      reducer(state, action) {
        state.mainInfo = action.payload.value;
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
    updSender: {
      reducer(state, action) {
        state.sender = action.payload.value;
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
    updRecipient: {
      reducer(state, action) {
        state.recipient = action.payload.value;
        return state;
      },
      prepare(value) {
        return {
          payload: { value },
        };
      },
    },
  },
});

export const { updMainInfo, updSender, updRecipient } = newParcelSlice.actions;

export const newParcelReducer = newParcelSlice.reducer;
