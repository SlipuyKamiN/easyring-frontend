import { createSlice } from "@reduxjs/toolkit";
import { calculateDistance } from "~/helpers/calculateDistance";
import { calculatePrice } from "~/helpers/calculatePrice";

const newParcelObject = {
  mainInfo: {
    size: "S",
    date: null,
    startTime: null,
    endTime: null,
    description: "",
    distance: 0,
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
    history: [],
  },
  payment: {
    price: 0,
    type: null,
    transactionDetails: {},
    isPaid: false,
  },
  driver: {
    name: "",
    _id: "",
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

    updPrice: {
      reducer(state, action) {
        state.payment.price = action.payload.value.price;
        state.mainInfo.distance = action.payload.value.distance;
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

export const updatePrice =
  ({ sender, recipient, size }) =>
  async (dispatch) => {
    const distance = await calculateDistance(sender, recipient);
    const price = calculatePrice(distance, size);

    dispatch(updPrice({ distance, price }));
  };

export const { updMainInfo, updSender, updRecipient, updPrice } =
  newParcelSlice.actions;

export const newParcelReducer = newParcelSlice.reducer;
