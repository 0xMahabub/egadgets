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
      <div className='w-[60%] min-w-[540px] mt-[200px] mx-auto bg-white py-16 px-4'>
        <div className='flex justify-center gap-5 items-start'>
          <a href='https://vitejs.dev' target='_blank' rel='noreferrer'>
            <img src='/vite.svg' className='logo w-12 h-12' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank' rel='noreferrer'>
            <img
              src={reactLogo}
              className='logo react w-12 h-12'
              alt='React logo'
            />
          </a>
        </div>
        <h1 className='text-2xl text-center py-6 text-gray-600 font-bold'>
          Vite + React
        </h1>
        <div className='card text-gray-500'>
          <button
            className='py-3 px-5 mb-4 bg-blue-500 text-white rounded-md mx-auto flex'
            onClick={() => increment()}
          >
            count is {count}
          </button>
          <p className='block text-center'>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
        <p className='text-gray-400 block text-center'>
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
