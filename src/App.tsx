import './App.css'

function SwitchTheme() {
  const theme = localStorage.getItem('theme')

  if (theme == 'dark') {
    localStorage.setItem('theme', 'light')
    document.documentElement.classList.remove('dark')
  } else {
    localStorage.setItem('theme', 'dark')
    document.documentElement.classList.add('dark');
  }

}

function App() {

  return (
    <div className='h-[600px] bg-white dark:bg-black'>
      <h1 className='bg-green-200 dark:bg-gray-200'>Hello World</h1>
      <button className='bg-blue-50' onClick={() => {SwitchTheme()}}> asdasd</button>
    </div>
  )
}

export default App
