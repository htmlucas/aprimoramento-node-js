import { IPodcast } from "./podcast-models";

export interface IFilterPodcastModel {
    statusCode:number,
    body:IPodcast[]
}