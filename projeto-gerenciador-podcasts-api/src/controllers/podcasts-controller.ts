import { IncomingMessage, ServerResponse} from 'http';
import { serviceListEpisodes } from '../services/list-episodes-service';
import { serviceFilterEpisodes } from './../services/filter-episodes-service';
import { ContentType } from '../utils/content-type';
import { IFilterPodcastModel } from '../models/filter-podcast-model';

const defaultContent = {'Content-Type': ContentType.JSON}

export const getListEpisodes = async(req: IncomingMessage, res: ServerResponse) => {

    const content:IFilterPodcastModel = await serviceListEpisodes();

    res.writeHead(content.statusCode,defaultContent);
    res.write(JSON.stringify(content.body))
    res.end()
}

export const getFilterEpisodes = async(req: IncomingMessage, res: ServerResponse) => {
    
    const content:IFilterPodcastModel = await serviceFilterEpisodes(req.url);

    res.writeHead(content.statusCode,defaultContent);
    res.write(JSON.stringify(content.body))
    res.end()
}