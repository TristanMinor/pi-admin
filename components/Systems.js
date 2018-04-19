import Link from 'next/link'

const Systems = (props) => (
  <div>
    <select size="20">
      {props.systems.map(({system}) => (
        <Link key={system.id} as={`/system/${system.id}`} href={`/system?id=${system.id}`}>
          <option>{system.name}</option>
        </Link>
      ))}
    </select>
    <style jsx>{`
      select {
        height: 95vh;
        width: 100px;
      }
    `}</style>
  </div>
)

export default Systems
