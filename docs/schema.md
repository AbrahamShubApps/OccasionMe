# Schema Information

## users
delegated to aws cognito

## eventGroups
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
hostId      | integer   | not null, foreign key, references: users

## events
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
eventGroupId   | integer   | not null, foreign key, references: eventGroups
location       | TBD       |


## invitations
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
userId      | integer   | not null, foreign key, references: users
eventId     | integer   | not null, foreign key, references: events
RVSPStatus  | string    | not null, default: 'MAYBE'
tableNum    | integer   |
seatNum     | integer   |

joined index: userId + eventId, unique

## registries
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
eventGroupId   | integer   | not null, foreign key, references: users
name           | string    | not null
links          | string    | not null
image_url      | string    | not null

## photos
column name      | data type | details
-----------------|-----------|-----------------------
id               | integer   | not null, primary key
photographerId   | integer   | not null, foreign key, references: users
eventId          | integer   | not null, foreign key, references: events
link             | string    | not null
other photo data |
