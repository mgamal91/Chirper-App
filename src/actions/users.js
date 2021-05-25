export const RECIEVE_USERS='RECIEVE_USERS';

//recieve users from API req in shared action creator
export function recieveUsers(users)
{
    return{type:RECIEVE_USERS, users}
}