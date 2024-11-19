# **Hayroo: Dynamic eCommerce Platform**

Hayroo is a feature-rich eCommerce platform built using the MERN stack, designed to provide a seamless user experience with robust features for users and administrators.

---


## **Features**

### User Features
- Secure user registration and login with **JWT authentication**.
- Personalized dashboards for managing user profiles and orders.
- Responsive design optimized for all device sizes.

### Admin Features
- Role-based access control for managing user privileges.
- Admin panel with tools for user management, product handling, and real-time analytics.

### Performance Enhancements
- **Lazy Loading**: Improves performance by loading assets only when needed.
- **Code Splitting**: Reduces load time for a faster user experience.

---

## **Tech Stack**
- **Frontend**: React.js, Bootstrap  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB Atlas  
- **Deployment**: Heroku and MongoDB Atlas  

---

## **Project Setup**

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14+)
- **MongoDB Atlas** account
- **Heroku CLI** (if deploying)

---
- ****Project Screenshort**
![Project Screenshot](https://github.com/almahmudpias/Hayroo-A-Modern-eCommerce-Website/blob/main/Screenshot%20(128)%20(1).png)
![Project Screenshot](https://github.com/almahmudpias/Hayroo-A-Modern-eCommerce-Website/blob/main/Screenshot%20(129)%20(1).png)
![Project Screenshot](https://github.com/almahmudpias/Hayroo-A-Modern-eCommerce-Website/blob/main/Screenshot%20(130).png)
![Project Screenshot](https://github.com/almahmudpias/Hayroo-A-Modern-eCommerce-Website/blob/main/Screenshot%20(131).png)
![Project Screenshot](https://github.com/almahmudpias/Hayroo-A-Modern-eCommerce-Website/blob/main/Screenshot%20(134).png)
![Project Screenshot](https://github.com/almahmudpias/Hayroo-A-Modern-eCommerce-Website/blob/main/Screenshot%20(138)%20(1)%20(1).png)
![Project Screenshot](https://github.com/almahmudpias/Hayroo-A-Modern-eCommerce-Website/blob/main/Screenshot%20(120).png)
![Project Screenshot](https://github.com/almahmudpias/Hayroo-A-Modern-eCommerce-Website/blob/main/Screenshot%20(123).png)
![Project Screenshot](https://github.com/almahmudpias/Hayroo-A-Modern-eCommerce-Website/blob/main/Screenshot%20(126)%20(1)%20(1).png)
- 
**how to run the project**

1. open the terminal and run the command
```
cd server
```
2. for install the dependencies run
```
npm install
```
3. then add a dotenv file to the server folder and write as like 

```
DB_USER = 'your user name'
DB_PASSWORD = 'your user pass'
DB_DATABASE = 'your database name'
DB_HOST = 'your host name'

```
write as your own for log in as admin
```
ADMIN_NAME = 'your admin name'
ADMIN_EMAIL= 'your admin email '
ADMIN_PASSWORD = 'your admin pass'

```
4. after that run the command for connect the server to your local sql server
```
npm run dev
```

5. after succesfully connect the server you go to frontend folder and open index.html and start the live server to see frontend UI


Note that if you face any error after run npm run dev
please run a command 
```
npm run migrate:undo
```



## Author

- Facebook - [@A. Al Mahmud Pias](https://www.facebook.com/pias.al.mahmud)
- LinkedIn [@Abdullah Al Mahmud Pias](https://www.linkedin.com/in/almahmudpias/)

## Acknowledgments

I would be glad if you can leave out some suggestion on how I can improve my code.
