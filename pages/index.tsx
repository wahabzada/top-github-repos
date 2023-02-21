import { ReposContextProvider } from "state/repos/ReposContext"
import { DefaultLayout } from "layouts/DefaultLayout"
import { RepoLister } from "components/stateful/repos/RepoLister"
import { RepoSearch } from "components/stateful/repos/RepoSearch"

export default function Home() {
  return (
    <DefaultLayout>
      <ReposContextProvider>
        <RepoSearch />
        <RepoLister />
      </ReposContextProvider>
    </DefaultLayout>
  )
}
