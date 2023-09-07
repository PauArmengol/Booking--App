
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch } from 'wouter';
import { Toaster } from "react-hot-toast";
import HotelList from './components/HotelList';
import HotelDetails from './components/HotelDetails';

const queryClient = new QueryClient();

function App() {

  return (
    <>
      <Toaster position="top-left" reverseOrder={false} />
      <QueryClientProvider client={new QueryClient()}>
        <Switch>
          <Route path="/" component={HotelList} />
          <Route path="/hotel/:id" component={HotelDetails} />
        </Switch>
      </QueryClientProvider>
        
    </>
  );
}

export default App;