# Code Guidelines

## Project Structure

### Mobile App

```
- api
    - index.js
    - user.js
    - discount.js
- assets
    - icons
        - arrow-back.svg
    - images
        - logo.png
- components
    - index.js
    - Row
    - Col
- config
    - index.js
- contexts
    - UserContext
        - index.js
        - UserContext.js
        - useUserContext.js
    - ContextProviders.js
    - index.js
- constants
    - index.js
    - user.js
    - discount.js
- errors
    - ApiError.js
    - index.js
- features
    - discount
        - api
        - components
            - index.js
            - Discount
        - hooks
            - index.js
            - useFetchDiscountData.js
        - screens
            - index.js
            - DiscountList
            - DiscountDetails
        - modals
            - index.js
            - DiscountRedeemed
- hocs
    - index.js
    - withModalBackHandler.js
- hooks
    - index.js
    - useLogin.js
- navigation
    - navigators
        - createNestedStackNavigator.js
        - index.js
    - index.js
    - NavigationService.js
    - AppNavigation.js
    - ScreenNames.js
- services
    - DeepLinkService.js
    - FirebaseService.js
    - index.js
- styles
    - colors.js
    - fonts.js
    - index.js
    - Layouts.js
- types
    - libs
        - rn-bottom-drawer
        - svg
    - users.js
- utils
    - index.js
    - device.js
```

- **API:** Place all common API requests here. Scoped APIs, only used in a specific section of the app, should be placed in an `api` folder inside that section.

- **Assets:** Place all assets here. Images, icons, fonts, etc.

- **Components:** Place all common components used throughout the app. Feature scoped components should be placed in a `components` folder within said feature.

- **Config:** Global configuration including env variables or other defined configurations params are defined here

- **Contexts:** Global contexts to handle state management are placed here. It also includes a `ContextProviders` component to render all Providers and avoid overpopulating `App` component with them

- **Constants:** All common constants should be placed here. This will probably hold business logic related stuff such as certain names or maps used in the entire app. Constants scoped to a sections of the app should be placed under a `constants` folder within that section.

- **Errors:** Place errors here.

- **Features:** A feature defines some part of the application that may or may not have screens, components, hooks, api, etc. but has one purpose or business related logic.

- **HOCs:** Place all common HOCs here.

- **Hooks:** Place all common hooks here.

- **Navigation:** The main navigation component and the NavigationService should be placed here. Also, the screen name constants and custom navigators can be included.

- **Services:** Global services that provide specific logic for third party libraries or to manipulate a global components, app state, etc should be placed here.

- **Styles:** All common styles should be placed here, e.g. `layouts.js` or `color.js`.

- **Types:** All global types should be placed here (typescript). If a library doesn't have type definitions, we should add our own for it under `libs` folder. 

- **Utils:** Holds all utility files used in the app. Common logic to handle certain things should be placed here, e.g. `strings.js`. If you need some utility files under a feature, you can always create a `utils` folder within that feature.

### Best practices

- When having multiple files within a folder and all of them are part of that interface, create an index.js file to export all of those files. If the folder just has a main purpose, like in React components, the index.js file will be the component itself. There are some cases where we will **NOT** follow this behavior. For example, for `features` folder, it shouldn't have an `index` file. Also, to avoid circular dependencies we may omit `index` file too.

- If some case scenario is missing from this structure example, remember to follow the same practices and apply them to nested folders.

## Naming Conventions

Always use meaningful names. It doesn't matter if they are longer than average. It's better to have a name that describes in the best possible way what it is than having abbreviated or short names that require understanding the code to realize what value they hold or what they do.

### Code

- **Classes** and **React** components should be written in PascalCase, e.g. `MyClass` or `MyComponent`

- **Functions** should be written in camelCase, e.g. `myFunction`

- **Variables** should be written in camelCase, e.g. `myVar`

- **Boolean variables** should be self descriptive, indicating they are booleans. e.g. `isVisible` rather than `visible` or `hasShift` rather than `shift`

- **Constants** should be written in UPPERCASE, e.g. `DATE_FORMAT` or `MAX_RETRIES`

- **Enums** should be written in PascalCase, e.g.
  ```javascript
  export enum GenderTypesEnum {
    Male = 'M',
    Female = 'F',
  }
  ```

- **Set of related functions or variables** should be exported all together with a PascalCase export. This way the client that will use those, will be able to call them through an abstraction instead of having all the names imported, e.g.
  ```javascript
  // path utils/device.js
  function getWindowHeight() {
    return Dimensions.get('window').height
  }

  function getWindowWidth() {
    return Dimensions.get('window').width
  }

  export const DeviceUtils = {
    getWindowHeight,
    getWindowWidth,
  }
  ```

### Files

#### Assets

All asset files should be named in kebab-case

#### Set of exports

Commonly used when grouping functions that are related. In this case we name the file in kebab-case, with something meaningful that denotes what all these functions have in common. A usual case may be a `utils/strings.js`

#### One main export

It's possible to have a main export but also some complementary exports. In this case, the main export is the one that takes precedence and the file is named after it since the main purpose of said file is that export.

```javascript
// File User.js
export { User, UserTypes }
```

### Folders

Folders should match the main export of the index when referring to classes or components. When grouping multiple files or index file within folder has more than one main export, use kebab-case.

```javascript
// path MyComponent/index.js
export { MyComponent }

// path facility-breakdown/index.js
export { AgentService, someCronJob }
```

### Branches

Always use `kebab-case` when naming branches. 
- Feature branches: `{project-shorthand}-{ticket-number}/{type}/{description}`.
Example: `TFA-56/fix/drawer-wont-open`
- Hotfix branches (branches without ticket that need to be worked on inmediately): `hotfix/my-description`
Examples: `hotfix/user-not-able-to-login`

