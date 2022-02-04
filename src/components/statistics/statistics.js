import format from 'date-fns/format'
import { getTime } from '../../helpers/get-time'
import Duration from './duration'
import Icon from '../icon'

const cTableHead = 'border-b font-medium p-4 text-slate-400 text-left'

const cTableData = 'p-4 text-slate-400'

function Statistics({ calls, removeCall }) {
  const totalDuration = calls.reduce(
    (acc, current) => acc + current.duration / 1000,
    0,
  )
  const averageDuration =
    calls.length > 0 ? Math.floor(totalDuration / calls.length) : 0

  return (
    <div className="p-5 space-y-4">
      <div className="font-semibold text-xl">Recent Calls</div>

      <div className="shadow-sm rounded overflow-auto">
        <table className="border-collapse table-auto w-full text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className={cTableHead}>#</th>
              <th className={cTableHead}>Data</th>
              <th className={cTableHead}>Started</th>
              <th className={cTableHead}>Ended</th>
              <th className={cTableHead}>Duration</th>
              <th className={cTableHead}>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {calls.map((call, index) => {
              const handleRemoveClick = () => {
                removeCall(call.startDate)
              }

              return (
                <tr
                  className="even:bg-slate-50 hover:bg-yellow-50 transition-colors duration-150"
                  key={Number(call.startDate)}
                >
                  <td className={cTableData}>{index + 1}</td>
                  <td className={cTableData}>
                    {format(call.startDate, 'dd/MM/yyyy')}
                  </td>
                  <td className={cTableData}>
                    {format(call.startDate, 'HH:mm:ss')}
                  </td>
                  <td className={cTableData}>
                    {format(call.endDate, 'HH:mm:ss')}
                  </td>
                  <td className={cTableData}>
                    {getTime(call.duration / 1000)}
                  </td>
                  <td className={cTableData}>
                    <Icon
                      onClick={handleRemoveClick}
                      icon="trash"
                      type="outline"
                      size="xs"
                      className="text-slate-700"
                    />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="text-slate-500 space-y-1 text-sm">
        <Duration title="Total Calls Duration:" time={totalDuration} />
        <Duration title="Average Call Duration:" time={averageDuration} />
      </div>
    </div>
  )
}

export default Statistics
