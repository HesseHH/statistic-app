import { FrecuencyTable } from './one-dimensional/components';
import { Charts } from './one-dimensional/components/Charts';
import { Information } from './one-dimensional/components/Information';

export const StatisticApp = () => {
  return (
    <div className="h-screen bg-slate-950">
        <FrecuencyTable />
        <Information />
        <Charts />
    </div>
  )
}