**Possible types:**

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing or correcting existing tests
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation

## Best Practices

### Eslint

Eslint is set up to provide linting rules and improve code guidelines. Remember to run `yarn lint` before committing and pushing changes.

When working on old legacy files, having the default VSCode config may lead to several formatting changes. If that happens, there's three options:

- Make a first commit a formatting commit, this way the dev making the future PR review can just look at the next commits an avoid the formatting one.

- If the PR is really big and may have a lot of intermediate commits just for formatting, the review will be really hard to do. Hence, disabling `eslint.autoFixOnSave` and `editor.formatOnSave` may be the best option. Those files can be formatted in future PRs

- If you know the files beforehand and some of them will need formatting, it's possible to make a first PR just to format all of them, quickly merge it and then start working on the real changes.

### Commitizen

Use commitizen to format commits in order to have a unified commit template to fill in.

- `npm i -g commitizen`

- Use `git cz` instead of `git commit`

- Follow the walkthrough and add the relevant information always including the ticket number with it's project shorthand for proper linking to Jira ticket, e.g. `TFA-56`

### Define constants for enums and predefined meaningful variables

- Enums that represent business logic.

- Predefined meaningful variables.

```javascript
// Enums
enum UserTypes {
  Facility = FACILITY,
  Agent = AGENT,
  Admin = ADMIN,
}

const MAX_RETRIES = 5
```

### Use `const` instead of `let` when possible

This will help identify better and quicker which variables are meant to be constants and which are meant to be re assigned hence their value will change.

### Keep boolean expressions simple

Keep simple logic for boolean expressions.

```javascript
// Bad
if (array.length > 0)

if (array.length === 0)

// Good
if (array.length)

if (!array.length)

// Bad
if (user === null)

// Good
if (!user)

```

### Use template literals instead of string concats

```javascript
// Bad
const welcome = 'Welcome ' + user.name + ' ' + user.lastName + '!'

// Good
const welcome = `Welcome ${user.name} ${user.lastName}!`
```

### Always use named exports

For simplicity and easy findings, export named variables instead of default exports.

```javascript
// Bad
export default MyComponent

// Good
export { MyComponent }
```

### Return fast whenever possible

In order to have cleaner and more understandable code, and also to avoid running unnecessary logic, try returning fast if certain conditions happen.

```javascript
// Bad
const formatUser = (user) => {
  const fullName = user ? getFullName(user) : ''
  const age = user ? getAge(user.birthDate) : ''
  const formattedUser = user ? `${fullName}, age: ${age}` : ''

  return formattedUser

}

// Good
const formatUser = (user) => {
  if (!user) return ''
  ...
}
```

### Use `map`, `filter` and `reduce`

Use `map`, `filter` and `reduce` to manipulate arrays instead of `for` loops or `forEach` method.

```javascript
// Bad
const admins = []

users.forEach(user => {
  if (user.type === 'ADMIN') admins.push(user)
})

// Good
const admins = users.filter(user => user.type === 'ADMIN')
```

### Try to avoid mutations as much as possible

Mutations makes code difficult to understand, test and debug. Changing already declared variables may lead to unintended side effects in other parts of the code.

Never mutate or re assign function parameters.

```javascript
// Bad
user.admin = true
user.type === 'ADMIN'

// Good
const admin = { ...user, admin: true, type: 'ADMIN' }
```

```javascript
// Bad
const makeUserAdmin = (user, options) => {
  if (!options) options = {}

  user.admin = true
  ...
}

// Good
const makeUserAdmin = (user, options) => {
  const defaultOptions = options || {}

  const admin = { ...user, admin }
}
```

### Use maps instead of `switch` statements

Using maps instead of `switch` statements will make the code more readable and performant. Maps have direct access while `switch` statements don't.

```javascript
// Bad
const getShiftColor = (shiftName) => {

  switch(shiftName) {
    case 'am':
      return lightBlue

    case 'pm':
      return blue

    case 'noc':
      return darkBlue
  }
}

// Good
enum ShiftColors {
  am = lightBlue,
  pm = blue,
  noc = darkBlue,
}

const getShiftColor = (shiftName) => ShiftColors[shiftName]
```

### Use ternary expressions to initialize variables

Instead of declaring a variable with `let` , initializing it, and the use an `if` to possibly change its value, use a one liner ternary expression to initialize it.

```javascript
// Bad
let tagText = text

if (!expanded) {
  tagText = text.substring(0, 5)
}

// Good
const tagText = expanded ? text : text.substring(0, 5)
```

### Handle errors gracefully and notify the user with meaningful messages

```javascript
// Bad
const createUser = async (email, password) {
  try {
    await api.createUser(email, password)
    toast('Success')
  } catch (error) {
    console.log(error)
    toast(error)
  }
}

// Good
const createUser = async (email, password) {
  try {
    await api.createUser(email, password)
    toast('Successfully created user')
  } catch (error) {
    console.log(error)
    toast('Failed to create user, please try again')
  }
}
```

### Always export at the end of the file

```javascript
// Bad
export const Component = () => { ... }

// Good
const Component = () => { ... }

export { Component }
```

### Order of imports

Separation of imports is ideal to easily visualize different types of imports. The order will be:

- node_modules
- absolute imports
- relative imports

```javascript
// Good
import React from 'react'
import { Button } from 'material-ui'

import { Modal } from 'components'

import userIcon from 'assets/icons/user.svg'

import api from './api'
import styles from './styles'
```
