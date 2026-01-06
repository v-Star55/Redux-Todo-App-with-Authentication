# Redux Todo App with Authentication

A modern Todo application built with **React**, **Redux Toolkit**, and **React Router**, featuring local storage persistence and protected routes.

## 🚀 Features

- **Redux Toolkit**: Efficient state management for both Todos and User Authentication.
- **Authentication**: Simple login system that persists user state across sessions using `localStorage`.
- **Protected Routes**: Secure navigation using React Router's `Outlet` and `Navigate` to prevent unauthorized access to the Home dashboard.
- **Todo Operations**: Create, toggle completion, and delete todos with a slick UI.
- **Styling**: Beautifully styled with modern CSS/Tailwind-like aesthetics and smooth transitions.

## 🛠️ Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **State Management**: [Redux Toolkit](https://redux-toolkit.js.org/)
- **Routing**: [React Router](https://reactrouter.com/)
- **Styling**: Vanilla CSS (Modern design)

## 📁 Project Structure

```text
src/
├── app/            # Redux Store configuration
├── auth/           # Login components
├── components/     # UI Components (Home, AddTodo, Todos, ProtectedRoute)
├── features/       # Redux Slices (authSlice, todoSlice)
└── App.jsx         # Routing and core layout
```

## ⚙️ How it Works

### Authentication Persistence
The `authSlice` is initialized by checking `localStorage` for a saved user session. When a user logs in or out, the `localStorage` is updated in sync with the Redux state.

### Protected Routes
The `ProtectedRoute` component wraps private paths. It checks the `isAuthenticated` flag from the Redux store; if false, it redirects the user to the `/login` page.

### State Management
- `todoSlice`: Handles the logic for adding, removing, and toggling todos.
- `authSlice`: Manages user authentication state and session persistence.

## ⚡ Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and navigate to the local server address.
