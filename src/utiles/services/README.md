This folder includes Axios. It is a promise-based HTTP Client for node.js and the browser.

In this folder create /config/publicRequest.ts file. In this file change base_url, content_type and some header of axios config after that create request and response interceptors and create request function for handling get, post request in project.

Creating modules folder for managing request for different section and pages in project. To this folder create vendorServices.ts file that call list of vendor using request function that explain above.
