import { ReposContextProvider } from "state/repos/ReposContext"
import { DefaultLayout } from "layouts/DefaultLayout"
import { ListRepos } from "components/stateful/repos/list/ListRepos"
import { SearchRepos } from "components/stateful/repos/search/SearchRepos"

export default function Home() {
  return (
    <DefaultLayout>
      <ReposContextProvider>
        <SearchRepos />
        <ListRepos />
      </ReposContextProvider>
    </DefaultLayout>
  )
}
