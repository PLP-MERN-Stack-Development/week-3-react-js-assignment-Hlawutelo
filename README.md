
# React Tasks - Week 3: React.js, JSX, and Tailwind CSS

A comprehensive React application demonstrating modern front-end development practices including component architecture, state management, hooks usage, API integration, and responsive design with Tailwind CSS.

## 🚀 Features

### ✅ Task 1: Project Setup
- ✅ React application built with Vite
- ✅ Tailwind CSS configured and optimized
- ✅ Organized project structure (components, pages, hooks, contexts)
- ✅ React Router for navigation

### ✅ Task 2: Component Architecture
- ✅ **Button Component**: Multiple variants (primary, secondary, danger, ghost) with different sizes
- ✅ **Card Component**: Reusable container with hover effects
- ✅ **Navbar Component**: Responsive navigation with mobile menu
- ✅ **Footer Component**: Links and copyright information
- ✅ **Layout Component**: Consistent page structure
- ✅ All components use props for customization

### ✅ Task 3: State Management and Hooks
- ✅ **TaskManager Component** with full CRUD operations:
  - Add new tasks
  - Mark tasks as completed
  - Delete tasks
  - Filter tasks (All, Active, Completed)
- ✅ **React Hooks Implementation**:
  - `useState` for component state management
  - `useEffect` for side effects and lifecycle management
  - `useContext` for theme management (light/dark mode)
- ✅ **Custom Hooks**:
  - `useLocalStorage` for task persistence
  - `useApi` for data fetching with loading and error states

### ✅ Task 4: API Integration
- ✅ Data fetching from JSONPlaceholder API (posts and users)
- ✅ Loading states with skeleton placeholders
- ✅ Error handling and display
- ✅ Pagination implementation
- ✅ Search functionality to filter results
- ✅ User information integration

### ✅ Task 5: Styling with Tailwind CSS
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Dark/light theme switcher
- ✅ Modern design system with consistent spacing and typography
- ✅ Smooth animations and transitions
- ✅ Gradient backgrounds and hover effects

## 🛠️ Technologies Used

- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **React Router** for navigation
- **Lucide React** for icons
- **Context API** for state management
- **Custom Hooks** for reusable logic

## 📱 Responsive Design

The application is fully responsive and optimized for:
- 📱 **Mobile** (320px+)
- 📱 **Tablet** (768px+)
- 💻 **Desktop** (1024px+)

## 🎨 Theme Support

- 🌞 **Light Mode**: Clean, bright interface
- 🌙 **Dark Mode**: Easy on the eyes for low-light usage
- 🔄 **Theme Persistence**: Remembers user preference

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd react-tasks
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx      # Button with variants
│   ├── Card.tsx        # Card container
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   ├── Layout.tsx      # Layout wrapper
│   ├── Hero.tsx        # Hero section
│   ├── TaskManager.tsx # Task management
│   └── ApiDemo.tsx     # API demonstration
├── contexts/           # React contexts
│   └── ThemeContext.tsx # Theme management
├── hooks/              # Custom hooks
│   ├── useLocalStorage.ts # Local storage hook
│   └── useApi.ts       # API fetching hook
├── pages/              # Page components
│   ├── Index.tsx       # Home page
│   └── NotFound.tsx    # 404 page
├── lib/                # Utilities
│   └── utils.ts        # Helper functions
└── App.tsx             # Root component
```

## 🔧 Custom Hooks

### useLocalStorage
- Persists data to localStorage
- Handles JSON serialization/deserialization
- Syncs across browser tabs
- Error handling for storage issues

### useApi
- Handles API requests with proper loading states
- Error management and reporting
- TypeScript generic support for type safety
- Automatic cleanup and memory management

## 📊 Component Features

### TaskManager
- ✅ Add new tasks with Enter key support
- ✅ Toggle task completion status
- ✅ Delete tasks with confirmation
- ✅ Filter by status (All, Active, Completed)
- ✅ Task statistics display
- ✅ Local storage persistence

### ApiDemo
- 📊 Displays posts from JSONPlaceholder API
- 🔍 Real-time search functionality
- 📄 Pagination with page navigation
- 👤 User integration showing post authors
- ⏳ Loading skeletons for better UX
- ❌ Error handling and display

## 🎯 Learning Outcomes

This project demonstrates:
- Modern React development patterns
- Component composition and reusability
- State management with hooks and context
- API integration best practices
- Responsive design principles
- TypeScript for type safety
- Performance optimization techniques

## 📝 License

This project is created for educational purposes as part of a React.js learning curriculum.

## 🤝 Contributing

This is a learning project, but suggestions and improvements are welcome!

---

Built with ❤️ for learning React.js, JSX, and Tailwind CSS
