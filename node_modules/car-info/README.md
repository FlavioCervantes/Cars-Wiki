# car-info
![npm](https://img.shields.io/npm/v/car-info)
![npm](https://img.shields.io/npm/dt/car-info)

Typescript Library for Car Make and Models 🚗

- 🌎 Supports Web and Node.js
- 🔒 Typescript type safety
- 🚫 No dependencies

## `getMakes`
Returns a list of makes (`Toyota`, `Ford`, `Acura`, ...)

```typescript
import { getMakes } from 'car-info';

const makes = getMakes();
```

## `getModels`
Returns a list of models for a given make. For the example below `Tundra`, `Tacoma`, ... will be returned

```typescript
import { getModels } from 'car-info';

const models = getModels("Toyota");
```
