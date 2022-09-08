# CMS Frontend

## Getting started

1. Clone this [GitHub repository](https://github.com/panosjapan7/headless-cms-wordpress)
2. In your terminal (while inside the root of your project folder) run **npm install**
3. Create a **.env** file <ins>at the root of the project<ins>
4. In .env, create a variable called **REACT_APP_API_URL** and give it the value https://public-api.wordpress.com/rest/v1.1/sites/**your-wordpress-com-website-url** (see **.env-example** file)
5. In your terminal (while inside the root of your project folder) run **npm start**
6. You should now be able to see your WordPress.com content displayed on the React app.
7. Push your local project to a repository on GitHub
8. Create an account on [Vercel.com](vercel.com) (it's free) and log in.
9. Connect your GitHub account to Vercel so you can access your GitHub repositories from Vercel. 
10. In [Vercel's Overview page](https://vercel.com/dashboard), click the ***Add New...*** button and choose ***Project***.
11. In the ***Import Git Repository*** section, find the GitHub repository of the project you pushed and click ***import***.
12. In the ***Configure Project*** section in the next screen, toggle the ***Environment Variables** to open.
13. Create an envirnment variable by adding **REACT_APP_API_URL** in the ***NAME*** field and the the url (https://public-api.wordpress.com/rest/v1.1/sites/**your-wordpress-com-website-url**) in the ***VALUE*** field.
14. Click the ***Deploy*** button.
15. Your React website should now be deployed online, showing the contents of your WordPress.com website.
16. If you want to create a new post, simply go to your WordPress.com and create it there. The new post will appear on your React app.
