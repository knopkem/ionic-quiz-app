import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Quiz from './pages/Quiz';
import Questions from './pages/Questions';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
        <IonRouterOutlet>
        <Route exact path="/quiz">
          <Quiz />
        </Route>

        <Route exact path="/questions">
          <Questions />
        </Route>
        <Route exact path="/">
          <Redirect to="/quiz" />
        </Route>
        </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
