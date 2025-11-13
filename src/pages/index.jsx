import Datasheet from '@/components/Datasheet'
import Theory from '@/components/Theory'
import Documentation from '@/components/Documentation/index.js'
import Calculator from '@/components/Calculator/index.js'
import Schemes from '@/components/Schemes/index.js'

export const metadata = {
  title: 'Home',
}

export default () => {
  return (
    <>
      <div className="container">
        <Datasheet />
      </div>

      <Theory />

      <Documentation />

      <Calculator />

      <Schemes />

    </>
  )
}
