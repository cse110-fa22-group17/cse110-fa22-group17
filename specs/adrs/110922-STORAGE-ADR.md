# We decided to focus on local storage

## Context and Problem Statement

Deciding on the storage method(s) for our application based on their pros/cons and our needs

## Considered Options

* Local storage
  * Easy to implement
  * Does not support connection/syncing between users and devices
  * Good starting point for CRUD implementation
  * Essential functionality
* PouchDB + CouchDB via IBM Cloudant
  * PouchDB (in-browser local database) allows applications to save data locally, so that users can enjoy all the features of an app even when they're offline. Using CouchDB via IBM Cloudant (remote cloud database), the data is synchronized between clients, so users can stay up-to-date wherever they go.
  * Good for user collaboration, but user collaboration might not be a needed implementation
  * May be unnecessarily complicating a simple process

## Decision Outcome

We decided to focus on local storage first as it is required for the project and we must reach a baseline level of functionality before going for more complicated stretch goals.
