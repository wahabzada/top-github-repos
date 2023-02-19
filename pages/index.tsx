import { DefaultLayout } from "layouts/DefaultLayout"

export default function Home() {
  return (
    <DefaultLayout>
      <div className="mx-auto max-w-4xl mt-20">
        <h1 className="text-3xl font-bold font-['Roboto'] sm:text-center sm:text-6xl mb-6">
          Sunday
        </h1>
        <p className="mb-10 text-lg text-gray-600 sm:text-center">
          A React boilerplate project for modern web apps
        </p>
      </div>
    </DefaultLayout>
  )
}
