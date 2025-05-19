# Wishlist App

A modern, interactive wishlist application built with React that allows users to manage their desired items with categories, priorities, and search features.

![Wishlist App Screenshot](public\WishListApp.png)

## Features

- **Add Items**: Create wishlist items with name, category, and priority
- **Delete Items**: Remove items you no longer want
- **Categories**: Organize items by custom categories
- **Priority Levels**: Assign High, Medium, or Low priority to items
- **Filtering**: Filter items by category
- **Search**: Find items quickly with integrated search functionality
- **Responsive Design**: Works on desktop and mobile devices
- **Visual Feedback**: Animation effects when adding new items
- **Clean UI**: Modern, intuitive user interface

## How It Works

The Wishlist App provides a simple yet powerful interface for tracking items you desire. Each item contains:

- **Name**: Description of the desired item
- **Category**: Custom category (e.g., Electronics, Books, Clothing)
- **Priority**: High, Medium, or Low importance
- **Date Added**: Automatically tracked

The app includes interactive elements like:
- Color-coded priority badges
- Category filtering
- Real-time search
- Empty state messaging
- Item count summary

## Implementation Details

### Technologies Used

- React (with Hooks)
- Tailwind CSS for styling
- Lucide React for icons

### Key Components

- **Add Item Form**: Collapsible form for adding new items
- **Category Management**: Auto-populates suggestions from existing categories
- **Search & Filter Controls**: Top bar for item discovery
- **Item Cards**: Visual representation of wishlist items

### State Management

The app uses React's useState hook to manage:
- Form inputs (item name, category, priority)
- List of wishlist items
- Filter and search states
- UI states (form visibility, animations)

### Design Features

- Gradient background
- Card-based layout
- Responsive design for all screen sizes
- Subtle animations and transitions
- Color-coded priority indicators

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/wishlist-app.git
cd wishlist-app
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage Guide

1. **Adding Items**:
   - Click the "Add Item" button
   - Fill in the item name and category
   - Select priority level
   - Click "Add to Wishlist"

2. **Finding Items**:
   - Use the search bar to find items by name or category
   - Use the category filter dropdown to view items by category

3. **Removing Items**:
   - Click the trash icon on any item card to delete

## Future Enhancements

- Data persistence with local storage or backend integration
- Item editing functionality
- Sorting options (by date, priority, name)
- Sharing capabilities
- Dark mode theme

## License

MIT

## Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- UI inspiration from modern design systems