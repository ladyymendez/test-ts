import { TEST } from "../actionTypes";

function testData(state = 'test data', action: { type: string, data: string }) {
  if (action.type === TEST) {
    return action.data;
  }

  return state;
}

export default testData;