import Kalender from "@/components/Kalender"

async function getData(){
  const res = await fetch('https://api.npoint.io/3ffc10b11b4dd82745be',{
    cache: 'no-store'
  })
  return res.json()
}

export default async function Home() {
  const events = await getData()
  return (<>
    <div>
      <div>
        <h1 className="text-center text-[64px] my-3 font-extrabold">THE <span className="text-primary">ROLLING STONES</span> EVENTS</h1>
        <p className="text-center px-60 mb-[30px]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias ipsam illo natus error nobis odit maxime similique repudiandae eligendi consequuntur, aut dolores soluta et praesentium beatae tenetur possimus officiis illum!</p>
        <Kalender events={events} />
      </div>
      <img className="fixed w-100 h-100 left-0 top-[50%] translate-y-[-50%] -z-10" src="/rolling-stones-logo.svg" alt="" />
      <img className="fixed w-100 h-100 left-[50%] bottom-0 translate-x-[-50%] -z-10" src="/headstock.webp" alt="" />
      <img className="fixed w-100 h-100 right-0 top-[50%] translate-y-[-50%] -z-10" src="/blob-group.svg" alt="" />
    </div>
  </>)
}