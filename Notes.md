# Refactoring for Cleanliness

## Lessons:

- Still need to pass in tokens for endpoints to work.

## Where I left off:

LAST ACTION: Refactored AccountInfo to use readonly inputs.

NEXT STEP: Work on change password button and component

BUG: None!

LAST SUCCESS: AccountInfo is getting all the data!

---

Check off using `&check;`

[ ] Refactor using semantic HTML tags for everything

## /Account

[ &check; ] Rename files for readability

[ ] Reformat using nested Routes

- &check; Account
  - AccountNav
  - AccountInfo
  - EditAccountInfoForm
  - EditPasswordForm
  - StripeConnect

---

---

---

## Basic App.js

- add functions as needed
- can the child component's handler be taken care of by App? Put it there instead

---

[ &check; ] fix the routes
[ &check; ] loggedInStateHandler

## /AddBook

---

[ &check; ] Rename

## /Auth

[ ] fire whenever logging in or out -> I think I need help on this

---

[ &check; ] Rename AuthContainer to OAuthContainer

[ &check; ] pass loggedInStateHandler to components

[ &check; ] AuthContainer

[ &check; ] OAuthContainer

[ &check; ] ManualAuthContainer

[ &check; ] Login

[ &check; ] Register

[ &check; ] delete Verify.js

- Logout Button Code:

  `<button className="logout-button" onClick={() => { localStorage.clear(); this.setState({ loggedIn: false }); }} > Logout </button>`

  - **OAuthContainer**

    [ &check; ] Take out conditional logic and make component just for OAuth stuff

  - **ManualAuthContainer**

    [ &check; ] Move OAuthContainer out

    [ ] Add conditional logic that renders based on logged in status

## /Footer

## /Header

[ ] Pass isLoggedIn to Logout via Headers

## /MyShelf

## /Search

## /Twilio

[ ] Rename so that names make sense