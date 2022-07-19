import TypeWriterEffect from 'react-typewriter-effect';
import Logo from './avatar.svg'
function App() {
  return (
    <div className="font-terminal h-screen bg-slate-800 p-24 text-orange-500">
      <img src={Logo} alt="logo" className="w-24 mb-8 -mt-8 ml-[45%]" />
      <TypeWriterEffect
      textStyle={{
        fontSize: '1.5rem',
      }}
      startDelay={100}
      text="Hello I'm Youssef Michael a React JS Developer"
      typeSpeed={30}
      hideCursorAfterText={true}
      />
      <br />
      <TypeWriterEffect
      textStyle={{
        fontSize: '1.5rem',
      }}
      startDelay={2000}
      text="About Me"
      typeSpeed={30}
      hideCursorAfterText={true}
      />
      <TypeWriterEffect
      textStyle={{
        fontSize: '1.5rem',
      }}
      startDelay={2500}
      text="I'm a react js developer that creates outstanding websites with tools like ReactJS and Tailwind CSS, although my experience might be a bit basic but, I promise you the results will be massive."
      typeSpeed={30}
      hideCursorAfterText={true}
      />
      <br />
      <TypeWriterEffect
      textStyle={{
        fontSize: '1.5rem',
      }}
      startDelay={10000}
      text="Here are my projects https://github.com/Youssef-mic "
      typeSpeed={30}
      hideCursorAfterText={true}
      />
      <br />
      <TypeWriterEffect
      textStyle={{
        fontSize: '1.5rem',
      }}
      startDelay={11500}
      text="Contact Me"
      typeSpeed={30}
      hideCursorAfterText={true}
      />
      <TypeWriterEffect
      textStyle={{
        fontSize: '1.5rem',
      }}
      startDelay={12000}
      text="You can contact me on my email adress: ym262010@gmail.com"
      typeSpeed={30}
      hideCursorAfterText={true}
      />
      <br />
      <TypeWriterEffect
      textStyle={{
        fontSize: '1.5rem',
      }}
      startDelay={14000}
      text="Thank You 😉"
      typeSpeed={30}
      hideCursorAfterText={true}
      />
    </div>
  );
}

export default App;
