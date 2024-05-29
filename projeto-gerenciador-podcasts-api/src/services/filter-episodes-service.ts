import { repositoryPodcast } from "../repositories/podcasts-repository"
import { IFilterPodcastModel } from "../models/filter-podcast-model";
import { statusCode } from "../utils/status-code";


export const serviceFilterEpisodes = async(podcastName: string | undefined): Promise<IFilterPodcastModel>  => {
    // definir a interface de retorno
    let responseFormat:IFilterPodcastModel = {
        statusCode : 0,
        body: []
    }

    const queryString = podcastName?.split("?p=")[1] || ""

    const data = await repositoryPodcast(queryString);

    //verifico se tem retorno
    responseFormat.statusCode = data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT
    
    responseFormat.body = data

    return responseFormat
}