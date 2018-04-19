import Link from 'next/link'
import Systems from '../components/Systems.js'
import System from '../components/System.js'

const Index = (props) => (
  <div>
    <Systems systems={props.systems} />
  </div>
)

Index.getInitialProps = async function () {

  const objectOfSystems = await import('../src/systems.json')
  const arrayOfSystems = []

  // Minus 1 becasue there is some weird redundant object at the end
  for (var i = 0; i < Object.keys(objectOfSystems).length - 1; i++) {
    arrayOfSystems[i] = {
      system: {
        name: Object.values(objectOfSystems)[i].name,
        id: Object.keys(objectOfSystems)[i]
      }
    }
  }

  console.log(arrayOfSystems)

  return {
    systems: arrayOfSystems
  }
}

export default Index
