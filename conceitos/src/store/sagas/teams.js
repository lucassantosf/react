import { call, put } from "redux-saga/effects";
import api from "../../services/api";

import TeamActions from "../ducks/teams";

export function* getTeams() {
  const response = yield call(api.get, "teams");

  yield put(TeamActions.getTeamsSuccess(response.data));
}
