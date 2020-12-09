# MSDPal
MSDPal alumni community.

## Development plan: 
### Goal: 

Build a server-side rendering responsive web app for MSD faculties and alumni. 
With MSDPal, you can scan MSD news, find interested alumni, and send posts about recruitment, internship or everyday life. Our goal is to promote long-term interaction between MSD alumni, building our own network and sharing information in order to help each other.

### App Features: 

#### Basic Functions:
* Browse official news posted by the MSD faculties.
* Register as an alumni. Choose if you want to reveal some personal and placements info to others. It can strengthen the communication and help current students get help from alumni.
* Post blogs so every alumni can like and comment.
* (Optional) Send instant messages to whoever you want to talk.
* (Optional) Build iOS and Android apps with the same functions using react native.
#### Users Different Authority
* Authorization system ensure that different user have different access to functions of the app: Faculties as administrators can manage and delete users and see all the informations. Alumni can see other people’s public account info and posts. Visitors can only scan the news about MSD program. 
* Invitation Code will send manually to invite faculties and alumni to create account. Visitors cannot sign up.  
#### Responsive Web App
* The web layout will be responsive and optimized for the mobile device. The grid system will ensure that the user can get the best visual experience in both desktop and mobile device.
#### Server-side Rendering:
* React is a single-page web application framework so a lot of computations will happen in the client side (inside the browser). To improve the main page performance, we will use NextJS framework to render the main page inside the server and send directly to the client. 
* Since the main page is open for everyone (who don’t even have an account), the server-side rendered main page is also good for the search engine so more people will have the chance to know our MSD program.
#### Microservice Backend:
* Each service will run independently. Even if a service goes wrong, the other services will keep running properly. 
* Services will communicate with each other using standard messages and errors through the event bus. So each service can develop and test independently. We can add more features in the future easily without touching any code we have so far (We can even use a different language and a different framework to build new services). 
* Docker, Kubernetes and Scaffold will make sure that different services can deploy fast and isolated.

### Technical Stack:

* Frontend: React, JavaScript, NextJS, Material-UI, React Native (Optional)
* Backend: TypeScript, NodeJS, Express, MongoDB, Docker, Kubernetes, NATS, NextJS

### Detailed Plans: 

This is a challenging and real-world project. We understand that we are facing the probabilities that it will not be fully completed. So we are going to develop this app one service at a time. Even some services are not completed at the end, the rest functions will work as expected. The developing plan contains all basic features we want to implement. The optional features will continue to develop once we finish basic ones and publish the web app.
See next page for details.

![working-plan](https://github.com/XuefengX/capstone-msdpal/blob/master/img/working-plan.png?raw=true)

### MSDPal Pages Structure:

![page-structure](https://github.com/RachelD1102/capstone_msdpal/blob/main/public/img/page_structure.png?raw=true)

### Part of the Website Effect Image:
#### Landing Page

![landing-page](https://github.com/RachelD1102/capstone_msdpal/blob/main/public/img/LandingPage.png?raw=true)

#### Sign Up Page
![Sign-up-page](https://github.com/RachelD1102/capstone_msdpal/blob/main/public/img/sign-up.png?raw=true)

#### Sign In Page
![Sign-in-page](https://github.com/RachelD1102/capstone_msdpal/blob/main/public/img/sign-in.png?raw=true)

#### Admin Homepage
![admin-homepage](https://github.com/RachelD1102/capstone_msdpal/blob/main/public/img/admin-homepage.png?raw=true)

#### Admin Invitation Code Page
![admin-code](https://github.com/RachelD1102/capstone_msdpal/blob/main/public/img/admin-code.png?raw=true)

#### Admin Create News Page
![admin-create-news](https://github.com/RachelD1102/capstone_msdpal/blob/main/public/img/creat-news.png?raw=true)

#### User Homepage
![user-homepage](https://github.com/RachelD1102/capstone_msdpal/blob/main/public/img/user-homepage.png?raw=true)


## Instruction

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Since our website is not deployed to the cloud now, you will need some separate settings to use the full function, please contact us if you would like to try.
