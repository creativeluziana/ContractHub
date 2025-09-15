# SaaS Contracts Management Dashboard

A modern, responsive web application for managing and analyzing business contracts with AI-powered insights and risk assessment.

## 🚀 Features

### Authentication
- **Mock Authentication**: Simple login with any username and password "test123"
- **JWT Token Storage**: Secure token management using localStorage
- **Protected Routes**: Automatic redirection for unauthenticated users

### Contract Management
- **Contract Dashboard**: Comprehensive table view with search, filtering, and pagination
- **Contract Details**: Detailed view with metadata, clauses, and AI insights
- **Upload System**: Drag & drop file upload with progress tracking
- **Status Management**: Track Active, Expired, and Renewal Due contracts
- **Risk Assessment**: Visual risk indicators (Low, Medium, High)

### AI-Powered Insights
- **Smart Analysis**: AI-generated contract insights and recommendations
- **Risk Detection**: Automated risk identification with severity levels
- **Evidence Extraction**: Document snippets with relevance scoring
- **Confidence Metrics**: AI confidence scores for all analyses

### User Interface
- **Modern Design**: Clean, professional SaaS dashboard interface
- **Responsive Layout**: Optimized for desktop and mobile devices
- **Interactive Components**: Smooth animations and transitions
- **Accessibility**: Built with accessibility best practices

## 🛠 Tech Stack

### Frontend
- **React 18** - Modern functional components with hooks
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing

### Styling
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Accessible UI components
- **Heroicons** - Beautiful SVG icons

### State Management
- **React Context API** - Global state management
- **Custom Hooks** - Reusable stateful logic

### Development
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Static type checking

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Layout components (Sidebar, Topbar, etc.)
│   ├── ProtectedRoute.tsx
│   └── UploadModal.tsx
├── context/             # React Context providers
│   └── AuthContext.tsx
├── pages/               # Page components
│   ├── LoginPage.tsx
│   ├── ContractsDashboard.tsx
│   ├── ContractDetail.tsx
│   ├── InsightsPage.tsx
│   ├── ReportsPage.tsx
│   └── SettingsPage.tsx
├── types/               # TypeScript type definitions
│   └── index.ts
├── assets/              # Static assets
├── App.tsx              # Main application component
├── main.tsx             # Application entry point
└── index.css            # Global styles and Tailwind imports

public/
└── contracts.json       # Mock contract data
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd contract-management-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory, ready for deployment.

## 🔐 Authentication

The application uses mock authentication for demonstration purposes:

- **Username**: Any value (e.g., "admin", "user", "demo")
- **Password**: Must be exactly "test123"
- **Session**: Stored in localStorage as a mock JWT token

## 📊 Mock Data

The application includes sample contract data in `public/contracts.json` with:

- **3 Sample Contracts**: MSA, Network Services Agreement, and NDA
- **AI Insights**: Risk assessments and recommendations
- **Clauses**: Key contract terms with confidence scores
- **Evidence**: Document snippets with relevance ratings

## 🎨 Design System

### Colors
- **Primary**: #1E40AF (Blue)
- **Secondary**: #10B981 (Green)
- **Danger**: #DC2626 (Red)
- **Warning**: #F59E0B (Yellow)
- **Neutral**: #F9FAFB (Light Gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Buttons**: Consistent styling with hover states
- **Forms**: Accessible form controls with validation
- **Cards**: Clean card layouts for content organization
- **Tables**: Responsive data tables with sorting and filtering

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full sidebar navigation and multi-column layouts
- **Tablet**: Collapsible sidebar with touch-friendly interactions
- **Mobile**: Stacked layouts with mobile-optimized navigation

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your GitHub repository to Vercel**
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

3. **Deploy**: Vercel will automatically deploy on every push to main

### Netlify

1. **Connect your GitHub repository to Netlify**
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`

3. **Deploy**: Netlify will automatically deploy on every push to main

## 🔧 Configuration

### Environment Variables
No environment variables are required for the basic setup. The application uses mock data and authentication.

### Customization
- **Colors**: Update `tailwind.config.js` to modify the color scheme
- **Mock Data**: Edit `public/contracts.json` to add more sample contracts
- **Authentication**: Modify `src/context/AuthContext.tsx` for real authentication

## 🧪 Testing

The application is built with testing in mind. To add tests:

1. **Install testing dependencies**:
   ```bash
   npm install --save-dev @testing-library/react @testing-library/jest-dom vitest
   ```

2. **Create test files** in the `src` directory with `.test.tsx` extension

3. **Run tests**:
   ```bash
   npm run test
   ```

## 📈 Future Enhancements

### Planned Features
- **Real Authentication**: Integration with OAuth providers
- **Backend API**: RESTful API for contract management
- **Advanced Analytics**: Charts and visualizations for insights
- **Document Processing**: Real PDF/DOC parsing and analysis
- **Notifications**: Email and in-app notifications for renewals
- **Export Features**: PDF reports and data export capabilities
- **User Management**: Multi-user support with role-based access
- **API Integration**: Connect with external contract management systems

### Technical Improvements
- **State Management**: Migrate to Redux Toolkit for complex state
- **Testing**: Comprehensive unit and integration tests
- **Performance**: Code splitting and lazy loading
- **Accessibility**: Enhanced ARIA support and keyboard navigation
- **Internationalization**: Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing framework
- **Tailwind CSS** - For the utility-first CSS framework
- **Headless UI** - For accessible UI components
- **Heroicons** - For the beautiful icon set
- **Vite** - For the fast build tool

## 📞 Support

For support, email support@contractmanagement.com or create an issue in the repository.

---

**Built with ❤️ using React, TypeScript, and Tailwind CSS**