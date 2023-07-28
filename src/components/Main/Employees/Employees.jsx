import React from 'react'
import Cards from './Cards/Cards'
import useFetch from '../../../hooks/useFetch'
import Filters from './Filters/Filters'
import './Employees.css'

const Employees = () => {

    const employees = useFetch('http://192.168.36.135:9000/api/v1/employees')
    console.log(employees)

  return (
    <section>
        <div className="container-filter">
            <Filters />
        </div>
        <div className="container-cards">
            {
                employees?.map( employee => (
                    <Cards
                        key={employee.employeeId}
                        name={`${employee.firstName} ${employee.lastName}`}
                        urlImage={employee.urlImage}
                        position={employee.position.position}
                        team={employee.team.nameTeam}
                        model={`${employee.computer.brand} ${employee.computer.model}`}
                    />
                ))
            }
               
        </div>
    </section>
  )
}

export default Employees