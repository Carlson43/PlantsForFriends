
import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"

const projectPathForData = `${Deno.cwd()}/Deno-Antoine/database.json`
console.log(projectPathForData)

/*************      Remote Mode - using GitHub as database      *************/
const userName = "plants-for-friends"
const password = 'dreadful-fame9-presuming'
const org = "plants-for-friends"
const repo = "persistence-example-project-folder"
await Persistence.commitAndPush(projectPathForData, userName, password, org, repo) // commented out as I should not publish my password

const linkToExampleDataRemote = "https://github.com/plants-for-friends/persistence-example-project-folder/blob/main/data-file.json"
console.log(`remote file content: ${await Persistence.readFromRemoteFile(linkToExampleDataRemote)}`) 
