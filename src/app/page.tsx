import Header from "@/components/header"
export default function Home() {
  return (
    <main className="relative flex h-screen flex-col md:flex-row">

      <section className='basis-full h-full overflow-hidden'>
        <Header />
        {/* <Board /> */}
      </section>

      <aside className='hidden md:block order-first'>
        {/* <Sidebar /> */}
      </aside>

    </main>
  )
}
