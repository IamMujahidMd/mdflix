import Image from 'next/image'
import Herosection from './components/herosection'

export default function Home() {
  return (
    <>
      <Herosection title={"Watch your any movie for free!!!"} imageUrl={"/home.svg"} />
    </>
  )
}
