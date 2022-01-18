
import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"

const projectPathForData = `${Deno.cwd()}/Deno-Antoine/database.json`
console.log(projectPathForData)

/*************      Remote Mode - using GitHub as database      *************/
// const userName = "plants-for friend"
// import { password } from './Deno-Antoine/topsecret.ts'
// const org = "plants-for-friends"
// const repo = "persistence-example-project-folder"
// await Persistence.commitAndPush(projectPathForData, userName, password, org, repo) // commented out as I should not publish my password

// const linkToExampleDataRemote = "https://raw.githubusercontent.com/michael-spengler/persistence-example-project-folder/master/example-file.json"
// console.log(`remote file content: ${await Persistence.readFromRemoteFile(linkToExampleDataRemote)}`) 

