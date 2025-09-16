# ContractHub - Contract Management System

## 🚀 Live Demo

**🌐 [View Live Application](https://contract-hub-five.vercel.app/login)**

A modern, responsive contract management application built with React, TypeScript, and Tailwind CSS. This application provides a comprehensive solution for managing contracts with AI-powered insights, analytics, and document upload capabilities.

## 🚀 Features

### Core Functionality
- **Contract Portfolio Management**: View, manage, and track all your contracts in one place
- **AI-Powered Analytics**: Advanced insights and performance metrics for your contract portfolio
- **Document Upload**: Upload and manage contract documents with drag-and-drop functionality
- **Risk Assessment**: Automated risk scoring and categorization
- **Renewal Tracking**: Monitor upcoming contract renewals and deadlines
- **Search & Filtering**: Advanced search and filtering capabilities

### User Interface
- **Responsive Design**: Fully responsive design that works on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with smooth animations
- **Dark/Light Theme**: Elegant design with proper contrast and accessibility
- **Mobile-First**: Optimized for mobile devices with touch-friendly interactions

### Technical Features
- **Real-time Updates**: Live updates using React Context API
- **Local Storage**: Persistent data storage for offline functionality
- **Form Validation**: Comprehensive form validation with user feedback
- **File Upload**: PDF document upload with progress tracking
- **Navigation**: Intuitive navigation with active state management

## 🛠️ Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **Icons**: Heroicons
- **State Management**: React Context API
- **Build Tool**: Vite
- **Package Manager**: npm

## 📦 Installation

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/creativeluziana/ContractHub.git
   cd ContractHub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

## 🎯 Usage

### Getting Started

1. **Login**
   - Use any username
   - Password: `test123`
   - The application will redirect you to the dashboard

2. **Dashboard Overview**
   - View contract statistics and key metrics
   - Access quick actions and recent contracts
   - Navigate to different sections using the sidebar

3. **Managing Contracts**
   - **View Contracts**: Browse all contracts in the portfolio
   - **Upload New Contract**: Use the upload form to add new contracts
   - **Search & Filter**: Use the search bar and filters to find specific contracts
   - **View Details**: Click on any contract to see detailed information

### Navigation

- **Contracts**: Main dashboard with contract portfolio
- **Insights**: Analytics and performance metrics
- **Reports**: Generate and export contract reports
- **Upload Contract**: Add new contracts to the system
- **Settings**: Manage account settings and preferences

### Uploading Contracts

1. Navigate to "Upload Contract" from the sidebar
2. Fill in the contract details:
   - Contract Name (required)
   - Parties Involved (required)
   - Contract Type (required)
   - Contract Value
   - Expiry Date (required)
   - Risk Level
   - Description
3. Upload a PDF document (optional)
4. Click "Upload Contract" to save

## 📱 Mobile Experience

The application is fully responsive and optimized for mobile devices:

- **Mobile Sidebar**: Collapsible navigation menu
- **Touch-Friendly**: All buttons and interactions are optimized for touch
- **Responsive Layout**: Content adapts to different screen sizes
- **Mobile Navigation**: Hamburger menu for easy navigation

## 🎨 Design System

### Color Palette
- **Primary**: Blue gradient (#3B82F6 to #1D4ED8)
- **Dark Theme**: Deep blue (#1E2129) for navigation and accents
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Danger**: Red (#EF4444)
- **Gray Scale**: Various shades for text and backgrounds

### Typography
- **Headings**: Light font weights for modern appearance
- **Body Text**: Clean, readable fonts
- **Responsive**: Font sizes adapt to screen size

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Forms**: Clean inputs with focus states
- **Navigation**: Smooth transitions and active states

## 🔧 Development

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout components (Sidebar, Topbar, etc.)
│   └── PageHeader.tsx  # Page header component
├── context/            # React Context providers
│   ├── AuthContext.tsx # Authentication context
│   └── ContractsContext.tsx # Contracts state management
├── pages/              # Page components
│   ├── ContractsDashboard.tsx
│   ├── UploadContractPage.tsx
│   ├── InsightsPage.tsx
│   ├── ReportsPage.tsx
│   ├── SettingsPage.tsx
│   └── LoginPage.tsx
├── types/              # TypeScript type definitions
└── App.tsx             # Main application component
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Adding New Features

1. **New Pages**: Add components to `src/pages/`
2. **New Components**: Add to `src/components/`
3. **State Management**: Use existing contexts or create new ones
4. **Styling**: Use Tailwind CSS classes and custom components

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Deploy automatically on push to main branch

**✅ Successfully Deployed**: [https://contract-hub-five.vercel.app/login](https://contract-hub-five.vercel.app/login)

### Deploy to Netlify
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. Deploy automatically on push to main branch

## 📄 API Integration

The application is designed to work with a backend API. Current implementation includes:

- **Mock Data**: Uses local JSON files for demonstration
- **Local Storage**: Persists data in browser storage
- **Context API**: Manages application state

To integrate with a real API:

1. Update the `ContractsContext.tsx` to use API calls
2. Replace mock data with actual API endpoints
3. Add proper error handling and loading states
4. Implement authentication with JWT tokens

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/creativeluziana/ContractHub/issues) page
2. Create a new issue with detailed information
3. Include steps to reproduce any bugs

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Heroicons for the beautiful icon set
- Vite for the fast build tool

---

**ContractHub** - Streamline your contract management with modern technology and intuitive design.