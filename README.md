# Not to do api

This api is created for not to do application.
Here is the link to front end app [.....]

## APIS

All the api will be following the `{rootUrl}/api/v1/` format.

`../api/v1/task` resource will provide all task related api.
| # | Method | Path | Description |
|---|--------|------| ----------- |
| 1.| `GET` | `/task` | this will return al the tasks available in the database |
| 2.| `POST` | `/task` | send task object to api and store in the database |
| 3.| `DELETE` | `/task` | it expects ID of the task and will delete a task from database |

`../api/v1/user` resource will provide all user related api

### User API
