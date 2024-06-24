import LeftPanel from '@/components/home/left-panel'

export default function Home() {
  return (
    <main className="m-5">
      <div className="mx-auto flex h-[calc(100vh-50px)] max-w-[1700px] overflow-y-hidden bg-left-panel">
        {/* Green background decorator for Light Mode */}
        <div className="fixed left-0 top-0 -z-30 h-36 w-full bg-green-primary dark:bg-transparent" />
        <LeftPanel />
      </div>
    </main>
  )
}
