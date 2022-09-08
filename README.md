# CMS Frontend

## Getting started

1. Clone this [GitHub repository](https://github.com/panosjapan7/headless-cms-wordpress)
2. In your terminal (while inside the root of your project folder) run **npm install** (you should see the folder ***node_modules*** created after installation completes).
3. Open the project with your IDE.
4. Create a **.env** file <ins>at the root of the project<ins>.
5. In .env, create a variable called **REACT_APP_API_URL** and give it the value "https://public-api.wordpress.com/rest/v1.1/sites/**your-wordpress-com-website-url"** (see **.env-example** file).
6. In your terminal (while inside the root of your project folder) run **npm start**.
7. You should now be able to see your WordPress.com content displayed on the React app.
8. Push your local project to a repository on GitHub
9. Create an account on [Vercel.com](https://vercel.com) (it's free) and log in.
10. Connect your GitHub account to Vercel so you can access your GitHub repositories from Vercel. 
11. In [Vercel's Overview page](https://vercel.com/dashboard), click the ***Add New...*** button and choose ***Project***.
12. In the ***Import Git Repository*** section in the next screen, find the GitHub repository of the project you pushed and click ***import***.
13. In the ***Configure Project*** section in the next screen, toggle the ***Environment Variables** to open.
14. Create an environment variable by adding **REACT_APP_API_URL** in the ***NAME*** field and the the url ( https://public-api.wordpress.com/rest/v1.1/sites/**your-wordpress-com-website-url** ) in the ***VALUE*** field.
15. Click the ***Deploy*** button.
16. Your React website should now be deployed online, showing the contents of your WordPress.com website.
17. If you want to create a new post, simply go to your WordPress.com website and create it via the WordPress editor. The new post will appear on your React app.
18. If you want to make changes to your React app, make the changes in your local React app project and push them to your GitHub repository. Vercel will automatically update the deployed React app with the new changes.
