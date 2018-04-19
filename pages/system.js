import Systems from '../components/Systems.js'
import System from '../components/System.js'

const PageSystem = (props) => (
  <div>
    <Systems systems={props.systems} />
    <System system={props.system}/>
  </div>
)

PageSystem.getInitialProps = async function (context) {

  // Get list of systems

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

  // Get selected system

  const id = context.query.id
  const objectSystem = objectOfSystems[id]
  objectSystem.id = id

  return {
    systems: arrayOfSystems,
    system: objectSystem
  }
}

export default PageSystem
