import axios, { AxiosRequestConfig, Method } from "axios";
import toast from 'react-hot-toast'
// #region [Response]
export interface BaseResponse {
  status_code: number;
  error_msg: string;
  body: unknown | any;
}
// #endregion

// #region [BaseRequest]
interface BaseRequestProps {
  url: string;
  method: Method;
  params?: unknown;
  data?: unknown;
  contentType?: string;
}

export interface PaginatedResponse {
  data: any[];
  pagination: {
    total: number;
    pageCount: number;
    start: number;
    end: number;
    limit: number;
  };
}

const catchError = (err: Error, isMe: boolean) => {
  const isLogin = window.location.pathname.startsWith("/auth/login");
  if (isMe) {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    toast.error("Your session has expired. Please login again.");
    if (!isLogin) window.location.replace("/auth/login");
  } else {
    toast.error((err as any).response.data.error_msg);
  }
};

export const BaseRequest = async (props: BaseRequestProps) => {
  const isMe = props.url === "auth/site/me";
  const token = localStorage.getItem("token");
  const locale = localStorage.getItem("locale") || "mn";
  axios.defaults.headers.common.Accept = "application/json";
  axios.defaults.headers.common["Accept-Language"] = locale || "mn";
  axios.defaults.headers.common["Content-Type"] = props.contentType
    ? props.contentType
    : "application/json";
  axios.defaults.headers.common["Access-Control-Allow-Headers"] = "*";
  if (token) axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const config: AxiosRequestConfig = {
    baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
    ...props,
  };
  try {
    const responseInstance = await axios(config);
    const response = responseInstance.data as BaseResponse;
    if (response.status_code !== 200) {
      return response.body;
    }
    return response.body;
  } catch (err: any) {
    catchError(err, isMe);
    throw err;
  }
};
// #endregion
