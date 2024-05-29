import fs from 'fs'
import path from 'path'
import {IPodcast} from '../models/podcast-models'


const pathData = path.join(__dirname,"../repositories/podcasts.json")

export const repositoryPodcast = async(podcastName?: string): Promise<IPodcast[]> => {    
    const language = "utf-8"
    
    const rawData = fs.readFileSync(pathData,language)
    let jsonFile = JSON.parse(rawData)
    
    if(podcastName){
      jsonFile = jsonFile.filter(
        (podcast: IPodcast) => podcast.podcastName === podcastName)  
    }
    return jsonFile
}