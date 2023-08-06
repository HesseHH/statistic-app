import { useSelector } from 'react-redux';

import { Formula, Paragraph, Section } from './';
import { info } from '../data/info';

export const Information = () => {

    const { groupedData } = useSelector(state => state.frecuencyTable);

    return (
        <div className='pb-10'>
            <span className='text-cyan-400'></span>
            <h1 className='to-slate-950 text text-center hover:text-cyan-400 rounded-lg text-3xl font-bold text-cyan-600 mt-12'>
                Medidas estadísticas
            </h1>
            <div className='flex justify-center flex-wrap'>

                {groupedData
                    ? info.groupedData.map(inf => (
                        <div key={inf.id} className='w-[330px] sm:p-2 p-0 pb-2'>
                            <Section subtitle={inf.title}>
                                <Paragraph>
                                    <p dangerouslySetInnerHTML={{ __html: inf.text}}></p>

                                    {inf.formula && <Formula><p>{inf.formula}</p></Formula>}
                                </Paragraph>
                            </Section>
                        </div>
                    ))
                    : info.nonGroupedData.map(inf => (
                        <div key={inf.id+1} className='w-[330px] sm:p-2 p-0 pb-2'>
                            <Section subtitle={inf.title}>
                                <Paragraph>
                                    <p dangerouslySetInnerHTML={{ __html: inf.text}}></p>

                                    {inf.formula && <Formula><p>{inf.formula}</p></Formula>}
                                </Paragraph>
                            </Section>
                        </div>
                    ))}
            </div>
        </div>
    )
}
