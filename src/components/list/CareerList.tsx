import Image from 'next/image'
import './careerList.scss'

import data from '../../../db.json'

const CareerList = () => {
  const careerList = data.career

  return (
    <div className="career-wrap">
      <ul>
        {careerList.map((company, i) => {
          return (
            <li key={i} className="company-wrap">
              <Image
                src={company.company_img}
                alt={company.id}
                width={120}
                height={120}
                className="company-img"
                style={{ objectFit: 'contain' }}
              />
              <div className="company-info">
                <p className="name">{company.company_name}</p>
                <p className="team">{company.company_affiliated_team}</p>
                <p className="work">{company.company_work}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CareerList
