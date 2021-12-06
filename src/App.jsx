import './css/App.css';
import './css/WelcomeScreen.css';
import './css/form.css';
import './css/flex.css';
import './css/button.css';
import './css/utils.css';
import './css/HeroCard.css';
import './css/TeamPowerstats.css';
import './css/NewHero.css';
import './css/HeroSearch.css';
import './css/SocialNav.css';
import './css/HeroDetail.css';
import './css/TopNav.css';

import AppRoutes from './Routers/AppRoutes';
import AuthProvider from './auth/AuthProvider';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </div>
  );
}

export default App;
