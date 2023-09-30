import Image from 'next/image'


export default function Home() {
  return (
    <main >
      <header>
        <nav className="p-5"><a href="resume">Resume</a></nav>
      </header>
      <div className="flex min-h-screen flex-col items-center p-24 px-48">
       <h1 className="text-5xl font-serif pb-24">Kristerley Ndali</h1> 
       <p className="text-xl font-serif top">Hi,{"\n"} I'm a Computer Science student at Concordia University, and previously at the University of Ottawa. I'm currently working on 2 projects (yet to be published).
            one is a website that allows users to get help with exercises related to mobility and flexibility. The other is a browser extension allowing Concordia students to export their timetables.
       </p>
      </div>
    </main>
)
}
