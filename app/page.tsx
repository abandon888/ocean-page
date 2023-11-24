import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Image
        src={'/images/homepage-top-med.jpg'}
        alt="background"
        width={10}
        height={10}
        className="absolute object-cover w-full h-full -z-50"
      />
      <header className="flex flex-col items-center justify-center w-full h-full">
        <Image
          src={'/images/header-left.png'}
          alt="logo"
          width={10}
          height={10}
          className="w-32 h-32 ml-8"
        />
        <h1 className="text-6xl font-bold text-center text-white">
          Welcome to Next.js!
        </h1>
      </header>
    </main>
  )
}
