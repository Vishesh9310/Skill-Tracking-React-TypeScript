import {Link} from 'react-router-dom'

const Nav: React.FC = () => {
  return (
    <ul className='flex p-5 bg-cyan-300 justify-evenly text-xl'>
        <li>
            <Link to='/addskill'>Add Skill</Link>
        </li>
        <li>
            <Link to='/viewskill'>View Your Skills</Link>
        </li>
        <li>
            <Link to='/planskill'>Plan Your Week</Link>
        </li>
    </ul>
  )
}

export default Nav