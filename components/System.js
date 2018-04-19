const System = (props) => (
  <form>
    <input type="text" value={`${props.system.name}`}/>
    <p>{props.system.id}</p>
  </form>
)

export default System
