# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users` (invite a user)
- `GET /api/guests` ()

### Events

- `POST /api/event_group`
  - create event group
- `POST /api/event_group/:id/events`
  - create event as part of event group
- `GET /api/events/:id`

### Photos

- `POST /api/events/:id/photos`
  - post a photo
- `GET /api/events/id/photos`
