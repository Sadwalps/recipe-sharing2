#  Recipe Sharing Platform

A feature-rich Recipe Sharing Web Application built with *React.js*. This platform allows users to explore, share, edit, and manage their favorite recipes while enabling real-time chat/support inquiry submission to the administrator. It also features a dedicated Admin Panel for managing overall platform users, recipes, and user messages.

---

##  Core Features

###  User Side
- *Role Selection & Auth:* Dedicated role selection page (SelectUserPage.jsx) and seamless User Sign-Up/Login via Authentication.jsx.
- *Recipe Management:*
  - View all community-submitted recipes in AllRecipes.jsx.
  - Search recipes in real-time by recipe name.
  - View personalized submitted recipes under MyRecipes.jsx.
  - Add new recipes with image support.
  - Edit or Delete self-submitted recipes via modals (Edit.jsx).
- *Support & Inquiries:*
  - Dedicated Chat Interface (UserChats.jsx) to send concerns directly to the Admin.
  - Add (AddChat.jsx), edit (EditChat.jsx), or remove submitted chat inquiries.

###  Admin Side
- *Authentication:* Dedicated Admin Login & Registration flow via AdminAuthentication.jsx.
- *Admin Dashboard:* Central hub (AdminDashboard.jsx) visible upon successful admin authentication.
- *Content & Moderation:*
  - View all registered users and moderate overall platform activity.
  - View all user-submitted recipes across the platform and delete inappropriate posts (AdminRecipes.jsx).
  - View all submitted user chat inquiries/concerns with an option to purge/delete resolved chats (AdminChat.jsx).

---

##  Tech Stack

- *Frontend:* React.js (JSX)
- *Styling:* CSS3 / React Bootstrap
- *Routing & State:* React Router / Context API / State Hooks
- *Icons:* FontAwesome

---

##  Project Structure

```text
src/
├── components/
│   ├── Header.jsx                 # Navbar with brand name, navigation links, and logout controls
│   ├── Footer.jsx                 # Footer section with credits and layout design
│   ├── RecipeCard.jsx             # Reusable card component for displaying recipe details
│   ├── Edit.jsx                   # Modal and logic for editing submitted recipe details
│   └── EditChat.jsx               # Modal and logic for updating sent chat messages
│   
│
├── pages/
│   ├── Home.jsx                   # Landing page (adapts UI based on login state & user role)
│   ├── SelectUserPage.jsx         # Role selection page (Choose between Regular User & Admin)
│   ├── Authentication.jsx         # User Sign-Up and Login forms with validation logic
│   ├── AdminAuthentication.jsx    # Admin-specific Sign-Up and Login forms
|   ├── AddChat.jsx                # Modal and triggering button for adding new support chats
│   ├── AllRecipes.jsx             # Page listing all recipes with an integrated search input
│   ├── MyRecipes.jsx              # Personal dashboard displaying recipes added by the logged-in user
│   ├── UserChats.jsx              # User-facing chat interface to manage sent concerns
│   ├── AdminDashboard.jsx         # Main dashboard layout displayed upon Admin login
│   ├── AdminRecipes.jsx           # Admin view to manage and delete any recipe on the platform
│   ├── AdminChats.jsx              # Admin interface to view and delete user-submitted messages
│   └── PageNotFound.jsx           # 404 Error page for handling invalid URLs
│
├── App.jsx                        # Main Application Router & Route Layouts
└── main.jsx                       # React DOM Entry Point

### Key Components Breakdown   

ComponentTypeDescription & Functionality
Header.jsxComponentNavigation header featuring navigation links, user branding, and logout action.
Footer.jsxComponentGlobal footer layout displaying platform info and credits.
RecipeCard.jsxComponentReusable card UI used to render recipe images, titles, and action triggers.
SelectUserPage.jsxPageInitial route allowing users to choose their role (User or Admin).
Authentication.jsxPageHandles User registration and login forms along with authentication logic.
AdminAuthentication.jsxPageManages Admin-specific registration and login forms.
Home.jsxPagePrimary landing page; dynamically updates UI based on authentication status and user role.
AllRecipes.jsxPageMain feed displaying all user-submitted recipes with real-time search functionality.
MyRecipes.jsxPagePersonal user dashboard listing only recipes created by the current user.
Edit.jsxModalModal component housing form fields and logic to edit existing recipe details.
UserChats.jsxPageInterface for regular users to track and view sent concerns/support messages.
AddChat.jsxModalAction modal allowing users to post new inquiries/concerns to the Admin.
EditChat.jsxModalModal component enabling users to edit previously sent chat messages.
AdminDashboard.jsxPageCentral admin workspace displayed immediately after successful admin login.
AdminRecipes.jsxPageModeration panel giving the Admin full control to inspect and delete any recipe.
AdminChat.jsxPageAdmin support hub to view incoming user inquiries and clear resolved chats.
PageNotFound.jsxPageFallback 404 view rendered for invalid or missing URLs.