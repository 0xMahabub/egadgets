import { useSettingStore } from '../../store';

export const ThemeSwitch = () => {
  const [darkMode, toggleDarkMode] = useSettingStore((s) => [
    s.darkMode,
    s.toggleDarkMode,
  ]);

  return (
    <>
      {darkMode === true ? (
        <> {document.body.setAttribute('data-theme', 'dark')} </>
      ) : (
        <>{document.body.setAttribute('data-theme', 'light')}</>
      )}
      <button
        className='theme-switch'
        onClick={() => {
          toggleDarkMode(); // for global state
        }}
      >
        {darkMode ? (
          <i className='bx bxs-moon'></i>
        ) : (
          <i className='bx bx-moon'></i>
        )}
      </button>
    </>
  );
};
