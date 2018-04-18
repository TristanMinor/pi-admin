import Link from 'next/link'

const Index = (props) => (
  <div>
    <select size="20">
        <Link as={`/system/_yxf8pjwlhx9`} href={`/system?id=_yxf8pjwlhx9`}>
          <option>{props.systems._yxf8pjwlhx9.name}</option>
        </Link>
        <Link as={`/system/_ggghpez789b`} href={`/system?id=_ggghpez789b`}>
          <option>{props.systems._ggghpez789b.name}</option>
        </Link>
    </select>
    <style jsx>{`
      select {
        height: 95vh;
        width: 100px;
      }
    `}</style>
  </div>
)

Index.getInitialProps = async function () {

  let data = await import('../src/systems.json')
  console.log(data);

  return {
    systems: data
  }
}


export default Index
