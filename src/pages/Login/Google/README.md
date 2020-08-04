# Google Auth

1. Create and configure a new project to get Google OAuth2 Key and Secret on [Google Developer Console](https://console.developers.google.com/)
<br>
<br>
**Frontend**
2. On Google login request, the auth2 library needs to be loaded from gapi and a GoogleAuth session needs to be initialized, by passing the Google OAuth client_id/key from step 1.
3. The method signIn on googleAuth needs to be called, which will open a new window where the user can select his google account / login with google credentials.
4. Through googleAuth you now have to retrieve the currentUser to get his id_token. This id_token needs to be sent to the Django backend.
<br>
<br>
**Backend**
5. The backend will verify the id_token and retrieve the needed data to get or create the user instance.
6. A JWT token will be created and sent to the frontend. 

Check backend template readme for more details.


## Good to know

- Google API is loaded via scripts import in index.html
- eslint will complain about this when in use. To ignore it, '/* global gapi */ needs to be set in the component where gapi is used
