import { ReposContextProvider } from "state/repos/ReposContext"
import { DefaultLayout } from "layouts/DefaultLayout"
import { RepoLister } from "components/stateful/repos/RepoLister"
import { RepoSearch } from "components/stateful/repos/RepoSearch"

export default function Home() {
  return (
    <DefaultLayout>
      <ReposContextProvider>
        <div className="mx-auto max-w-2xl my-5 space-y-10">
          <RepoSearch />
          <RepoLister />
        </div>
      </ReposContextProvider>
    </DefaultLayout>
  )
}
