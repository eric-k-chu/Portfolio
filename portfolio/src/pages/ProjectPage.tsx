export function ProjectPage() {
  return (
    <div className="mx-auto mt-20 flex max-w-7xl justify-center gap-y-6 px-8">
      <ul className="fixed bottom-0 left-8 top-0 flex h-screen w-1 list-none flex-col rounded-full bg-dark-1 dark:bg-light-1">
        <li className="-ml-[6px] mb-20 flex w-20 items-center">
          <div className="h-4 w-4 scale-100 rounded-full bg-orange transition-transform hover:scale-110 hover:cursor-pointer dark:bg-blue" />
          <div className="flex flex-col pl-4">
            <h2 className="font-medium italic">Artus</h2>
            <h3 className="font-light">2023</h3>
          </div>
        </li>
        <li className="-ml-[6px] mb-20 flex w-20 items-center">
          <div className="h-4 w-4 scale-100 rounded-full bg-orange transition-transform hover:scale-110 hover:cursor-pointer dark:bg-blue" />
          <div className="flex flex-col pl-4">
            <h2 className="font-medium italic">Artus</h2>
            <h3 className="font-light">2023</h3>
          </div>
        </li>
      </ul>
    </div>
  );
}
