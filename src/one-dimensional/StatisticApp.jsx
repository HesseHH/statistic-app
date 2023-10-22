import { FrecuencyTable, Charts, Information } from './components';

export const StatisticApp = () => {
  return (
    <div className="h-screen bg-slate-950">
        <FrecuencyTable />
        <Information />
        <Charts />
    </div>
  )
}
