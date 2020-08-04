# LinkedIn Auth

1. Create and configure a LinkedIn application to get a Client ID and Client Secret on [LinkedIn Developer tools](https://www.linkedin.com/developers/apps/) 
<br>
<br>
**Frontend**
2. On LinkedIn login request, your application redirects the user to LinkedIn's OAuth 2.0 authorization page, where the member authenticates and grants permission to your app. 
3. LinkedIn's redirects your user to your defined redirect url and adds an authorization code via URL params.
4. Check the state in the LinkedIn redirection URL. It should be the same that we sent. Else it could be a CSRF attack => the code will only continue to execute if both are equal.
5. Your frontend application sends a request to the Django backend with the authorization code.
<br>
<br>
**Backend**
5. The backend will verify the authorization code and retrieve the needed data to get or create the user instance.
6. A JWT token will be created and sent to the frontend.

Check backend template readme for more details.


## Good to know

- LinkedIn state is created randomly and stored in cookies in order to avoid making that string public to everyone
