import { BaseRequest } from "../../services"
import { User } from "./types"

const app = {
  list: async (q: string): Promise<any> => {
    if (q) {
      return await BaseRequest({
        url: `/users?${q}`,
        method: "GET",
      }) as User[];
    } else {
      return await BaseRequest({
        url: `/users`,
        method: "GET",
      }) as User[];
    }
  },

  getPortfolio: async (id: string): Promise<any> => {
    return await BaseRequest({
      url: `/portfolio/${id}`,
      method: "GET",
    });
  },
}

export default app
