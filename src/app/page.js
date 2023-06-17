import Image from 'next/image'
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <section className='section-0' id="top">
        <Image src={"/Logo.png"} width={500} height={500} className='logo' alt='logo'></Image>
        <div className='title'>
          <h1>Youssef Michael</h1>
          <h4>I'm a programmer who is <section className="animation">
            <div className="first">
              <div>young</div>
            </div>
            <div className="second">
              <div>practical</div>
            </div>
            <div className="third">
              <div>ambitios</div>
            </div>
          </section></h4>
        </div>
      </section>
      <section className="section-1">
        <h2 className='about'>About Me</h2>
        <p>I'm a 13 y/o developer in Syria, I started about 4 years ago, my goal is to create open-source, practical solutions for every day problems</p>
      </section>
      <section className="section-2">
        <h2 className='technologies'>Technologies</h2>
        <div className='container-0'>
          <div className='lang-container'>
            <Image src={"/icons8-c++(1).svg"} width={100} height={100} alt='C++'></Image>
            <h3>C++</h3>
          </div>
          <div className='lang-container'>
            <Image src={"/icons8-javascript.svg"} width={100} height={100} alt='JavaScript'></Image>
            <h3>JavaScript</h3>
          </div>
          <div className='lang-container'>
            <Image src={"/icons8-next.js.svg"} width={100} height={100} alt='NextJS'></Image>
            <h3>NextJS</h3>
          </div>
          <div className='lang-container'>
            <Image src={"/icons8-react-native(1).svg"} width={100} height={100} alt='ReactJS'></Image>
            <h3>ReactJS</h3>
          </div>
        </div>
      </section>
      <section className="section-3">
        <h2 className='contact'>Contact Me</h2>
        <div>
          <p>You can contact me through my <a href="mailto:ym262010@gmail.com">email</a></p>
          <p>Also, you can see my projects on <a href="https://github.com/youssef-mic">github</a></p>  
        </div>
      </section>
    </main>
  )
}
