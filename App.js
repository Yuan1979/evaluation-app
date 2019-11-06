import { createStackNavigator, createAppContainer } from 'react-navigation';
import FrontFrame from './src/components/FrontPage'
import QuestionairePage from './src/components/Question'

const MainNavigator = createStackNavigator({
  Home: {screen: FrontFrame},
  Questionaire: {screen: QuestionairePage},
})

const App = createAppContainer(MainNavigator)

export default App