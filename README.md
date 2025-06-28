# 🛒 GroceryCart - Serverless Online Grocery Store

**GroceryCart** is a fully functional online grocery store web application built using **React** for the frontend and **AWS serverless services** for the backend. It allows users to browse products, manage a shopping cart, sign in securely, and checkout orders with cloud-powered performance and reliability.

## 🌐 Live Demo
🔗 [View the Live Project](https://your-cloudfront-link.amazonaws.com)

---
![grocerycart ss 1](https://github.com/user-attachments/assets/e820f0f8-f067-4705-bc35-4d52a4d032c7)
![grocertcart ss 2](https://github.com/user-attachments/assets/8165abc0-ed57-4c80-868e-12301434bf0c)
![grocerycart ss 3](https://github.com/user-attachments/assets/b3f8d18e-2638-4974-b7de-673a3f11c895)


## 🔧 Tech Stack

### 🌐 Frontend
- **React** (with React Router and Context API)
- **Bootstrap** for UI styling
- **Auth Amplify based Integration** with **Amazon Cognito**

### ☁️ Backend (AWS Services)
| Service        | Purpose                                                                 |
|----------------|-------------------------------------------------------------------------|
| **Amazon Cognito** | User Authentication and Authorization                                 |
| **Amazon S3**      | Product image storage and React files         |
| **Amazon DynamoDB**| Product and order data storage (NoSQL)                               |
| **AWS Lambda**     | Serverless functions for backend logic (e.g., product , checkout)|
| **Amazon CloudFront** | Website hosting purpuse                            |
| **Amazon CloudWatch**| Monitoring logs and application-level metrics                      |

---

## ✨ Features

- ✅ User Signup/Login using **Cognito** (Authorization Code Grant Flow)
- ✅ Product browsing by product section
- ✅ Add/Remove items from Cart
- ✅ Checkout with shipping and payment details
- ✅ Admin panel to manage products using **DynamoDB**
- ✅ Product images stored/referenced via **S3**
- ✅ App cloud monitoring via **CloudWatch**
- ✅ Hosting via **CloudFront**

---

## 📁 Project Structure

📦 grocerycart/

┣ 📂 public/

┣ 📂 src/

┃ ┣ 📂 components/

┃ ┣ 📂 context/

┃ ┣ 📂 pages/

┃ ┣ 📂 routes/

┃ ┣ 📜 App.js

┃ ┣ 📜 index.js

┗ 📜 README.md


---

## 🚀 Deployment Flow

### 🔑 1. Authentication Setup with Amazon Cognito
- Created **User Pool** and **App Client** in Cognito
- Used **Authorization Code Grant** flow for secure login
- Integrated using `react-oidc-context` and `oidc-client-ts`

### 🗃️ 2. Product & Order Data with DynamoDB
- DynamoDB Table: `ProductsTable`
  - `id` (string, partition key)
  - `name` (string), `price` (number), `category` (string)
- Integrated via **AWS SDK v3** (`@aws-sdk/client-dynamodb`)

### 🖼️ 3. Image Uploads  via Amazon S3
- Images uploaded via admin or preloaded
- S3 used to store and serve product images

### 🧠 4. Business Logic via AWS Lambda
- Lambda functions created for:
  - Add/edit/delete product
  - Checkout handling
- Deployed via AWS Console or CLI

### 🌍 5. Frontend Deployment via CloudFront
- React app built using `npm run build`
- Static site hosted on **S3 bucket**

### 📊 6. Monitoring with CloudWatch
- Lambda logs and errors sent to **CloudWatch**
- Setup alerts and dashboards for observability

## ⚠️ Disclaimer

This project uses AWS for backend functionality. However, for security reasons, AWS configuration files and credentials are not included in this repository. The live demo is publicly accessible through CloudFront and demonstrates the functionality, but cloning this project will not include backend connectivity unless configured manually.

---


## 🧪 Running Locally

```bash
# Clone the repository
git clone https://github.com/your-username/grocerycart.git
cd grocerycart

# Install dependencies
npm install

# Start the app locally
npm start

---






