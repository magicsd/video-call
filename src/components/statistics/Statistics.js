import './Statistics.css'
import format from 'date-fns/format'
import { getTime } from '../../helpers/get-time'
import Button from '../button/Button'

function Statistics({ calls, removeCall }) {
  return (
    <section>
      <h2>Recent Calls</h2>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Started</th>
            <th>Ended</th>
            <th>Duration</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {calls.map((call, index) => {
            const handleRemoveClick = () => {
              removeCall(call.startDate)
            }

            return (
              <tr key={Number(call.startDate)}>
                <td>{index + 1}</td>
                <td>{format(call.startDate, 'dd/MM/yyyy')}</td>
                <td>{format(call.startDate, 'HH:mm:ss')}</td>
                <td>{format(call.endDate, 'HH:mm:ss')}</td>
                <td>{getTime(call.duration / 1000)}</td>
                <td>
                  <Button variant="button__delete" onClick={handleRemoveClick}>
                    Delete
                  </Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default Statistics
