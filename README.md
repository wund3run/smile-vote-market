# Smile Vote Market

A comprehensive dental marketplace platform that connects dental professionals with suppliers and products. Users can browse dental products, submit product requests, vote on popular items, and explore dental tourism packages.

## Features

- **Product Marketplace**: Browse and discover dental products across multiple categories
- **Voting System**: Community-driven product recommendations and trending items
- **Request System**: Submit requests for specific dental products and services
- **Dental Tourism**: Explore dental tourism packages combining treatment with travel
- **Advanced Filtering**: Filter and sort products by category, price, rating, and popularity
- **Responsive Design**: Optimized for desktop and mobile devices

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **UI Framework**: shadcn/ui components
- **Styling**: Tailwind CSS
- **Routing**: React Router Dom
- **State Management**: React Query (TanStack Query)
- **Icons**: Lucide React
- **Charts**: Recharts

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/wund3run/smile-vote-market.git
cd smile-vote-market
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

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run build:dev` - Build for development
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── Navbar.tsx      # Navigation component
│   ├── ProductCard.tsx # Product display component
│   └── ...
├── pages/              # Page components
│   ├── Index.tsx       # Main homepage
│   └── NotFound.tsx    # 404 page
├── data/               # Static data and mock data
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please open an issue on GitHub.
