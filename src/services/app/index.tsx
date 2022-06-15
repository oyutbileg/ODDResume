import http from "../../services"
import { User } from "./types"

const app = {
  list: async (q: string): Promise<any> => {
    if (q) {
      return await http.get<User[]>(`/users?${q}`)
    } else {
      return await http.get<User[]>(`/users`)
    }
  },

  getPortfolio: async (id: string): Promise<any> => {
    return await http.get<any>(`/portfolio/${id}`)
  },
}

export default app
