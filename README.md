# Not to do api

This api is created for not to do application.
Here is the link to front end app [.....]

## APIS

All the api will be following the `{rootUrl}/api/v1/` format.

`../api/v1/user2` resource will provide all user2 related api.
| # | Method | Path | Description |
|---|--------|------| ----------- |
| 1.| `GET` | `/user2` | this will return al the user2s available in the database |
| 2.| `POST` | `/user2` | send user2 object to api and store in the database |
| 3.| `DELETE` | `/user2` | it expects ID of the user2 and will delete a user2 from database |
| 4.|`PATCH` | `/user2`| it expects the ID of the user2 and update in the database |

`../api/v1/user2` resource will provide all user related api

### User API

crete user API for the following features

1. create user with name, email and password
2. get all the users
3. get single user
4. delete a user
5. update a user

do:

1. create new branch -git branch user-api
2. switch branch - git checkout user-api
3. start writing code
