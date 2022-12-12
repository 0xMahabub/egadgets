import reactLogo from './assets/react.svg';
import './App.css';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useCounterStore } from './store';

const queryClient = new QueryClient();

function App() {
  const [count, increment] = useCounterStore((state) => [
    state.count,
    state.incre,
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <div className='App'>
        <div>
          <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className='card'>
          <button onClick={() => increment()}>count is {count}</button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
