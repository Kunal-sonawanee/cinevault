# 🎬 CineVault

**Your Ultimate Movie Companion**

A modern, feature-rich movie discovery application built with React.js that provides an immersive experience for movie enthusiasts to explore, filter, and manage their favorite films.

![CineVault Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![CSS3](https://img.shields.io/badge/CSS3-Modern-orange?style=for-the-badge&logo=css3)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript)

## ✨ Features

### 🎨 **Modern UI/UX Design**
- Beautiful gradient backgrounds with glass morphism effects
- Smooth animations and transitions
- Responsive design for all devices (mobile, tablet, desktop)
- Clean and intuitive user interface

### 🌓 **Dark/Light Theme Toggle**
- Seamless theme switching with persistent storage
- Automatic theme preference saving
- Eye-friendly dark mode for comfortable viewing

### 🔍 **Advanced Search & Filtering**
- **Smart Search**: Search by movie title, genre, or director
- **Genre Filtering**: Filter movies by specific genres
- **Country Filtering**: Discover movies from different countries
- **Rating Filter**: Find movies above your preferred rating
- **Sorting Options**: Sort by name, year, or rating
- **Favorites Filter**: View only your favorite movies

### ❤️ **Favorites Management**
- Add/remove movies from favorites with heart animations
- Persistent favorites storage using localStorage
- Quick favorites counter in the stats bar
- Filter to show only favorite movies

### 🎭 **Movie Details Modal**
- Detailed movie information including:
  - High-quality movie posters
  - Complete synopsis and descriptions
  - Cast and crew information
  - Release year, duration, and ratings
  - Director and country information
- **Trailer Integration**: Watch movie trailers directly
- **Interactive Elements**: Smooth modal animations

### 📊 **Smart Statistics**
- Real-time movie count based on current filters
- Favorites counter
- Dynamic stats bar with filtering information

### 🎯 **Enhanced Movie Database**
- Rich movie data including:
  - Popular Bollywood and Hollywood movies
  - Detailed cast and crew information
  - Movie ratings and reviews
  - Trailer links for most movies
  - High-quality poster images

## 🚀 Live Demo

Visit the live application: [CineVault Live](https://kunal-sonawanee.github.io/cinevault)

## 📱 Screenshots

### Desktop View
![Desktop View](https://via.placeholder.com/800x600/667eea/white?text=CineVault+Desktop+View)

### Mobile View
![Mobile View](https://via.placeholder.com/400x800/764ba2/white?text=CineVault+Mobile+View)

### Dark Mode
![Dark Mode](https://via.placeholder.com/800x600/0f0f23/white?text=CineVault+Dark+Mode)

## 🛠️ Technologies Used

- **Frontend**: React.js (Class Components)
- **Styling**: CSS3 with modern features
  - CSS Grid & Flexbox
  - CSS Animations & Transitions
  - Backdrop Filters & Glass Morphism
  - Custom Properties (CSS Variables)
- **State Management**: React State & localStorage
- **Icons**: Emoji icons for better cross-platform compatibility
- **Responsive Design**: Mobile-first approach

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Kunal-sonawanee/cinevault.git
   cd cinevault
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the application.

## 🏗️ Project Structure

```
cinevault/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── App.js              # Main application component
│   │   ├── searchbox.js        # Search functionality
│   │   ├── filterpanel.js      # Advanced filtering
│   │   ├── moviecard.js        # Individual movie card
│   │   ├── moviecardlist.js    # Movie grid layout
│   │   └── moviemodal.js       # Movie details modal
│   ├── styles/
│   │   ├── App.css
│   │   ├── searchbox.css
│   │   ├── filterpanel.css
│   │   ├── moviecard.css
│   │   ├── moviecardlist.css
│   │   └── moviemodal.css
│   ├── data/
│   │   └── movies.js           # Movie database
│   ├── index.js                # Application entry point
│   └── index.css               # Global styles
├── package.json
└── README.md
```

## 🎮 Usage

### Basic Operations
1. **Browse Movies**: Scroll through the movie collection
2. **Search**: Use the search bar to find specific movies
3. **Filter**: Apply filters to narrow down your search
4. **View Details**: Click on any movie card to see detailed information
5. **Add to Favorites**: Click the heart icon to save movies
6. **Switch Theme**: Use the theme toggle in the header

### Advanced Features
- **Multiple Filters**: Combine search, genre, country, and rating filters
- **Sort Options**: Change sorting to find movies by different criteria
- **Favorites Mode**: Toggle to view only your favorite movies
- **Responsive Design**: Enjoy the app on any device size

## 🔧 Customization

### Adding New Movies
Edit the `src/movies.js` file to add new movies:

```javascript
{
  id: 11,
  name: 'Your Movie Name',
  genre: 'Action',
  country: 'USA',
  releaseYear: 2024,
  rating: 8.5,
  duration: '120 min',
  director: 'Director Name',
  cast: ['Actor 1', 'Actor 2'],
  description: 'Movie description...',
  bannerUrl: 'poster-image-url',
  trailerUrl: 'trailer-youtube-url'
}
```

### Customizing Themes
Modify the CSS custom properties in `src/index.css` to change the color scheme.

## 🌟 Key Features Breakdown

### 🎨 UI Components
- **Glassmorphism Design**: Modern glass effect with backdrop filters
- **Smooth Animations**: CSS transitions and keyframe animations
- **Responsive Grid**: Auto-adjusting movie grid layout
- **Interactive Elements**: Hover effects and button animations

### 🔍 Search & Filter System
- **Multi-criteria Search**: Title, genre, and director search
- **Advanced Filters**: Genre, country, rating, and favorites
- **Real-time Updates**: Instant filtering without page reload
- **Smart Sorting**: Multiple sorting options with smooth transitions

### 💾 Data Management
- **Local Storage**: Persistent favorites and theme preferences
- **State Management**: Efficient React state handling
- **Dynamic Updates**: Real-time stats and counter updates

## 🚀 Performance Features

- **Lazy Loading**: Images load efficiently
- **Optimized Rendering**: Efficient React component updates
- **Smooth Animations**: Hardware-accelerated CSS animations
- **Responsive Images**: Optimized for different screen sizes

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Future Enhancements

- [ ] Integration with external movie APIs (TMDB, OMDB)
- [ ] User authentication and personal profiles
- [ ] Movie reviews and ratings system
- [ ] Social sharing capabilities
- [ ] Watchlist functionality
- [ ] Movie recommendations engine
- [ ] Advanced search with multiple filters
- [ ] Offline support with service workers

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Kunal Sonawane**
- GitHub: [@Kunal-sonawanee](https://github.com/Kunal-sonawanee)
- Email: [your.email@example.com](mailto:your.email@example.com)

## 🙏 Acknowledgments

- Movie data and images from various sources
- React.js community for excellent documentation
- CSS animation inspiration from modern web design trends
- Font families from Google Fonts

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/Kunal-sonawanee/cinevault?style=social)
![GitHub forks](https://img.shields.io/github/forks/Kunal-sonawanee/cinevault?style=social)
![GitHub issues](https://img.shields.io/github/issues/Kunal-sonawanee/cinevault)
![GitHub license](https://img.shields.io/github/license/Kunal-sonawanee/cinevault)

---

⭐ **Don't forget to star this repository if you found it helpful!**

Built with ❤️ by [Kunal Sonawane](https://github.com/Kunal-sonawanee)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
