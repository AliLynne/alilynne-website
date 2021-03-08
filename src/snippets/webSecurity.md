## Cross Site Scripting (XSS)

> More common than any other type of security threat

> allows an attacker to inject client-side scripts through the website into the browsers of other users.

- Reflected XSS
- Persistent XSS

> Data from POST & GET requests are most common source

To avoid: Remove or disable any markup that can potentially contain instructions to run the code. For HTML this includes elements, such as <script>, <object>, <embed>, and <link>.

## SQL Injection

```js
  const statement = "SELECT * FROM users WHERE name = '" + userName + "';"
```

This works just fine with a regular name, but goes really wrong when a malicious user injects a valid SQL statement.

```js
  const statement = SELECT * FROM users WHERE name = 'a';DROP TABLE users; SELECT * FROM userinfo WHERE 't' = 't';
```

To avoid: Escape all the characters in the user input that have a special meaning SQL


## Cross-Site Request Forgery (CSRF)

>This type of attack is best explained by example. John is a malicious user who knows that a particular site allows logged-in users to send money to a specified account using an HTTP POST request that includes the account name and an amount of money. John constructs a form that includes his bank details and an amount of money as hidden fields, and emails it to other site users (with the Submit button disguised as a link to a "get rich quick" site).

>If a user clicks the submit button, an HTTP POST request will be sent to the server containing the transaction details and any client-side cookies that the browser associated with the site (adding associated site cookies to requests is normal browser behavior). The server will check the cookies, and use them to determine whether or not the user is logged in and has permission to make the transaction.

To avoid: Server requires that POST requests include a user-specific site-generated secret. 

## Clickjacking

Displays a legititmate site but captures the login credentials into an invisible iframe 

To avoid: prevent site from being embedded in an iframe on another site by setting appropriate HTTP headers

## Denial of Service

Flooding a target site with fake requests in order to disrupt usage for legitimate users. 

To avoid: Generally deal with before or in the web server, generally not part of the web app itself.

## Directory Traversal

> In this attack, a malicious user attempts to access parts of the web server file system that they should not be able to access. This vulnerability occurs when the user is able to pass filenames that include file system navigation characters (for example, ../../). 

To avoid: sanitize input before using it

## File Inclusion
