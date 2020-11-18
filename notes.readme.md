Exercises:
http://workshops.angulararchitects.io/ms/f9bc9634-a993-4ab0-acd1-926fe8a4064d/index.html

monorepos, communication between components/libs:

tight connection, like hand and fingers
-> use inputs and outputs

loose connection, things don`t need to know about their existence
-> inject store instance, or communicate through a service

vs code:
https://marketplace.visualstudio.com/items?itemName=cyrilletuzi.angular-schematics

https://marketplace.visualstudio.com/items?itemName=sjuulwijnia.kx-vscode-angular-context-creator

https://marketplace.visualstudio.com/items?itemName=Angular.ng-template

strategic design => decomposing a system
tactical design => design patterns

Shared Krenel vs Open/Host module

Enterprise monorepo patterns: tinyurl.com/y2jjxld7

Libraries type:

- Smart Components ( know about use case )
- Dumb Components ( have no idea about use case)
- Domain Library ( some calculations on client, for instance: if this opt is set, this cannot be activated )
- Utitlity libs, just technical

Booking domain
Feature
Dumb Components (ui)
Domain
Util

Boarding domain
Feature
Dumb Components
Domain
Util

Shared ( Common Property )
Feature
Dumb Components
Domain
Util

Booking domain can talk only to itself, elements down, ie feature, ui, domain, util and SHARED

But shared kernel has a disadvantage:

- gets messy
- grows big ( and in this case domain cutting makes no sense, since everything is coupled)

But we can use Open/Host module, domains are exposing API, that is used in some other module

Facade: a service for a specific (one) use case

Hexagonal Architecture, Clear Atrchitecture ( onion )

Domain lib ( three folders ):

- Application
- Domain model
- Infrastucture

Swagger, can spit off typescript definition

Poczytać: Backend For Frontend

https://www.npmjs.com/package/@angular-architects/ddd

- nx vs code extension

-- schematics for creating schematics:
https://nx.dev/latest/angular/plugins/nx-plugin/overview

Distributed cache:

npm install @apployees-nx/level-task-runner -D
npm install mongodown -D
Configure @apployees-nx/level-task-runner in nx.json

nx-json:

"tasksRunnerOptions": {
"default": {
"runner": "@apployees-nx/level-task-runner",
"options": {
"cacheableOperations": ["build", "test", "lint", "e2e"],
"levelTaskRunnerOptions": {
"driver": "mongodown",
"host": "127.0.0.1",
"port": 27017,
"name": "cache",
"collection": "nx-cache"
}
}
}
},
