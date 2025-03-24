import Axios from "axios";
import { NewAccountApi } from "./account.api-model";

const url = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: NewAccountApi): Promise<NewAccountApi> =>
  Axios.post<NewAccountApi>(url, account).then(({ data }) => data);