#  Recipe Sharing Platform

A feature-rich, role-based *Recipe Sharing Web Application* built with *React.js*. This platform connects food enthusiasts to share, explore, and manage recipes while providing an integrated system for support inquiries. It features distinct user flows and a powerful Admin Management Panel.

---

##  Application Overview & Workflow

###  Public & Authentication Flow
- *Landing Page (Home.jsx):* Includes a global Header and Footer along with a *"Start Browsing"* call-to-action button.
- *Role Selection (SelectUserPage.jsx):* Clicking "Start Browsing" redirects users here to choose between *Admin* and *Regular User* paths.
- *Single-Page Authentication (Authentication.jsx & AdminAuthentication.jsx):* Sign-Up and Login forms are seamlessly handled within single-page components using *Conditional Rendering*.

---

###  Admin Management Side
Once authenticated via AdminAuthentication.jsx, admins are directed to the *Admin Dashboard* (AdminDashboard.jsx).

- *Dashboard Overview:* Displays analytical stat cards for *Total Users, **Total Recipes, and **Total Chats*.
- *User Management:* View registered user accounts directly on the dashboard with full control to remove accounts (Alert: "User successfully deleted").
- *Recipe Moderation (AdminRecipes.jsx):* 
  - Accessed by clicking the *Recipes Card* in the dashboard.
  - View all recipes posted across the platform along with the author's name.
  - Remove inappropriate recipes (Alert: "Recipe successfully deleted").
- *Support Chat Moderation (AdminChats.jsx):*
  - Accessed via the *View All Chats Card*.
  - View support inquiries submitted by users.
  - Delete resolved concerns (Alert: "Chat successfully deleted"). Deleting a concern automatically removes it from the respective user's chat panel.
  - Displays a *"Chat box is empty"* fallback message with an illustration when no chats are present.
- *Admin Session Control:* Clicking the *Login Out* button in the navbar triggers a "Logging Out" alert and redirects back to the main landing page.

---

###  Regular User Side
Upon logging in, regular users receive a personalized, dynamically updated Home Page UI (Welcome [User Name]).

- *Dynamic Hero Section:*
  - *Submit a Recipe Button:* Opens a submission modal.
  - *Submitted Recipe Button:* Navigates to personal submissions (MyRecipes.jsx).
  - *All Recipes Button:* Navigates to the community recipe feed (AllRecipes.jsx).
- *Home Page Content:* Showcases featured/random recipe cards and dynamic recipe image showcases to enhance UI aesthetics.
- *Recipe Submission Flow (Add recipe Modal):*
  - Features 5 key input fields: *User Name* (Read-Only / Auto-filled), *Recipe Name, **Preparation Time, **Ingredients, and **Category Selection, along with an **Image Upload* option.
  - *Validation & Alerts:* Shows "Fill the form completely" if any field is empty, or "Recipe added successfully" upon valid submission. Features a *Cancel* button to reset inputs.
- *My Recipes Management (MyRecipes.jsx):*
  - View all personal recipe submissions.
  - *Edit Modal (Edit.jsx):* Auto-fills existing details. Clicking *Save Changes* updates the entry, while *Cancel* reverts changes to default.
  - *Delete Action:* Removes personal recipes with a "Recipe successfully deleted" confirmation.
- *All Recipes Feed (AllRecipes.jsx):* Browse all user-contributed recipes on the platform with built-in real-time search functionality.
- *User Support System (UserChats.jsx):*
  - Access support inquiries via the navbar's *Chat Button*.
  - *Add Inquiry (AddChats.jsx Modal):* Triggered by clicking the *Plus (+)* button. Fill in concern details to notify admins (Alert: "Chat added successfully" / "Fill the form completely" if empty).
  - *Manage Inquiries:* Inquiries are rendered as individual cards with options to *Edit* (EditChat.jsx - Alert: "Chat successfully edited") or *Delete* (Alert: "Chat successfully deleted").

---

##  Tech Stack

- *Frontend Framework:* React.js (JSX)
- *Styling:* CSS3 / React Bootstrap & Conditional Layouts
- *State Management & Routing:* React Hooks / Context API / React Router DOM
- *Iconography:* Font Awesome Icons

---

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header.jsx                 # Navbar with dynamic branding, links, and logout controls
│   ├── Footer.jsx                 # Global layout footer with credits
│   ├── RecipeCard.jsx             # Card UI component for rendering recipe details and actions
│   ├── Edit.jsx                   # Modal for editing existing recipe submissions
│   └── EditChat.jsx               # Modal for updating user support chat messages
│   
├── pages/
│   ├── Home.jsx                   # Dynamic landing page adapting based on role & auth state
│   ├── SelectUserPage.jsx         # Role selection view (User vs Admin)
│   ├── Authentication.jsx         # User Auth page with conditional login/signup rendering
│   ├── AdminAuthentication.jsx    # Admin Auth page with conditional login/signup rendering
│   ├── AddChats.jsx                # Modal for submitting new concerns/chats to the admin
│   ├── AllRecipes.jsx             # Public recipe feed with real-time search
│   ├── MyRecipes.jsx              # Dashboard for viewing, editing, and deleting user recipes
│   ├── UserChats.jsx              # Interface for users to create and manage support inquiries
│   ├── AdminDashboard.jsx         # Main admin workspace for user metrics and management
│   ├── AdminRecipes.jsx           # Admin moderation view for deleting platform recipes
│   ├── AdminChats.jsx             # Admin support center for reviewing and purging resolved chats
│   └── PageNotFound.jsx           # Fallback page for handling invalid routes
│
├── App.jsx                        # Central Router & Route configuration
├── main.jsx                       # Application entry point
└── App.css                        # Global styling rules, ID/Class selectors, and layout designs                      


## Key Components Breakdown

Component                   Type                            Description & Functionality
Header.jsx                Component                 Navigation bar with dynamic links, platform branding, and session controls.
Footer.jsx                Component                 Global footer component providing platform summary, branding and social media links.
RecipeCard.jsx            Component                 Reusable UI card for rendering recipe images, names, timing, ingredients, and categories.
SelectUserPage.jsx          Page                    Entry portal for selecting access role (User or Admin).
Authentication.jsx          Page                    Single-page user auth using conditional rendering for Sign-Up and Login forms.
AdminAuthentication.jsx     Page                    Single-page admin auth handling login and registration logic.
Home.jsx                    Page                    Dynamic home view with customizable hero section, Quick Actions, and featured recipes.
AllRecipes.jsx              Page                    Global recipe gallery featuring live name/image search filtering.
MyRecipes.jsx               Page                    Personal dashboard listing submitted recipes with Edit and Delete options.
Edit.jsx                 Component/Modal            Form modal pre-filled with existing recipe data for easy updating.
UserChats.jsx               Page                    User inquiry log featuring an interactive + trigger for new support requests.
AddChats.jsx                Page/Modal              Input modal for sending concerns directly to the admin panel.
EditChat.jsx             Component/Modal            Form modal to update previously sent support inquiries.
AdminDashboard.jsx          Page                    Core admin hub displaying stat metrics and direct user deletion controls.
AdminRecipes.jsx            Page                    Admin moderation grid for inspecting and removing any user's recipe.
AdminChats.jsx              Page                    Admin support center for reviewing and deleting user concerns.
PageNotFound.jsx            Page                    Fallback component rendered when visiting undefined routes.