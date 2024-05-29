import { getFilterEpisodes, getListEpisodes } from "./controllers/podcasts-controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./utils/http-methods";
import * as http from "http";

export const app = async(request: http.IncomingMessage, response:http.ServerResponse) => {
    //querystring

    const baseUrl = request.url?.split("?")[0]

    if(request.method === HttpMethod.GET && baseUrl === Routes.LIST){
        await getListEpisodes(request,response)
    }
    if(request.method === HttpMethod.GET && baseUrl === Routes.EPISODES){
        await getFilterEpisodes(request,response)
    }
}